import { useState } from "react";
import "./header.css";
import { Link } from "react-router";
import { IsilIconSvg } from "../../../assets/isil-icon/IsilIconSvg";

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
            <IsilIconSvg />
          </div>

          <ul className={`navbar-links ${open ? "active" : ""}`}>
            {navLinks.map(({ label, to }, i) => (
              <Link key={i} to={to}>
                {label}
              </Link>
            ))}
          </ul>

          <button className="navbar-toggle" onClick={() => setOpen(!open)}>
            {open ? "✖" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
};
