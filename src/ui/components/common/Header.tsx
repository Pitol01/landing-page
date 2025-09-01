import { useState } from "react";
import "./header.css"

export const Header = () =>  {
  const [open, setOpen] = useState(false);
  return <header><nav className="navbar">
      <div className="navbar-container">
      
        <h1 className="navbar-logo">MiApPPP</h1>

    
        <ul className={`navbar-links ${open ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>
    </nav></header>;
};
