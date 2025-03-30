import { Link } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import SidePanel from "./SidePanel.jsx";
import "./BottomHalfClub.css";
import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import {crispr, dotslash, cresendo, dimensions, elevate, estoria, iotics, orator, probe, strokes, udyam} from "./assets/Pictures.jsx";

const slides = [
  {
    key: uuidv4(),
    content:(
      <div className="cardContainer">
        <img src={crispr} alt="Slide 1" className='clubCard'/>
        <div className="description">
          <h4>CRISPR 🧬</h4>
          <p>Central Research Initiative and Student Public Relations, a technical club that nurtures and develops new ideas.
            A vibrant community where students connect, innovate and collaborate.</p>
          <Link to={`crispr-info`} className="btn btn-primary clubInfoBtn" onClick={() => onClubSelect("crispr")}>More Info</Link>
        </div>
      </div>
    )
  },
  {
    key: uuidv4(),
    content: (
      <div className="cardContainer">
        <img src={dotslash} alt="Slide 2" className='clubCard' />
        <div className="description">
          <h4>DOTSLASH 👨‍💻</h4>
          <p>Club focused on advancing technical expertise through supportive and collaborative environment. 
            Club offers various range of activities including coding competitions, hackathons and workshops, with the exciting Quant Competition on the horizon.</p>
          <Link to={`club-info`} className="btn btn-primary clubInfoBtn" onClick={() => onClubSelect("dotslash")}>More Info</Link>
        </div>
      </div>
    )
  },
  {
    key: uuidv4(),
    content: (
      <div className="cardContainer">
        <img src={cresendo} alt="Slide 3" className='clubCard' />
        <div className="description">
          <h4>CRESENDO 🎸</h4>
          <p>Crescendo represents the continuous rise of musical energy within the institute. 
            The club embraces all forms of musical expression, from vocalists and instrumentalists to sound engineers and event managers.</p>
          <Link to={`club-info`} className="btn btn-primary clubInfoBtn" onClick={() => onClubSelect(club.key)}>More Info</Link>
        </div>
      </div>
    )
  },
  {
    key: uuidv4(),
    content: (
      <div className="cardContainer">
        <img src={dimensions} alt="Slide 4" className='clubCard' />
        <div className="description">
          <h4>DIMENSIONS 🎮</h4>
          <p>Dimensions is a collaborative community that aims to innovate in the Game Development and AR/VR domains. 
            Approaching the game industry feels like a daunting task, and so Dimensions provides an excellent opportunity for all with a passion for video games.</p>
          <Link to={`club-info`} className="btn btn-primary clubInfoBtn" onClick={() => onClubSelect(club.key)}>More Info</Link>
        </div>
      </div>
    )
  },
  {
    key: uuidv4(),
    content: (
      <div className="cardContainer">
        <img src={elevate} alt="Slide 5" className='clubCard' />
        <div className="description">
          <h4>ELEVATE 💻</h4>
          <p>Elevate Club is a student-led development club that emphasizes peer-to-peer learning across both technical and non-technical areas. 
            Club organises workshops, coding sessions and hands on projects to enhance technical skills.</p>
          <Link to={`club-info`} className="btn btn-primary clubInfoBtn" onClick={() => onClubSelect(club.key)}>More Info</Link>
        </div>
      </div>
    )
  },
  {
    key: uuidv4(),
    content: (
      <div className="cardContainer">
        <img src={estoria} alt="Slide 6" className='clubCard' />
        <div className="description">
          <h4>ESTORIA 🎭</h4>
          <p>The drama and poetry club of IIIT Nagpur. Who rarely chase talent, as they prefer growing talent there itself. 
            From thre rhythm of words to the power of the stage, Estoria brings the art of drama and poetry to life.</p>
          <Link to={`club-info`} className="btn btn-primary clubInfoBtn" onClick={() => onClubSelect(club.key)}>More Info</Link>
        </div>
      </div>
    )
  },
  {
    key: uuidv4(),
    content: (
      <div className="cardContainer">
        <img src={iotics} alt="Slide 7" className='clubCard' />
        <div className="description">
          <h4>IOTICS 🤖</h4>
          <p>loTics Club offers a dynamic learning platform for students passionate about the Internet of Things (IoT). 
            Club provides members with opportunities to engage in hands-on workshops and innovative projects using leading loT technologies like Arduino, Raspberry Pi, and cloud computing.</p>
          <Link to={`club-info`} className="btn btn-primary clubInfoBtn" onClick={() => onClubSelect(club.key)}>More Info</Link>
        </div>
      </div>
    )
  },
  {
    key: uuidv4(),
    content: (
      <div className="cardContainer">
        <img src={orator} alt="Slide 8" className='clubCard' />
        <div className="description">
          <h4>ORATOR 🗣</h4>
          <p>The Orator Club  is a dynamic, student-led initiative focused on cultivating public speaking, debating, and critical thinking around global affairs and geopolitical issues.</p>
          <Link to={`club-info`} className="btn btn-primary clubInfoBtn" onClick={() => onClubSelect(club.key)}>More Info</Link>
        </div>
      </div>
    )
  },
  {
    key: uuidv4(),
    content: (
      <div className="cardContainer">
        <img src={probe} alt="Slide 9" className='clubCard' />
        <div className="description">
          <h4>PROBE 📷</h4>
          <p>With focus on media, photography and videography this club captures the essence of campus life.
            Club offers platform for diverse talents.
            Club conducts workshops, organize photo walks and covers major events like College Fests and Ganesh chaturthee.</p>
          <Link to={`club-info`} className="btn btn-primary clubInfoBtn" onClick={() => onClubSelect(club.key)}>More Info</Link>
        </div>
      </div>
    )
  },
  {
    key: uuidv4(),
    content: (
      <div className="cardContainer">
          <img src={strokes} alt="Slide 10" className='clubCard' />        
          <div className="description">
            <h4>STROKES 🎨</h4>
            <p>Strokes is a vibrant design club that fosters creativity and innovation among students passionate about arts, design and technology. 
              Through engaging workshops, design challenges and real-world projects Strokes empowers members to build strong portfolio while learning from one another.</p>
            <Link to={`club-info`} className="btn btn-primary clubInfoBtn" onClick={() => onClubSelect(club.key)}>More Info</Link>
        </div>
      </div>
    )
  },
  {
    key: uuidv4(),
    content: (
      <div className="cardContainer">
        <img src={udyam} alt="Slide 11" className='clubCard' />
        <div className="description">
          <h4>UDYAM 🚀</h4>
          <p>Clubs mission is to empower aspiring entrepreneurs, startups and small businesses by providing the knowledge, 
            resources and support they need to transform ideas into successful ventures.</p>
          <Link to={`club-info`} className="btn btn-primary clubInfoBtn" onClick={() => onClubSelect(club.key)}>More Info</Link>
        </div>
      </div>
    )
  }
];

export default function BottomHalfClub({menuBar, toggleMenuBar}) {
  const [goToSlide, setGoToSlide] = useState(0);
  const formattedSlides = slides.map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index) // Allows manual navigation
  }));

  return (
    <div className="BottomHalfClub" style={{ 
      width: "80%", 
      height: "500px", 
      margin: "0 auto"}}>
      <div className={`SidePanel ${menuBar ? "visible" : "hidden"}`} >
      <SidePanel/>
      </div>

      <div>
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer-1 })}
          open={menuBar}
          onClick={toggleMenuBar}
        >
        </Backdrop>
      </div>

      <div className='ClubContent'>
        <Carousel
          slides={formattedSlides}
          goToSlide={goToSlide}
          offsetRadius={2} // Controls depth effect
          showNavigation={true} // Enables navigation arrows
          animationConfig={{ tension: 120, friction: 14 }} // Animation smoothing
        />
      </div>
    </div>
  );
}
