"use client";
import { useTheme } from "@/hooks/useTheme";
import React from "react";

const MainHeader = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className="header">
      <label className="theme-toggle">
        <input type="checkbox" checked={isDark} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </header>
  );
};

export default MainHeader;
