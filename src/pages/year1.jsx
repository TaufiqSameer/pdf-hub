import { useState } from "react";
import { Link } from "react-router-dom";
import year1Pdfs from "../data/pdfs";

export default function Year1() {
  const [activeSubject, setActiveSubject] = useState(null);
  const [activePdf, setActivePdf] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <h1>First Year</h1>
        <Link to="/">← Back to Years</Link>
      </header>

      <section className="subject-cards">
        {Object.keys(year1Pdfs).map((subject) => (
          <div
            key={subject}
            className="subject-card"
            onClick={() => {
              setActiveSubject(subject);
              setActivePdf(year1Pdfs[subject].files[0]);
            }}
          >
            <h3>{subject}</h3>
            <p>{year1Pdfs[subject].description}</p>
          </div>
        ))}
      </section>

      {activeSubject && (
        <section className="pdf-list">
          {year1Pdfs[activeSubject].files.map((pdf, i) => (
            <button key={i} onClick={() => setActivePdf(pdf)}>
              {pdf.title}
            </button>
          ))}
        </section>
      )}

      <section className="viewer">
        {activePdf ? (
          <iframe src={activePdf.link} title={activePdf.title} />
        ) : (
          <p className="placeholder">Select a subject</p>
        )}
      </section>
    </div>
  );
}
