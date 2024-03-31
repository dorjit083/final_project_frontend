import React from "react";
import "./Contact.css"; // You can create a separate CSS file for styling if needed

export const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <header>
          <h1>Contact Us</h1>
        </header>
        <main>
          <section className="contact-info-section">
            <h2>Contact Information</h2>
            <p>
              Feel free to reach out to us via email or phone for any inquiries
              or questions you may have.
            </p>
            <div className="contact-info">
              <p>Email: dorji@tshering.com</p>
              <p>Phone: +97512345678</p>
            </div>
          </section>

          <section className="contact-form-section">
            <h2>Send us a Message</h2>
            {/* Add your contact form component here */}
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Participant Engagement System</p>
        </footer>
      </div>
    </div>
  );
};
