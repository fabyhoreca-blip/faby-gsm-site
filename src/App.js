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
    Adaptoare: [
      {
        name: "Adaptor USB-C",
        price: "De la 25 lei",
        image: "/adaptor1.jpg",
        details: "Adaptor rapid pentru telefoane si accesorii moderne.",
      },
      {
        name: "Adaptor Lightning",
        price: "De la 30 lei",
        image: "/adaptor2.jpg",
        details: "Compatibil cu iPhone si accesorii Lightning.",
      },
    ],

    Cabluri: [
      {
        name: "Cablu USB-C",
        price: "De la 30 lei",
        image: "/cablu1.jpg",
        details: "Cablu rezistent pentru incarcare rapida si transfer date.",
      },
      {
        name: "Cablu iPhone Lightning",
        price: "De la 35 lei",
        image: "/cablu2.jpg",
        details: "Cablu pentru iPhone, iPad si alte dispozitive Apple.",
      },
      {
        name: "Cablu Type-C la Type-C",
        price: "De la 40 lei",
        image: "/cablu3.jpg",
        details: "Ideal pentru incarcare rapida si telefoane noi.",
      },
    ],

    "Suporti auto": [
      {
        name: "Suport auto magnetic",
        price: "De la 35 lei",
        image: "/suport1.jpg",
        details: "Suport stabil pentru masina, usor de folosit.",
      },
      {
        name: "Suport auto cu prindere",
        price: "De la 45 lei",
        image: "/suport2.jpg",
        details: "Prindere sigura pentru bord sau grila de ventilatie.",
      },
    ],

    Huse: [
      products: [
        {
          name: "Husă iPhone Premium",
          price: "30 lei",
          image: "/husa1.jpg"
        },
        {
          name: "Husă Samsung Elegantă",
          price: "35 lei",
          image: "/husa2.jpg"
        },
        {
          name: "Husă Transparentă",
          price: "25 lei",
          image: "/husa3.jpg"
        },
        {
          name: "Husă Anti-șoc",
          price: "40 lei",
          image: "/husa4.jpg"
        },
        {
          name: "Husă Luxury",
          price: "50 lei",
          image: "/husa5.jpg"
        }
      ]
    ],

    Casti: [
      {
        name: "Casti Bluetooth",
        price: "De la 70 lei",
        image: "/casti1.jpg",
        details: "Sunet clar, conectare rapida si autonomie buna.",
      },
      {
        name: "Casti cu fir Type-C",
        price: "De la 35 lei",
        image: "/casti2.jpg",
        details: "Pentru telefoane fara mufa jack.",
      },
    ],

    "Folii de protectie": [
      {
        name: "Folie sticla 9H",
        price: "De la 30 lei",
        image: "/folie1.jpg",
        details: "Protectie buna pentru ecran.",
      },
      {
        name: "Folie privacy",
        price: "De la 45 lei",
        image: "/folie2.jpg",
        details: "Protejeaza ecranul si intimitatea.",
      },
    ],

    Gadgeturi: [
      {
        name: "Mini boxa Bluetooth",
        price: "Pret la cerere",
        image: "/gadget1.jpg",
        details: "Gadget util pentru muzica si calatorii.",
      },
      {
        name: "Incarcator auto rapid",
        price: "De la 40 lei",
        image: "/gadget2.jpg",
        details: "Incarcare rapida direct in masina.",
      },
    ],

    "Baterii externe": [
      {
        name: "Power bank 10000 mAh",
        price: "De la 80 lei",
        image: "/baterie1.jpg",
        details: "Baterie externa compacta pentru utilizare zilnica.",
      },
      {
        name: "Power bank 20000 mAh",
        price: "De la 120 lei",
        image: "/baterie2.jpg",
        details: "Capacitate mare pentru mai multe incarcari.",
      },
    ],
  };

  const selectedProducts = productsByCategory[selectedCategory] || [];

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
              Aici poti adauga produsele tale din categoria {selectedCategory}.
              Fiecare produs are poza, pret, detalii si buton direct catre
              WhatsApp.
            </p>

            <div className="product-grid">
              {selectedProducts.map((product, index) => (
                <div className="product-card" key={index}>
                  <img src={product.image} alt={product.name} />

                  <h3>{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <p className="product-details">{product.details}</p>

                  <a
                    href={`https://wa.me/40756423828?text=Buna! Ma intereseaza produsul: ${product.name} din categoria ${selectedCategory}`}
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
            <button
              key={item}
              type="button"
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