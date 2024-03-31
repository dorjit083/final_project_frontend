import React from "react";
import "./About.css"; // You can create a separate CSS file for styling if needed

export const About = () => {
    return (
        <div>
            <div className="about-container">
                <header>
                    <h1>About Us</h1>
                </header>
                <main>
                    <section className="about-section">
                        <h2>Our Story</h2>
                        <p>

                            Founded in 2024 in Thimphu, Bhutan, Participant Engagement System (PES) emerged from a shared vision among a group of passionate individuals determined to revolutionize participant engagement in various events and programs. Our journey began with a simple yet profound question: How can we create meaningful connections and foster engagement in a world increasingly driven by digital interactions?

                            Driven by this question, our team embarked on a journey of innovation, collaboration, and continuous improvement. Over the years, we've worked tirelessly to develop cutting-edge solutions that empower organizations to enhance participant engagement across a wide range of contexts, from conferences and workshops to training programs and community events.

                            Rooted in our commitment to excellence and customer satisfaction, PES has grown into a leading provider of participant engagement solutions, trusted by organizations worldwide. Our dedication to understanding our clients' needs, coupled with our relentless pursuit of innovation, sets us apart in an ever-evolving landscape.

                            As we look to the future, we remain steadfast in our mission to redefine participant engagement, leveraging technology to create immersive and interactive experiences that inspire, educate, and empower individuals to connect, learn, and grow.

                        </p>
                    </section>

                    <section className="team-section">
                        <h2>Our Team</h2>
                        <div className="team-members">
                            {/* List your team members here */}
                            <div className="team-member">
                                <h3>Tshering Dorji</h3>
                                <p>Role: CEO</p>
                            </div>
                            <div className="team-member">
                                <h3>Dorji Tshering</h3>
                                <p>Role: CTO</p>
                            </div>
                            {/* Add more team members as needed */}
                        </div>
                    </section>

                    <section className="mission-section">
                        <h2>Our Mission</h2>
                        <p>

                            At Participant Engagement System (PES), our mission is to empower organizations and individuals to create immersive and interactive experiences that foster meaningful connections and drive positive change. We are committed to leveraging technology and innovation to revolutionize participant engagement across diverse contexts, from conferences and workshops to training programs and community events.

                            Central to our mission is the belief that every interaction matters. We strive to provide organizations with the tools and resources they need to engage participants authentically, inspire collaboration, and cultivate lasting relationships. By harnessing the power of data and analytics, we enable organizations to gain valuable insights into participant behavior, preferences, and trends, facilitating informed decision-making and continuous improvement.

                            As stewards of engagement, we are dedicated to excellence, integrity, and customer satisfaction. We partner with organizations of all sizes and industries, tailoring our solutions to meet their unique needs and objectives. Through our unwavering commitment to innovation and customer success, we aim to be the catalyst for transformative experiences that leave a lasting impact on participants and communities alike.

                            Together, we are shaping the future of participant engagement, one interaction at a time.

                        </p>
                    </section>
                </main>
                <footer>
                    <p>&copy; 2024 Participant Engagement System</p>
                </footer>
            </div>
        </div>
    );
};
