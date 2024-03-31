import React from "react";
import "./UserIncentives.css"; // You can create a separate CSS file for styling if needed

export const UserIncentives = () => {
  return (
    <div>
      <div className="user-incentives-container">
        <header>
          <h1>User Incentives</h1>
        </header>
        <main>
          <section className="incentives-description-section">
            <h2>Why Participate?</h2>
            <p>
              Discover the various incentives and benefits available for
              participants engaging with our platform.
            </p>
          </section>

          <section className="incentives-list-section">
            <h2>Benefits for Users</h2>
            <div className="incentives-list">
              <div className="incentive-card">
                <h3>Reward Points</h3>
                <p>Earn points for active participation.</p>
              </div>
              <div className="incentive-card">
                <h3>Exclusive Content Access</h3>
                <p>Unlock premium content and features.</p>
              </div>
              <div className="incentive-card">
                <h3>Discounts</h3>
                <p>Access special discounts on events and services.</p>
              </div>
              <div className="incentive-card">
                <h3>Recognition</h3>
                <p>Be recognized for your contributions and engagement.</p>
              </div>
              <div className="incentive-card">
                <h3>Early Access</h3>
                <p>Get early access to new features and updates.</p>
              </div>
            </div>
          </section>

          <section className="how-to-earn-section">
            <h2>How to Earn Incentives</h2>
            <ul>
              <li>Participate actively in events and discussions.</li>
              <li>Invite friends and colleagues to join the platform.</li>
              <li>Provide valuable feedback and suggestions.</li>
              <li>Complete specific tasks or challenges.</li>
            </ul>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Participant Engagement System</p>
        </footer>
      </div>
    </div>
  );
};
