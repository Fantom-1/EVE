import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import fs from 'fs';

dotenv.config();

// Load Firebase Admin SDK credentials
const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", "utf8"));

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 🔐 Middleware: Verify Firebase Token & Check Admin Email in SQL
const verifyAdmin = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        
        const decodedToken = await admin.auth().verifyIdToken(token);
        const userEmail = decodedToken.email;

        // Check if user email exists in Admins table
        const [rows] = await db.query("SELECT * FROM Admins WHERE email = ?", [userEmail]);

        if (rows.length === 0) {
            return res.status(403).json({ message: "Access denied. Only admins can create events." });
        }

        req.user = decodedToken; 
        next(); 
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};

//  API: Check If Logged-In User Is Admin
app.get('/api/check-admin', async (req, res) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        const userEmail = decodedToken.email;

        const [rows] = await db.query("SELECT * FROM Admins WHERE email = ?", [userEmail]);
        res.json({ isAdmin: rows.length > 0 });
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
});

//  API: Create Event (Only Admins Can Access)
app.post('/api/events', verifyAdmin, async (req, res) => {
    const {
        eventName,
        organiser,
        posterLink,
        thumbnailLink,
        mainEvent,
        status,
        lastUpdate,
        field,
        aboutEvent,
        prizePool,
        eligibility,
        contactOrganisers,
        registrationLink,
        eventDateTime
    } = req.body;

    const createdBy = req.user.email;

    if (!eventName || !eventDateTime) {
        return res.status(400).json({ message: "Event name and date are required" });
    }

    try {
        const query = `
            INSERT INTO Information 
            (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Event_Date_Time)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        await db.query(query, [
            eventName,
            organiser,
            posterLink,
            thumbnailLink,
            mainEvent,
            status,
            lastUpdate,
            field,
            aboutEvent,
            prizePool,
            eligibility,
            contactOrganisers,
            registrationLink,
            eventDateTime,
            createdBy
        ]);
        
        res.json({ message: "Event created successfully" });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Database error" });
    }
});

// API: Get All Events (For Display on Frontend)
app.get('/api/events', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Information');
        res.json(rows);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).send('Database error');
    }
});

//  API: Get Gallery Images
app.get('/api/images', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Gallery');
        res.json(rows);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).send('Database error');
    }
});
app.post('/api/upload', async (req, res) => {
    const { url, caption } = req.body;

    if (!url || !caption) {
        return res.status(400).json({ message: "Image URL and caption are required" });
    }

    try {
        
        let width = 320; 
        let height = Math.floor(Math.random() * (250 - 180) + 180); 

        await db.query(
            "INSERT INTO Gallery (url, thumbnailUrl, width, height, caption) VALUES (?, ?, ?, ?, ?)",
            [url, url, width, height, caption]
        );
        res.json({ message: "Image uploaded successfully" });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Database error" });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
