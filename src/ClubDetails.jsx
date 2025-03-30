import ClubContacts from "./ClubContacts.jsx";
import "./ClubDetails.css";
import ClubEves from "./ClubEves.jsx";

export default function ClubDetails({club}){

    return(
        <div className="ClubDetails">
            <div className="ClubDetailsPara">
                <h1>CRISPR</h1>
                <br />
                <h2>INTRODUCTION</h2>
                <p>CRISPR stands for Central Research Initiative and Students Public Relations platform that seeks to nurture and develop new ideas. We are building a welcoming community where students connect, organize events and have fun, all driven by shared values. CRISPR takes its name from a gene editing tool that can edit DNA on the atomic scale. Just like the scientific CRISPR machine, the CRISPR initiative is here to edit and shape the cultural DNA of the college in a positive way. At CRISPR, fostering a sense of community is at the core of our mission. CRISPR is a place where everyone is welcome to participate, share their ideas, and collectively collaborate on new and innovative projects.</p>
                <br />
                <h2>PHILOSOPHY</h2>
                <p>CRISPR had set out a mission to positively change the cultural, technical, and interpersonal DNA of our college through the creation of an innovative and collaborative community. The goal is to inspire creativity, and provide a space where all students can realise their potential and make a positive impact on the college and beyond. One of the main objectives of CRISPR is to fill the void that exists in many clubs and organisations, which often did not take the initiative to do something new and innovative. CRISPR focuses on hyperlocal issues with building up innovations stemming from students and deployed by the stude</p>
                <br />   
            </div>

            <h2 >CLUB EVENTS</h2>
            <div className="clubEves">
                <ClubEves clubEveHeading="ENIGMAXPLORE" clubEvePara="EnigmaXplore, organized during Tantra Fiesta, was a 24-hour online cybersecurity competition with over 1.5K+ registrations where teams tackled challenges in Reverse Engineering, Binary Exploitation, Digital Forensics, Web Exploitation, and Cryptography."/>
                <ClubEves clubEveHeading="GPT 3.5 SOLVE-A-THON" clubEvePara="The GPT 3.5 Solve-A-Thon at TantraFiesta 23 saw 800+ students in online quizzes, offline coding, and a 12- hour hackathon with a 20K prize pool, showcasing Al-driven solutions to real- world problems."/>
                <ClubEves clubEveHeading="MARKETWISE" clubEvePara="Marketwise at E-Summit 24 was a data science and machine learning competition with a 53,000 prize pool. It included a workshop, two competitive rounds, and a 36-hour hackathon where teams solved real-world challenges."/>
            </div>
            
            <div className="clubContacts">
                <ClubContacts orgPosi="CLUB LEAD" orgName="Shrut Jain" orgContact=""/>
                <ClubContacts orgPosi="CO-LEAD" orgName="Jaivardhan Bhola" orgContact=""/>
            </div>

        </div>
    )
}