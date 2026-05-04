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
        description: "Husă elegantă, protecție bună și aspect premium.",
      },
      {
        name: "Husă Samsung Elegantă",
        price: "35 lei",
        image: "/husa2.jpg",
        description: "Design modern, material plăcut și protecție pe margini.",
      },
      {
        name: "Husă Transparentă",
        price: "25 lei",
        image: "/husa3.jpg",
        description: "Husă slim, transparentă, potrivită pentru utilizare zilnică.",
      },
      {
        name: "Husă Anti-șoc",
        price: "40 lei",
        image: "/husa4.jpg",
        description: "Protecție extra pentru lovituri și căzături.",
      },
      {
        name: "Husă Luxury",
        price: "50 lei",
        image: "/husa5.jpg",
        description: "Aspect premium pentru un telefon protejat și stilat.",
      },
    ],

    Cabluri: [
      {
        name: "Cablu USB-C Fast Charge",
        price: "30 lei",
        image: "/cablu1.jpg",
        description: "Cablu rapid pentru încărcare și transfer de date.",
      },
      {
        name: "Cablu Lightning iPhone",
        price: "40 lei",
        image: "/cablu2.jpg",
        description: "Cablu pentru iPhone, rezistent și potrivit pentru uz zilnic.",
      },
      {
        name: "Cablu Type-C Premium",
        price: "45 lei",
        image: "/cablu3.jpg",
        description: "Cablu premium cu încărcare rapidă.",
      },
      {
        name: "Cablu 3 în 1",
        price: "50 lei",
        image: "/cablu4.jpg",
        description: "Compatibil cu mai multe tipuri de telefoane.",
      },
    ],

    "Folii de protectie": [
      {
        name: "Folie sticlă iPhone",
        price: "30 lei",
        image: "/folie1.jpg",
        description: "Folie de protecție pentru ecran, claritate ridicată.",
      },
      {
        name: "Folie Samsung",
        price: "35 lei",
        image: "/folie2.jpg",
        description: "Protecție bună împotriva zgârieturilor.",
      },
      {
        name: "Folie privacy",
        price: "50 lei",
        image: "/folie3.jpg",
        description: "Protejează ecranul și intimitatea.",
      },
    ],

    Casti: [
      {
        name: "Căști Bluetooth",
        price: "De la 70 lei",
        image: "/casti1.jpg",
        description: "Sunet clar, conectare rapidă și autonomie bună.",
      },
      {
        name: "Căști gaming",
        price: "De la 90 lei",
        image: "/casti2.jpg",
        description: "Design gaming, confort și sunet puternic.",
      },
      {
        name: "Căști cu fir",
        price: "De la 35 lei",
        image: "/casti3.jpg",
        description: "Căști simple și practice pentru utilizare zilnică.",
      },
    ],

    "Baterii externe": [
      {
        name: "Power Bank 10.000 mAh",
        price: "De la 80 lei",
        image: "/baterie1.jpg",
        description: "Baterie externă compactă pentru telefon.",
      },
      {
        name: "Power Bank Fast Charge",
        price: "De la 120 lei",
        image: "/baterie2.jpg",
        description: "Încărcare rapidă și capacitate mare.",
      },
      {
        name: "Power Bank Slim",
        price: "De la 90 lei",
        image: "/baterie3.jpg",
        description: "Design subțire, ușor de transportat.",
      },
    ],

    Gadgeturi: [
      {
        name: "Suport telefon birou",
        price: "De la 35 lei",
        image: "/gadget1.jpg",
        description: "Accesoriu practic pentru birou sau acasă.",
      },
      {
        name: "Mini speaker",
        price: "De la 60 lei",
        image: "/gadget2.jpg",
        description: "Boxă compactă pentru muzică și entertainment.",
      },
      {
        name: "Accesoriu gaming",
        price: "Preț la cerere",
        image: "/gadget3.jpg",
        description: "Gadget util pentru zona gaming și telefon.",
      },
    ],

    "Suporti auto": [
      {
        name: "Suport auto magnetic",
        price: "De la 40 lei",
        image: "/suport1.jpg",
        description: "Fixare rapidă și sigură în mașină.",
      },
      {
        name: "Suport auto cu ventuză",
        price: "De la 50 lei",
        image: "/suport2.jpg",
        description: "Poziționare ușoară și stabilitate bună.",
      },
      {
        name: "Suport auto premium",
        price: "De la 70 lei",
        image: "/suport3.jpg",
        description: "Design premium și prindere stabilă.",
      },
    ],

    Adaptoare: [
      {
        name: "Adaptor USB-C",
        price: "De la 30 lei",
        image: "/adaptor1.jpg",
        description: "Adaptor practic pentru încărcare și conectivitate.",
      },
      {
        name: "Adaptor Lightning",
        price: "De la 40 lei",
        image: "/adaptor2.jpg",
        description: "Compatibil cu dispozitive Apple.",
      },
      {
        name: "Adaptor audio",
        price: "De la 25 lei",
        image: "/adaptor3.jpg",
        description: "Adaptor pentru sunet și accesorii audio.",
      },
    ],
  };

  const products = productsByCategory[selectedCategory] || [];

  if (view === "category") {
    return (
      <div className="page category-page">
        <div className="bg-image"></div>
        <div className="bg-overlay"></div>

        <div className="service-container">
          <button className="back-button" onClick={() => setView("home")}>
            ← Înapoi
          </button>

          <div className="service-card">
            <div className="small-badge">CATEGORIE PRODUSE</div>

            <h1 className="service-title">{selectedCategory}</h1>

            <p className="service-description">
              Produse selectate pentru categoria {selectedCategory}. Pentru
              detalii, compatibilitate și disponibilitate, ne poți contacta rapid
              pe WhatsApp.
            </p>

            <div className="product-grid">
              {products.map((product, index) => (
                <div className="product-card" key={index}>
                  <img src={product.image} alt={product.name} />

                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <p className="product-description">{product.description}</p>

                  <a
                    href={`https://wa.me/40756423828?text=Buna! Ma intereseaza produsul: ${product.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-button product-btn"
                  >
                    Întreabă pe WhatsApp
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
            ← Înapoi
          </button>

          <div className="service-card">
            <div className="small-badge">SERVICE GSM RAPID</div>

            <h1 className="service-title">Cu ce te putem ajuta?</h1>

            <p className="service-description">
              Spune-ne rapid ce problemă ai, iar noi te ajutăm în cel mai scurt
              timp. Pentru răspuns rapid, scrie-ne direct pe WhatsApp.
            </p>

            <div className="service-grid">
              <div className="service-box">Schimb display</div>
              <div className="service-box">Schimb baterie</div>
              <div className="service-box">Probleme la încărcare</div>
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
                Sună acum
              </a>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <span className="label">Telefon</span>
                <strong>0756 423 828</strong>
              </div>

              <div className="contact-card">
                <span className="label">Locație</span>
                <strong>Mall Băneasa · în fața la Media Galaxy</strong>
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
          <div className="top-tag">STELIX · FABY GSM</div>

          <h1 className="main-title">Premium GSM & Gaming Experience</h1>

          <p className="hero-text">
            Accesorii GSM, gaming, gadgeturi și service rapid într-un stil
            modern, premium, inspirat din tehnologie, lumină și design futurist.
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
            <div className="mini-text">GEAR UP · PLAY HARD · STAY IN STYLE</div>
          </div>
        </div>
      </header>

      <section className="category-section" id="categorii">
        <div className="section-head">
          <p className="section-tag">CATEGORII</p>
          <h2>Alege rapid categoria dorită</h2>
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
              Probleme cu telefonul? Intră în pagina de service și contactează-ne
              rapid pentru display, baterie, încărcare, folie sau diagnostic.
            </p>
          </div>

          <button className="service-big-btn" onClick={() => setView("service")}>
            SERVICE GSM RAPID
          </button>
        </div>
      </section>

      <section className="service-fast-section">
        <div className="service-fast-card">
          <div>
            <p className="section-tag">DESPRE NOI</p>
            <h2>Memorium STELIX · FABY GSM</h2>
            <p className="service-fast-text">
              STELIX GSM este un concept construit pe experiență, seriozitate și
              pasiune pentru tehnologie. Cu peste 10 ani în zona GSM, gaming și
              gadgeturi, ne dorim să oferim produse atent alese, design modern și
              o experiență premium pentru fiecare client.
            </p>
            <p className="service-fast-text">
              Standurile noastre sunt gândite pentru spații comerciale moderne,
              cu lumină LED, vitrine curate și o imagine futuristă care atrage
              atenția și inspiră încredere.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-strip">
        <div className="contact-item">
          <span className="label">Telefon</span>
          <strong>0756 423 828</strong>
        </div>

        <div className="contact-item">
          <span className="label">Locație</span>
          <strong>Mall Băneasa · în fața la Media Galaxy</strong>
        </div>

        <div className="contact-item">
          <span className="label">WhatsApp</span>
          <strong>Scrie-ne acum</strong>
        </div>
      </section>
    </div>
  );
}