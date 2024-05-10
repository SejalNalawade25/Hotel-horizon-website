import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className='play-icon' onClick = {()=>
        {setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Spend Your Time With Us</h2>
        <p>
          Located in Delhi, Hotel Horizon provide a peaceful, private retreat in
          the heart of one of the world's most iconic cities. Experience a
          sophisticated blend of professional services and home comforts. We
          proudly offers a full range of complimentary amenities and services
          that provide you with everything you need for an inspiring stay.
        </p>
        <p>
          The experienced chefs creates international specialties with unique
          flavors. Relax with gourmet cuisine and signature cocktails or
          homemade tonics, all enhanced by beautiful music and gorgeous views
          over the city. From seasonal menus to dining experiences to satisfy
          any craving, see what our chefs are preparing for you.
        </p>
        <p>All you need to know to ensure your trip is perfect.</p>
      </div>
    </div>
  );
};

export default About;
