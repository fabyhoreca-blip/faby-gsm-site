import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="page">
      <section className="hero">
        <div className="overlay"></div>

        <div className="content">
          <div className="left">
            <div className="badge">FABY GSM</div>

            <h1>
              <span className="big">STAY IN STYLE</span>
            </h1>

            <div className="line"></div>

            <p className="subtitle">
              Service telefoane și accesorii GSM într-o prezentare premium,
              serioasă și elegantă.
            </p>

            <div className="buttons">
              <a href="#contact" className="btn gold">Contact rapid</a>
              <a href="#servicii" className="btn cyan">Vezi serviciile</a>
            </div>

            <div className="highlights">
              <div className="highlight">Design premium inspirat din showroom</div>
              <div className="highlight">Matte black, auriu și accent turcoaz</div>
              <div className="highlight">Imagine serioasă și elegantă</div>
            </div>
          </div>

          <div className="right">
            <div className="logoCard">
              <div className="logoCircle">
                <span className="f">F</span>
                <span className="g">G</span>
              </div>

              <div className="brand">
                <span className="brandWhite">FABY </span>
                <span className="brandGold">GSM</span>
              </div>

              <div className="line center"></div>

              <div className="slogan">STAY IN STYLE</div>

              <div className="line center"></div>

              <div className="miniText">
                QUALITY • INNOVATION • ATTITUDE
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="despre">
        <div className="grid2">
          <div>
            <p className="sectionTag">DESPRE BRAND</p>
            <h2>Un stil serios, elegant și memorabil.</h2>
            <p className="text">
              FABY GSM este un magazin de accesorii GSM și service telefoane,
              construit pe ideea de calitate, stil și încredere.
            </p>
          </div>

          <div className="infoBoxWrap">
            <div className="infoBox">
              <div className="small">Telefon</div>
              <div className="strong">0756 423 828</div>
            </div>

            <div className="infoBox">
              <div className="small">Locație</div>
              <div className="strong">Mall Băneasa</div>
              <div className="muted">În față la Media Galaxy</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark" id="servicii">
        <p className="sectionTag goldText">SERVICII</p>
        <h2>Ce oferim</h2>

        <div className="services">
          <div className="card">Schimb display și touchscreen</div>
          <div className="card">Înlocuire baterie</div>
          <div className="card">Montaj folie și sticlă de protecție</div>
          <div className="card">Reparații mufă încărcare</div>
          <div className="card">Huse, cabluri, încărcătoare și accesorii</div>
          <div className="card">Consultanță pentru alegerea accesoriilor</div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="contactBox">
          <div>
            <p className="sectionTag">CONTACT</p>
            <h2>FABY GSM</h2>
            <p className="text">
              Magazin de accesorii GSM și service telefoane, cu imagine premium
              și contact rapid.
            </p>
          </div>

          <div className="callBox">
            <div className="small">Sună acum</div>
            <div className="strong bigPhone">0756 423 828</div>
            <div className="muted">Mall Băneasa • în față la Media Galaxy</div>
          </div>
        </div>
      </section>
    </div>
  );
}