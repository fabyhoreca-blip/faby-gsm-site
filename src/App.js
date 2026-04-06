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
      <div className="page servicePage">
        <div className="serviceOverlay"></div>
        <div className="serviceWrap">
          <button className="backBtn" onClick={() => setView("home")}>
            ← Inapoi la site
          </button>

          <div className="serviceCardMain">
            <div className="serviceBadge">SERVICE GSM RAPID</div>
            <h1 className="serviceTitle">Cu ce te putem ajuta?</h1>
            <p className="serviceText">
              Spune-ne problema telefonului tau, iar noi iti raspundem in cel mai scurt timp.
              Pentru ajutor rapid, scrie-ne direct pe WhatsApp si revenim cat mai repede.
            </p>

            <div className="helpGrid">
              <div className="helpBox">Schimb display</div>
              <div className="helpBox">Inlocuire baterie</div>
              <div className="helpBox">Probleme incarcare</div>
              <div className="helpBox">Folie / protectie</div>
              <div className="helpBox">Diagnostic rapid</div>
              <div className="helpBox">Alte probleme GSM</div>
            </div>

            <div className="serviceCtaRow">
              <a
                className="whatsappBig"
                href="https://wa.me/40756423828"
                target="_blank"
                rel="noreferrer"
              >
                Scrie-ne pe WhatsApp acum
              </a>
              <a className="callBtn" href="tel:0756423828">
                Suna acum
              </a>
            </div>

            <div className="serviceContactInfo">
              <div>
                <span className="contactLabel">Telefon</span>
                <strong>0756 423 828</strong>
              </div>
              <div>
                <span className="contactLabel">Locatie</span>
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
      <div className="heroBg"></div>
      <div className="heroGlow"></div>

      <header className="hero">
        <div className="heroLeft">
          <div className="topTag">HOBBY GSM · FABY GSM</div>
          <h1 className="mainTitle">Futuristic GSM Experience</h1>
          <p className="heroText">
            Accesorii GSM, produse premium si service rapid intr-un stil modern,
            futurist, cu imagine puternica si contact direct pentru clienti.
          </p>

          <div className="heroButtons">
            <a className="primaryBtn" href="https://wa.me/40756423828" target="_blank" rel="noreferrer">
              WhatsApp rapid
            </a>
            <a className="secondaryBtn" href="#categorii">
              Vezi categoriile
            </a>
          </div>
        </div>

        <div className="heroRight">
          <div className="logoPanel">
            <div className="logoCircle">FG</div>
            <div className="logoName">FABY GSM</div>
            <div className="logoSub">STAY IN STYLE</div>
            <div className="miniLine"></div>
            <div className="miniText">QUALITY · SPEED · STYLE</div>
          </div>
        </div>
      </header>

      <section className="categorySection" id="categorii">
        <div className="sectionHead">
          <p className="sectionTag">CATEGORII</p>
          <h2>Butoane rapide pentru produsele tale</h2>
        </div>

        <div className="categoryGrid">
          {categories.map((item) => (
            <a key={item} href="https://wa.me/40756423828" target="_blank" rel="noreferrer" className="categoryCard">
              {item}
            </a>
          ))}
        </div>
      </section>

      <section className="serviceFastSection">
        <div className="serviceFastCard">
          <div>
            <p className="sectionTag">SERVICE</p>
            <h2>Service GSM Rapid</h2>
            <p className="serviceFastText">
              Apasa pe butonul de mai jos si intri intr-o pagina dedicata unde clientul
              poate vedea imediat cum sa ia legatura cu tine pentru ajutor rapid.
            </p>
          </div>

          <button className="serviceBigBtn" onClick={() => setView("service")}>
            SERVICE GSM RAPID
          </button>
        </div>
      </section>

      <section className="contactStrip">
        <div className="contactItem">
          <span className="contactLabel">Telefon</span>
          <strong>0756 423 828</strong>
        </div>
        <div className="contactItem">
          <span className="contactLabel">Locatie</span>
          <strong>Mall Baneasa · in fata la Media Galaxy</strong>
        </div>
        <div className="contactItem">
          <span className="contactLabel">WhatsApp</span>
          <strong>Scrie-ne pe WhatsApp</strong>
        </div>
      </section>
    </div>
  );
}
 