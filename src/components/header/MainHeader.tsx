"use client";
import { useTheme } from "@/hooks/useTheme";
import React from "react";

const MainHeader = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className="header">
      <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        <input type="checkbox" checked={isDark} onChange={toggleTheme} />
        Dark mode
      </label>
    </header>
  );
};

export default MainHeader;
