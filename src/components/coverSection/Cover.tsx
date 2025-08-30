import React from "react";

const Cover = () => {
  return (
    <section className="cover">
      <div className="cover-bg"></div>

      <div className="glass-card">
        {/* Profile Image */}
        <img src="/me.png" alt="Profile" className="profile-img" />

        {/* Intro Text */}
        <div>
          <h2>Hi, I’m Rafey 👋</h2>
          <p>
            Full Stack Developer | Crafting code into unique digital solutions
          </p>
          <div className="buttons">
            <button className="btn primary">View Projects</button>
            <button className="btn dark">Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
