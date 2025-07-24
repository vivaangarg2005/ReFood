import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/services" },
    { name: "Impact", path: "/impact" },
    { name: "Join", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          ReFood
        </Link>

        <nav className="nav-desktop">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? (
            <X className="nav-icon" />
          ) : (
            <Menu className="nav-icon" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link-mobile active" : "nav-link-mobile"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
