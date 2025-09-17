import { useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router";

const navLinks = [
  {
    label: "¿Qué hacemos?",
    to: "/about",
  },
  {
    label: "Actividades",
    to: "/activities",
  },
  {
    label: "Calculadora de promedios",
    to: "/calculate-promedio",
  },
  {
    label: "Eventos",
    to: "/events",
  },
  {
    label: "Recursos para programadores",
    to: "/resources",
  },
  {
    label: "Créditos",
    to: "/credits",
  },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src="icon/logo-isil.jpg" alt="ISIL" />
          </div>

          <nav className={`navbar-links ${open ? "active" : ""}`}>
            {navLinks.map(({ label, to }, i) => (
              <NavLink key={i} to={to} className={({ isActive }) => (isActive ? "active-link" : "")}>
                {label}
              </NavLink>
            ))}
          </nav>

          <button className="navbar-toggle" onClick={() => setOpen(!open)}>
            {open ? "✖" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
};
