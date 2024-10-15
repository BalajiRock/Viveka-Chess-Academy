import React from 'react';
import './About.css'; // Import the CSS file for styling
import visionImage from '../../Assets/vision.jfif'; // Import Vision image
import missionImage from '../../Assets/mission.jfif'; // Import Mission image

const About = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="about-text">
        Welcome to our Chess Academy! We believe that learning chess should be accessible to everyone. Our goal is to provide in-person chess classes at affordable prices to foster a love for chess in students of age 5 - 15.
      </p>

      <div className="about-section">
        <h2>Our Vision</h2>
        <div className="section-content">
          <img src={visionImage} alt="Vision" className="vision-mission-image" />
          <ul>
            <li>To nurture strategic thinking and problem-solving skills through the art of chess, empowering young talents to excel in both the game and in life.</li>
            <li>To provide high-quality chess education by offering personalized training programs, fostering a love for the game, and promoting cognitive development.</li>
            <li>To create a supportive community where learners can thrive, collaborate, and challenge themselves to achieve mastery in chess.</li>
          </ul>
        </div>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <div className="section-content">
          <img src={missionImage} alt="Mission" className="vision-mission-image" />
          <ul>
            <li>To become a leading platform for chess education globally, recognized for innovation, excellence, and producing future chess champions.</li>
            <li>To promote chess as a tool for intellectual growth, enhancing critical thinking, focus, and decision-making in individuals across diverse race and backgrounds.</li>
            <li>To inspire a global chess community, where the game is celebrated as both a sport and an educational tool, encouraging lifelong learning and curiosity.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
