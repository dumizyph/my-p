"use client";
import React, { useState, useEffect } from "react";

const HomeContent = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const skills = [
    { name: "React.js", level: 90, color: "#61DAFB" },
    { name: "Node.js", level: 85, color: "#339933" },
    { name: "TypeScript", level: 80, color: "#3178C6" },
    { name: "MongoDB", level: 75, color: "#47A248" },
    { name: "PostgreSQL", level: 70, color: "#4169E1" },
    { name: "TailwindCSS", level: 88, color: "#06B6D4" },
  ];

  const roles = [
    "Full Stack Developer",
    "Frontend Specialist",
    "Backend Engineer",
    "UI/UX Enthusiast",
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Complete online shopping solution with payment integration",
      tech: ["React", "Node.js", "Stripe"],
      status: "Live",
      icon: "🛒",
    },
    {
      title: "Real-time Chat App",
      description: "Multi-room chat application with file sharing",
      tech: ["Socket.io", "Express", "MongoDB"],
      status: "Development",
      icon: "💬",
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization tool for business insights",
      tech: ["D3.js", "PostgreSQL", "Redis"],
      status: "Live",
      icon: "📊",
    },
  ];

  const achievements = [
    { number: "50+", text: "Projects Delivered", icon: "🚀" },
    { number: "2+", text: "Years Experience", icon: "⭐" },
    { number: "20+", text: "Happy Clients", icon: "😊" },
    { number: "95%", text: "Success Rate", icon: "🎯" },
  ];

  useEffect(() => {
    setIsLoaded(true);

    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => {
      clearInterval(skillInterval);
      clearInterval(roleInterval);
    };
  }, []);

  return (
    <div className={`home-content ${isLoaded ? "loaded" : ""}`}>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="status-badge">
            <div className="status-dot"></div>
            <span>Available for work</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Rafey</span> 👋
          </h1>

          <div className="role-container">
            <span className="role-text">I'm a </span>
            <span className="rotating-role">{roles[currentRole]}</span>
          </div>

          <p className="hero-description">
            Passionate about crafting digital experiences that combine beautiful
            design with powerful functionality. I transform ideas into scalable
            web solutions.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              <span>View My Work</span>
              <div className="btn-arrow">→</div>
            </button>
            <button className="btn-secondary">
              <span>Get In Touch</span>
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">💻</div>
          <div className="floating-card card-2">⚡</div>
          <div className="floating-card card-3">🎨</div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          {achievements.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-text">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills & Projects Grid */}
      <div className="content-grid">
        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="section-title">
            <span className="title-icon">💻</span>
            Technical Skills
          </h3>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-item ${
                  currentSkill === index ? "active" : ""
                }`}
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      "--progress": `${skill.level}%`,
                      "--color": skill.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="projects-section">
          <h3 className="section-title">
            <span className="title-icon">🚀</span>
            Featured Work
          </h3>

          <div className="projects-container">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <div
                    className={`project-status ${project.status.toLowerCase()}`}
                  >
                    {project.status}
                  </div>
                </div>

                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="project-link">
                  View Project <span>↗</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick About */}
      <div className="about-section">
        <div className="about-content">
          <h3 className="section-title">
            <span className="title-icon">✨</span>A Little About Me
          </h3>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm passionate about creating digital experiences that make a
                difference. With over 2 years of experience, I've worked on
                projects ranging from small business websites to complex web
                applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source, or enjoying a good cup of coffee ☕
              </p>
            </div>

            <div className="fun-facts">
              <div className="fact-item">
                <span className="fact-icon">☕</span>
                <span>Coffee enthusiast</span>
              </div>
              <div className="fact-item">
                <span className="fact-icon">🌙</span>
                <span>Night owl developer</span>
              </div>
              <div className="fact-item">
                <span className="fact-icon">🎵</span>
                <span>Lo-Fi music lover</span>
              </div>
              <div className="fact-item">
                <span className="fact-icon">📚</span>
                <span>Continuous learner</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h3>Ready to bring your ideas to life?</h3>
          <p>Let's collaborate and create something amazing together!</p>
          <button className="btn-cta">
            <span>Start a Project</span>
            <div className="btn-shine"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;

/* HomeContent.scss */
