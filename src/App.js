import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [view, setView] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const productsByCategory = {
    Huse: [
      {
        name: "Husă iPhone Premium",
        price: "30 lei",
        image: "/husa1.jpg",
        description: "Husă elegantă, protecție bună pentru utilizare zilnică.",
      },
      {
        name: "Husă Samsung Elegantă",
        price: "35 lei",
        image: "/husa2.jpg",
        description: "Design modern, material plăcut și protecție pentru margini.",
      },
      {
        name: "Husă Transparentă",
        price: "25 lei",
        image: "/husa3.jpg",
        description: "Husă transparentă, slim, potrivită pentru mai multe modele.",
      },
      {
        name: "Husă Anti-șoc",
        price: "40 lei",
        image: "/husa4.jpg",
        description: "Protecție extra pentru căzături și lovituri.",
      },
      {
        name: "Husă Luxury",
        price: "50 lei",
        image: "/husa5.jpg",
        description: "Aspect premium, potrivită pentru un telefon protejat și stilat.",
      },
    ],

    Cabluri: [
      {
        name: "Cablu USB-C",
        price: "30 lei",
        image: "/produs1.jpg",
        description: "Cablu rapid pentru încărcare și transfer de date.",
      },
      {
        name: "Cablu Lightning",
        price: "40 lei",
        image: "/produs2.jpg",
        description: "Cablu compatibil iPhone, ideal pentru utilizare zilnică.",
      },
      {
        name: "Cablu Type-C Premium",
        price: "45 lei",
        image: "/produs3.jpg",
        description: "Cablu rezistent, cu încărcare rapidă.",
      },
    ],
  };

  const products = productsByCategory[selectedCategory] || [
    {
      name: "Produs disponibil în magazin",
      price: "Preț la cerere",
      image: "/produs1.jpg",
      description: "Contactează-ne pe WhatsApp pentru detalii și disponibilitate.",
    },
    {
      name: "Produs premium GSM",
      price: "Preț la cerere",
      image: "/produs2.jpg",
      description: "Produs disponibil în funcție de stoc.",
    },
    {
      name: "Accesoriu GSM",
      price: "Preț la cerere",
      image: "/produs3.jpg",
      description: "Întreabă-ne rapid pe WhatsApp pentru compatibilitate.",
    },
  ];

  if (view === "category") {
    return (
      <div className="page category-page">
        <div className="bg-image"></div>
        <div className="bg-overlay"></div>

        <div className="service-container">
          <button className="back-button" onClick={() => setView("home")}>
            ← Inapoi
          </button>

          <div className="service-card">
            <div className="small-badge">CATEGORIE PRODUSE</div>

            <h1 className="service-title">{selectedCategory}</h1>

            <p className="service-description">
              Produse selectate pentru categoria {selectedCategory}. Detalii și
              disponibilitate direct pe WhatsApp.
            </p>

            <div className="product-grid">
              {products.map((product, index) => (
                <div className="product-card" key={index}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <p className="product-description">{product.description}</p>

                  <a
                    href={`https://wa.me/40756423828?text=Buna! Ma intereseaza: ${product.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-button product-btn"
                  >
                    Intreaba pe WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

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

          <h1 className="main-title">HOBBY GSM Experience</h1>

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
            <button
              key={item}
              className="category-card"
              onClick={() => {
                setSelectedCategory(item);
                setView("category");
              }}
            >
              {item}
            </button>
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