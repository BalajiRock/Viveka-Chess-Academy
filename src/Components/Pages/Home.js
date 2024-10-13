import React from 'react';
import './Home.css'; // Import the CSS file
import chessImage from '../../Assets/Home_background.jpg'; // Replace with the actual path of the image

const Home = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${chessImage})` }}>
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Viveka Chess Academy – "Mastering Minds"</h1>
        <p>
        At Viveka Chess Academy, we are dedicated to shaping young minds through the art of chess. Our mission is to provide exceptional in-person chess coaching, offering world-class training that is both accessible and affordable. Whether you're a beginner or looking to elevate your advanced skills, our well-structured programs cater to players of all levels.
        </p>
      </div>
    </div>
  );
};

export default Home;