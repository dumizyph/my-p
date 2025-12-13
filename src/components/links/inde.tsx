"use client";
import React, { useState, useEffect, useRef } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote"; // TikTok ka official icon MUI me nahi hota, closest
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaletteIcon from "@mui/icons-material/Palette";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import FavoriteIcon from "@mui/icons-material/Favorite";
const BioLinksPage = () => {
  type Theme = "light" | "dark";

  // Agar clickedLink sirf link ka id/title store karta hai:
  type ClickedLink = string | null;

  // Cursor trail ke liye point type
  type Point = { x: number; y: number };

  const [theme, setTheme] = useState<Theme>("light");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [clickedLink, setClickedLink] = useState<ClickedLink>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const [mousePos, setMousePos] = useState<Point>({ x: 0, y: 0 });

  // Agar trail me multiple points store karne hain:
  const [cursorTrail, setCursorTrail] = useState<Point[]>([]);

  // Container ref (usually div)
  const containerRef = useRef<HTMLDivElement | null>(null);
  // Profile data
  const profileData = {
    name: "Abdul Rafey Ahmed",
    tagline: "Product Designer & Creative Developer",
    location: "📍 San Francisco, CA",
    image: "",
    verified: true,
    level: "Pro",
    completionRate: 85,
  };

  // Social links with colors

  const socialLinks = [
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      url: "https://instagram.com",
      color: "#E4405F",
    },
    {
      name: "YouTube",
      icon: <YouTubeIcon />,
      url: "https://youtube.com",
      color: "#FF0000",
    },
    {
      name: "TikTok",
      icon: <TikTokIcon />,
      url: "https://tiktok.com",
      color: "#000000",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      url: "https://linkedin.com",
      color: "#0077B5",
    },
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      url: "https://github.com",
      color: "#181717",
    },
    {
      name: "Email",
      icon: <EmailIcon />,
      url: "mailto:hello@example.com",
      color: "#EA4335",
    },
  ];

  // Links data with engagement metrics
  const linksData = [
    {
      id: 1,
      title: "Book a Free Consultation",
      subtitle: "Let's discuss your next project",
      url: "https://calendly.com",
      icon: <CalendarMonthIcon />,
      tag: "Popular",
      isFeatured: true,
      analyticsLabel: "featured_booking",
      clicks: 2847,
      engagement: 92,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: 2,
      title: "Design Portfolio",
      subtitle: "View my latest work & case studies",
      url: "https://portfolio.com",
      icon: <PaletteIcon />,
      tag: "New",
      isFeatured: false,
      analyticsLabel: "portfolio",
      clicks: 1923,
      engagement: 78,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: 3,
      title: "UI Kit Shop",
      subtitle: "Premium design resources",
      url: "https://shop.com",
      icon: <ShoppingBagIcon />,
      tag: "Free",
      isFeatured: false,
      analyticsLabel: "shop",
      clicks: 3201,
      engagement: 88,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: 4,
      title: "Weekly Newsletter",
      subtitle: "Design tips & industry insights",
      url: "https://newsletter.com",
      icon: <MarkEmailUnreadIcon />,
      isFeatured: false,
      analyticsLabel: "newsletter",
      clicks: 1456,
      engagement: 65,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      id: 5,
      title: "YouTube Channel",
      subtitle: "Design tutorials & reviews",
      url: "https://youtube.com",
      icon: <YouTubeIcon />,
      tag: "Popular",
      isFeatured: false,
      analyticsLabel: "youtube",
      clicks: 2634,
      engagement: 82,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      id: 6,
      title: "Open Source Projects",
      subtitle: "Check out my GitHub repos",
      url: "https://github.com",
      icon: <CodeIcon />,
      isFeatured: false,
      analyticsLabel: "github",
      clicks: 987,
      engagement: 58,
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
    {
      id: 7,
      title: "Download Resume",
      subtitle: "PDF format, updated monthly",
      url: "https://resume.com",
      icon: <DescriptionIcon />,
      isFeatured: false,
      analyticsLabel: "resume",
      clicks: 1789,
      engagement: 71,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
    {
      id: 8,
      title: "Support My Work",
      subtitle: "Buy me a coffee ☕",
      url: "https://buymeacoffee.com",
      icon: <FavoriteIcon />,
      isFeatured: false,
      analyticsLabel: "support",
      clicks: 2156,
      engagement: 76,
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    },
  ];

  // Particles for background
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles: any = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  // Load theme
  useEffect(() => {
    const savedTheme: any = localStorage.getItem("biolinks-theme");
    if (savedTheme) setTheme(savedTheme);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    localStorage.setItem("biolinks-theme", theme);
  }, [theme]);

  // Mouse tracking for tilt effect
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cursor trail effect
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorTrail((prev: any[]) => [
        ...prev.slice(-20),
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorTrail((prev: any) =>
        prev.filter((dot: any) => Date.now() - dot.id < 500)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
    setShowConfetti(true);
    setTimeout(() => setShowToast(false), 2500);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleLinkClick = (id: any, analyticsLabel: any) => {
    setClickedLink(id);
    console.log("Link clicked:", analyticsLabel);
    setTimeout(() => setClickedLink(null), 600);
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
      {/* Cursor Trail */}
      {cursorTrail.map((dot: any, i: any) => (
        <div
          key={dot.id}
          className="cursor-trail"
          style={{
            left: dot.x,
            top: dot.y,
            opacity: (i + 1) / cursorTrail.length,
          }}
        />
      ))}

      {/* Particles Background */}
      <div className="particles-container">
        {particles.map((particle: any) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Confetti */}
      {showConfetti && (
        <div className="confetti-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                background: [
                  "#667eea",
                  "#764ba2",
                  "#f093fb",
                  "#f5576c",
                  "#4facfe",
                ][i % 5],
              }}
            />
          ))}
        </div>
      )}

      <div className="biolinks-page__container" ref={containerRef}>
        <header className="biolinks-header">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            <span className="theme-toggle__icon">
              {theme === "light" ? "🌙" : "☀️"}
            </span>
          </button>

          <div className="profile">
            <div className="profile__image-wrapper">
              <div className="profile__image">
                {profileData.image ? (
                  <img src={profileData.image} alt={profileData.name} />
                ) : (
                  <div className="profile__initials">
                    {getInitials(profileData.name)}
                  </div>
                )}
              </div>
              <div className="profile__status"></div>
            </div>

            <div className="profile__info">
              <h1 className="profile__name">
                {profileData.name}
                {profileData.verified && (
                  <span className="profile__badge" aria-label="Verified">
                    <span className="profile__badge-icon">✓</span>
                  </span>
                )}
                <span className="profile__level">{profileData.level}</span>
              </h1>
              <p className="profile__tagline">{profileData.tagline}</p>
              <p className="profile__location">{profileData.location}</p>
            </div>

            {/* Profile Completion */}
            <div className="profile-completion">
              <div className="profile-completion__bar">
                <div
                  className="profile-completion__fill"
                  style={{ width: `${profileData.completionRate}%` }}
                ></div>
              </div>
              <span className="profile-completion__text">
                {profileData.completionRate}% Complete
              </span>
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
              style={{ "--social-color": social.color } as any}
            >
              <span className="social-links__icon">{social.icon}</span>
              <span className="social-links__glow"></span>
            </a>
          ))}
        </nav>

        <div className="stats">
          <div className="stats__item">
            <div className="stats__icon">👁️</div>
            <div className="stats__content">
              <span className="stats__value">12.5K</span>
              <span className="stats__label">Profile Views</span>
            </div>
          </div>
          <div className="stats__divider"></div>
          <div className="stats__item">
            <div className="stats__icon">🔗</div>
            <div className="stats__content">
              <span className="stats__value">3.2K</span>
              <span className="stats__label">Link Clicks</span>
            </div>
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
                <div key={i} className="link-skeleton">
                  <div className="link-skeleton__icon"></div>
                  <div className="link-skeleton__content">
                    <div className="link-skeleton__title"></div>
                    <div className="link-skeleton__subtitle"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredLinks.length === 0 ? (
            <div className="no-results">
              <span className="no-results__icon">🔍</span>
              <p className="no-results__text">No links found</p>
              <button
                className="no-results__button"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </button>
            </div>
          ) : (
            <>
              {featuredLink && (
                <div className="featured-section">
                  <a
                    href={featuredLink.url}
                    className={`link-card link-card--featured ${
                      clickedLink === String(featuredLink.id)
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
                    style={{ background: featuredLink.gradient }}
                  >
                    <div className="link-card__shine"></div>
                    {featuredLink.tag && (
                      <span
                        className={`link-card__tag link-card__tag--${featuredLink.tag.toLowerCase()}`}
                      >
                        {featuredLink.tag}
                      </span>
                    )}
                    <div className="link-card__icon link-card__icon--pulse">
                      {featuredLink.icon}
                    </div>
                    <div className="link-card__content">
                      <h3 className="link-card__title">{featuredLink.title}</h3>
                      {featuredLink.subtitle && (
                        <p className="link-card__subtitle">
                          {featuredLink.subtitle}
                        </p>
                      )}
                      <div className="link-card__stats">
                        <span className="link-card__clicks">
                          {featuredLink.clicks.toLocaleString()} clicks
                        </span>
                      </div>
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
                      clickedLink === String(link.id)
                        ? "link-card--clicked"
                        : ""
                    }`}
                    onClick={() =>
                      handleLinkClick(link.id, link.analyticsLabel)
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="link-card__glow"
                      style={{ background: link.gradient }}
                    ></div>
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
                      <div className="link-card__engagement">
                        <div className="link-card__engagement-bar">
                          <div
                            className="link-card__engagement-fill"
                            style={{ width: `${link.engagement}%` }}
                          ></div>
                        </div>
                        <span className="link-card__engagement-text">
                          {link.engagement}% engagement
                        </span>
                      </div>
                    </div>
                    <div className="link-card__arrow">→</div>
                  </a>
                ))}
              </div>
            </>
          )}
        </main>

        <footer className="biolinks-footer">
          <div className="wave-container">
            <svg
              className="wave"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="biolinks-footer__content">
            <p className="biolinks-footer__text">
              Made with <span className="biolinks-footer__heart">❤️</span> using
              React
            </p>
            <div className="biolinks-footer__actions">
              <button
                className="biolinks-footer__button"
                onClick={handleCopyLink}
                aria-label="Copy profile link"
              >
                <span className="biolinks-footer__button-icon">📋</span>
                Copy Link
              </button>
              <button className="biolinks-footer__button biolinks-footer__button--share">
                <span className="biolinks-footer__button-icon">🔗</span>
                Share
              </button>
            </div>
          </div>
        </footer>
      </div>

      {showToast && (
        <div className="toast" role="alert">
          <span className="toast__icon">✓</span>
          <span className="toast__text">Link copied to clipboard!</span>
        </div>
      )}
    </div>
  );
};

export default BioLinksPage;
