"use client";
import React, { useState, useEffect } from "react";
// import "./BioLinksPage.scss";

const BioLinksPage = () => {
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);

  // Profile data
  const profileData = {
    name: "Alex Morgan",
    tagline: "Product Designer & Creative Developer",
    location: "📍 San Francisco, CA",
    image: "", // Empty for fallback initials
    verified: true,
  };

  // Social links
  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "https://instagram.com" },
    { name: "YouTube", icon: "▶️", url: "https://youtube.com" },
    { name: "TikTok", icon: "🎵", url: "https://tiktok.com" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "GitHub", icon: "⚡", url: "https://github.com" },
    { name: "Email", icon: "✉️", url: "mailto:hello@example.com" },
  ];

  // Links data
  const linksData = [
    {
      id: 1,
      title: "Book a Free Consultation",
      subtitle: "Let's discuss your next project",
      url: "https://calendly.com",
      icon: "📅",
      tag: "Popular",
      isFeatured: true,
      analyticsLabel: "featured_booking",
    },
    {
      id: 2,
      title: "Design Portfolio",
      subtitle: "View my latest work & case studies",
      url: "https://portfolio.com",
      icon: "🎨",
      tag: "New",
      isFeatured: false,
      analyticsLabel: "portfolio",
    },
    {
      id: 3,
      title: "UI Kit Shop",
      subtitle: "Premium design resources",
      url: "https://shop.com",
      icon: "🛍️",
      tag: "Free",
      isFeatured: false,
      analyticsLabel: "shop",
    },
    {
      id: 4,
      title: "Weekly Newsletter",
      subtitle: "Design tips & industry insights",
      url: "https://newsletter.com",
      icon: "📬",
      isFeatured: false,
      analyticsLabel: "newsletter",
    },
    {
      id: 5,
      title: "YouTube Channel",
      subtitle: "Design tutorials & reviews",
      url: "https://youtube.com",
      icon: "🎬",
      tag: "Popular",
      isFeatured: false,
      analyticsLabel: "youtube",
    },
    {
      id: 6,
      title: "Open Source Projects",
      subtitle: "Check out my GitHub repos",
      url: "https://github.com",
      icon: "💻",
      isFeatured: false,
      analyticsLabel: "github",
    },
    {
      id: 7,
      title: "Download Resume",
      subtitle: "PDF format, updated monthly",
      url: "https://resume.com",
      icon: "📄",
      isFeatured: false,
      analyticsLabel: "resume",
    },
    {
      id: 8,
      title: "Support My Work",
      subtitle: "Buy me a coffee ☕",
      url: "https://buymeacoffee.com",
      icon: "❤️",
      isFeatured: false,
      analyticsLabel: "support",
    },
  ];

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("biolinks-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    // Simulate loading
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("biolinks-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleLinkClick = (id: any, analyticsLabel: any) => {
    setClickedLink(id);
    console.log("Link clicked:", analyticsLabel);
    setTimeout(() => setClickedLink(id), 600);
  };

  const getInitials = (name: any) => {
    return name
      .split(" ")
      .map((n: any) => n[0])
      .join("")
      .toUpperCase();
  };

  const filteredLinks = linksData.filter(
    (link) =>
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (link.subtitle &&
        link.subtitle.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const featuredLink = filteredLinks.find((link) => link.isFeatured);
  const regularLinks = filteredLinks.filter((link) => !link.isFeatured);

  return (
    <div className={`biolinks-page theme--${theme}`}>
      <div className="biolinks-page__background">
        <div className="blob blob--1"></div>
        <div className="blob blob--2"></div>
        <div className="blob blob--3"></div>
      </div>

      <div className="biolinks-page__container">
        <header className="biolinks-header">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <div className="profile">
            <div className="profile__image">
              {profileData.image ? (
                <img src={profileData.image} alt={profileData.name} />
              ) : (
                <div className="profile__initials">
                  {getInitials(profileData.name)}
                </div>
              )}
            </div>
            <div className="profile__info">
              <h1 className="profile__name">
                {profileData.name}
                {profileData.verified && (
                  <span className="profile__badge" aria-label="Verified">
                    ✓
                  </span>
                )}
              </h1>
              <p className="profile__tagline">{profileData.tagline}</p>
              <p className="profile__location">{profileData.location}</p>
            </div>
          </div>
        </header>

        <nav className="social-links" aria-label="Social media links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="social-links__item"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <span className="social-links__icon">{social.icon}</span>
            </a>
          ))}
        </nav>

        <div className="stats">
          <div className="stats__item">
            <span className="stats__value">12.5K</span>
            <span className="stats__label">Profile Views</span>
          </div>
          <div className="stats__item">
            <span className="stats__value">3.2K</span>
            <span className="stats__label">Link Clicks</span>
          </div>
        </div>

        <main className="links-section">
          <div className="search-bar">
            <span className="search-bar__icon">🔍</span>
            <input
              type="text"
              className="search-bar__input"
              placeholder="Search links..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search links"
            />
            {searchQuery && (
              <button
                className="search-bar__clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {isLoading ? (
            <div className="links-list">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="link-skeleton"></div>
              ))}
            </div>
          ) : filteredLinks.length === 0 ? (
            <div className="no-results">
              <span className="no-results__icon">🔍</span>
              <p className="no-results__text">No links found</p>
            </div>
          ) : (
            <>
              {featuredLink && (
                <div className="featured-section">
                  <a
                    href={featuredLink.url}
                    className={`link-card link-card--featured ${
                      clickedLink === featuredLink.id
                        ? "link-card--clicked"
                        : ""
                    }`}
                    onClick={() =>
                      handleLinkClick(
                        featuredLink.id,
                        featuredLink.analyticsLabel
                      )
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {featuredLink.tag && (
                      <span
                        className={`link-card__tag link-card__tag--${featuredLink.tag.toLowerCase()}`}
                      >
                        {featuredLink.tag}
                      </span>
                    )}
                    <div className="link-card__icon">{featuredLink.icon}</div>
                    <div className="link-card__content">
                      <h3 className="link-card__title">{featuredLink.title}</h3>
                      {featuredLink.subtitle && (
                        <p className="link-card__subtitle">
                          {featuredLink.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="link-card__arrow">→</div>
                  </a>
                </div>
              )}

              <div className="links-list">
                {regularLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className={`link-card ${
                      clickedLink === link.id ? "link-card--clicked" : ""
                    }`}
                    onClick={() =>
                      handleLinkClick(link.id, link.analyticsLabel)
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.tag && (
                      <span
                        className={`link-card__tag link-card__tag--${link.tag.toLowerCase()}`}
                      >
                        {link.tag}
                      </span>
                    )}
                    <div className="link-card__icon">{link.icon}</div>
                    <div className="link-card__content">
                      <h3 className="link-card__title">{link.title}</h3>
                      {link.subtitle && (
                        <p className="link-card__subtitle">{link.subtitle}</p>
                      )}
                    </div>
                    <div className="link-card__arrow">→</div>
                  </a>
                ))}
              </div>
            </>
          )}
        </main>

        <footer className="biolinks-footer">
          <p className="biolinks-footer__text">Made with ❤️ using React</p>
          <button
            className="biolinks-footer__copy-btn"
            onClick={handleCopyLink}
            aria-label="Copy profile link"
          >
            📋 Copy Link
          </button>
        </footer>
      </div>

      {showToast && (
        <div className="toast" role="alert">
          ✓ Link copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default BioLinksPage;
