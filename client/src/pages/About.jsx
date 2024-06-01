import React from 'react';
import Header from "../components/Header";
import FooterComponent from "../components/Footer";
import "../pages/About.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-card">
          <h2 className="title">Why Queue?</h2>
          <p className =  "description">Queues are a common frustration in commercial stores, wasting precious time as customers wait for each item to be scanned and billed. Our solution eradicates this inefficiency, providing a seamless shopping experience by drastically reducing wait times.</p>
        </div>
        <div className="about-card">
          <h2 className="title">Why RFID?</h2>
          <p  className=  "description">Compared to traditional barcodes and QR codes, RFID technology is faster, more efficient, and advanced. It allows simultaneous scanning of multiple items, enhances accuracy, and offers robust security, making it a superior choice for modern retail environments.</p>
        </div>
        <div className="about-card">
          <h2 className="title">Why not Further Progress?</h2>
          <p className =  "description">Despite the technological advantages, our project faced significant challenges in becoming a viable startup. The business model lacked long-term profitability, and we couldn't establish a sustainable way to generate revenue, ultimately hindering our success.</p>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default About;