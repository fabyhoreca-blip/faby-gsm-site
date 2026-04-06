import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [view, setView] = useState("home");

  const categories = [
    "Adaptoare",
    "Cabluri",
    "Suporti auto",
    "Huse",
    "Casti",
    "Folii de protectie",
    "Gadgeturi",
    "Baterii externe",
  ];

  if (view === "service") {
    return (
      <div className="page service-page">
        <div className="bg-image"></div>
        <div className="bg-overlay"></div>

        <div className="service-container">
          <button className="back-button" onClick={() => setView("home")}>
            ← Inapoi
          </button>

          <div className="service-card">
            <div className="small-badge">SERVICE GSM RAPID</div>

            <h1 className="service-title">Cu ce te putem ajuta?</h1>

            <p className="service-description">
              Spune-ne rapid ce problema ai, iar noi te ajutam in cel mai scurt
              timp. Pentru raspuns rapid, scrie-ne direct pe WhatsApp.
            </p>

            <div className="service-grid">
              <div className="service-box">Schimb display</div>
              <div className="service-box">Schimb baterie</div>
              <div className="service-box">Probleme la incarcare</div>
              <div className="service-box">Montaj folie</div>
              <div className="service-box">Diagnostic rapid</div>
              <div className="service-box">Alte probleme GSM</div>
            </div>

            <div className="cta-row">
              <a
                href="https://wa.me/40756423828"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-button"
              >
                Scrie-ne pe WhatsApp acum
              </a>

              <a href="tel:0756423828" className="call-button">
                Suna acum
              </a>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <span className="label">Telefon</span>
                <strong>0756 423 828</strong>
              </div>

              <div className="contact-card">
                <span className="label">Locatie</span>
                <strong>Mall Baneasa · in fata la Media Galaxy</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="bg-image"></div>
      <div className="bg-overlay"></div>

      <header className="hero">
        <div className="hero-left">
          <div className="top-tag">HOBBY GSM · FABY GSM</div>

          <h1 className="main-title">Futuristic GSM Experience</h1>

          <p className="hero-text">
            Accesorii GSM, produse premium si service rapid intr-un stil modern,
            futurist, cu imagine puternica si contact direct pentru clienti.
          </p>

          <div className="hero-buttons">
            <a
              className="primary-btn"
              href="https://wa.me/40756423828"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp rapid
            </a>

            <a className="secondary-btn" href="#categorii">
              Vezi categoriile
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="logo-panel">
            <div className="logo-circle">FG</div>
            <div className="logo-name">FABY GSM</div>
            <div className="logo-sub">STAY IN STYLE</div>
            <div className="mini-line"></div>
            <div className="mini-text">QUALITY · SPEED · STYLE</div>
          </div>
        </div>
      </header>

      <section className="category-section" id="categorii">
        <div className="section-head">
          <p className="section-tag">CATEGORII</p>
          <h2>Butoane rapide pentru produsele tale</h2>
        </div>

        <div className="category-grid">
          {categories.map((item) => (
            <a
              key={item}
              href="https://wa.me/40756423828"
              target="_blank"
              rel="noreferrer"
              className="category-card"
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      <section className="service-fast-section">
        <div className="service-fast-card">
          <div>
            <p className="section-tag">SERVICE</p>
            <h2>Service GSM Rapid</h2>
            <p className="service-fast-text">
              Apasa pe butonul de mai jos si intri intr-o pagina dedicata unde
              clientul poate vedea imediat cum sa ia legatura cu tine pentru
              ajutor rapid.
            </p>
          </div>

          <button className="service-big-btn" onClick={() => setView("service")}>
            SERVICE GSM RAPID
          </button>
        </div>
      </section>

      <section className="contact-strip">
        <div className="contact-item">
          <span className="label">Telefon</span>
          <strong>0756 423 828</strong>
        </div>

        <div className="contact-item">
          <span className="label">Locatie</span>
          <strong>Mall Baneasa · in fata la Media Galaxy</strong>
        </div>

        <div className="contact-item">
          <span className="label">WhatsApp</span>
          <strong>Scrie-ne acum</strong>
        </div>
      </section>
    </div>
  );
}