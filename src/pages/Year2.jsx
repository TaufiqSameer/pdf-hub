import { useState } from "react";
import { Link } from "react-router-dom";
import year2Pdfs from "../data/year2";

export default function Year2() {
  const [activeSubject, setActiveSubject] = useState(null);
  const [activePdf, setActivePdf] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <h1>Second Year</h1>
        <Link to="/">← Back to Years</Link>
      </header>

      <section className="subject-cards">
        {Object.keys(year2Pdfs).map((subject) => (
          <div
            key={subject}
            className="subject-card"
            onClick={() => {
              setActiveSubject(subject);
              setActivePdf(year2Pdfs[subject].files[0]);
            }}
          >
            <h3>{subject}</h3>
            <p>{year2Pdfs[subject].description}</p>
          </div>
        ))}
      </section>

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
