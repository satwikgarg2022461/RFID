import React from 'react';
import Header from "../components/Header";
import FooterComponent from "../components/Footer";
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div>
      <Header /> {/* Add the Header component */}

    <section id="why-queue">
        <a name="why-long-queue"></a>
        <h2 className="slide-in">Why Long Queue?</h2>
        <img src="images/long_queue.jpg" alt="Queue Image" className="slide-in" />
    </section>
    <section id="why-rfid">
        <a name="why-rfid"></a>
        <h2 className="slide-in">Why RFID?</h2>
        <img src="images/rfid.jpg" alt="RFID Image" className="slide-in" />
    </section>
      <FooterComponent /> {/* Add the Footer component */}
    </div>
  );
};

export default About;