import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card.jsx";
import "./Content.css";
import { useState, useEffect } from "react";

export default function Content() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/events") 
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error("Error fetching events:", error));
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500, 
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    };

    const currentDate = new Date();
    const upcomingEvents = events.filter(event => new Date(event.Event_Date_Time) > currentDate);
    const recentEvents = events.filter(event => new Date(event.Event_Date_Time) <= currentDate);

    return (
        <div className="main_content">
            <div className="box1">
                <h2>Upcoming Events...</h2>
                <div className="cards">
                    <Slider {...sliderSettings}>
                        {upcomingEvents.map((event, index) => (
                            <Card 
                                key={index} 
                                cardImg={event.Thumbnail_Link || "default_poster.jpg"}  
                                cardTitle={event.Events || ""} 
                                cardText={event.Teaser || ""} 
                                className="sliderCard" 
                                moreInfoLink={event.MoreInfo_Link || "#"} 
                                registerLink={event.Registration_Link || "#"}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="box1">
                <h2>Recent Events...</h2>
                <div className="cards">
                    <Slider {...sliderSettings}>
                        {recentEvents.map((event, index) => (
                            <Card 
                                key={index} 
                                cardImg={event.Thumbnail_Link || "default_poster.jpg"}  
                                cardTitle={event.Events || ""} 
                                cardText={event.Teaser || ""} 
                                className="sliderCard" 
                                moreInfoLink={event.MoreInfo_Link || "#"} 
                                registerLink={event.Registration_Link || "#"}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
