import { useState } from "react";
import { Link } from "react-router-dom";
import year1Pdfs from "../data/pdfs";

export default function Year1() {
  const [activeSubject, setActiveSubject] = useState(null);
  const [activePdf, setActivePdf] = useState(null);

  

  return (
    <div className="content-wrapper">
    <div className="left-box">
  <h2 className="box-title">Disclaimer</h2>

  <p>
    The notes available on this website are shared by faculty members from
    various colleges. If you belong to any of these colleges, please take a
    moment to appreciate their efforts.
  </p>

  <p>
    These materials are provided for reference purposes only. They may not be
    100% accurate or fully aligned with your university syllabus. Students are
    advised to verify the content before relying on it.
  </p>

  <p>
    If you are a content owner and wish to request the removal of any material,
    please contact me.
  </p>

  <p>
    If you have additional study material that could benefit students, feel
    free to share it at:
    <br />
    <b className="email">nemesisx9234@gmail.com</b>
  </p>

  <h4 className="suggestion">
    Suggestions to improve the website are always welcome 
  </h4>
</div>

    
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
    </div>
  );
}
