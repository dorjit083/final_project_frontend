import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/studentMessage/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
            {submitted ? (
              <p>Thank you for your message!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit">Send</button>
              </form>
            )}
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Participant Engagement System</p>
        </footer>
      </div>
    </div>
  );
};
