import React, { useState } from "react";
import { auth } from "./firebase/firebaseConfig";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CreateEvent.css";

export default function CreateEvent() {
  const navigate = useNavigate(); // Initialize navigate function

  const [eventName, setEventName] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [posterLink, setPosterLink] = useState("");
  const [thumbnailLink, setThumbnailLink] = useState("");
  const [mainEvent, setMainEvent] = useState("");
  const [status, setStatus] = useState("");
  const [lastUpdate, setLastUpdate] = useState("");
  const [field, setField] = useState("");
  const [aboutEvent, setAboutEvent] = useState("");
  const [prizePool, setPrizePool] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [contactOrganisers, setContactOrganisers] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to create an event.");
      return;
    }

    try {
      const token = await user.getIdToken();
      const response = await fetch("http://192.168.77.84:3111/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        },
        body: JSON.stringify({
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
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Event created successfully!");
        navigate("/"); // Redirect to the main page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Error creating event.");
    }
  };

  return (
    <div className="create-event">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
        <input type="text" placeholder="Organiser" value={organiser} onChange={(e) => setOrganiser(e.target.value)} />
        <input type="text" placeholder="Poster Link" value={posterLink} onChange={(e) => setPosterLink(e.target.value)} />
        <input type="text" placeholder="Thumbnail Link" value={thumbnailLink} onChange={(e) => setThumbnailLink(e.target.value)} />
        <input type="text" placeholder="Main Event" value={mainEvent} onChange={(e) => setMainEvent(e.target.value)} />
        <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
        <input type="text" placeholder="Last Update" value={lastUpdate} onChange={(e) => setLastUpdate(e.target.value)} />
        <input type="text" placeholder="Field" value={field} onChange={(e) => setField(e.target.value)} />
        <textarea placeholder="About Event" value={aboutEvent} onChange={(e) => setAboutEvent(e.target.value)} />
        <input type="text" placeholder="Prize Pool" value={prizePool} onChange={(e) => setPrizePool(e.target.value)} />
        <input type="text" placeholder="Eligibility" value={eligibility} onChange={(e) => setEligibility(e.target.value)} />
        <input type="text" placeholder="Contact Organisers" value={contactOrganisers} onChange={(e) => setContactOrganisers(e.target.value)} />
        <input type="text" placeholder="Registration Link" value={registrationLink} onChange={(e) => setRegistrationLink(e.target.value)} />
        <input type="datetime-local" value={eventDateTime} onChange={(e) => setEventDateTime(e.target.value)} required />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}
