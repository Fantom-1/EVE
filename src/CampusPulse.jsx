import React from 'react';
import "./CampusPulse.css";
function CampusPulse() {
  return (
    <div>
      <h1>Campus Pulse</h1>
      <p>Welcome to the Campus Pulse page. Here, you can see all the latest news and updates from your campus.</p>
      <iframe
        style={{ width: '100%', height: '900px'}}
        src="https://online.pubhtml5.com/qjgde/pxut/"
        seamless="seamless"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default CampusPulse;
