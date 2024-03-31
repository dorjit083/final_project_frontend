import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="home-container">
        <header>
          <h1>Welcome to Participant Engagement System</h1>
        </header>
        <main>
          {/* Hero Section */}
          <section className="hero-section">
            <h2>Empowering Engagement</h2>
            <p>
              We provide innovative solutions to enhance participant
              engagement.
            </p>
            <button className="cta-button">Get Started</button>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <h2>Our Services</h2>
            <div className="features">
              <div className="feature-card">
                <h3>Participant Registration</h3>
                <p>Seamless registration process for participants.</p>
              </div>
              <div className="feature-card">
                <h3>Event Management</h3>
                <p>Efficient management of events and schedules.</p>
              </div>
              <div className="feature-card">
                <h3>Engagement Tracking</h3>
                <p>Track and analyze participant engagement metrics.</p>
              </div>
              <div className="feature-card">
                <h3>Feedback Collection</h3>
                <p>Gather feedback from participants to improve experiences.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            <h2>Contact Us</h2>
            <p>Email: dorji@tshering.com</p>
            <p>Phone: +97512345678</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Participant Engagement System</p>
        </footer>
      </div>
    </div>
  );
};
