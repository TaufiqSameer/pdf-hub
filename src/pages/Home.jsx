import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Resources for CVR</h2>
      </nav>

      <main className="home-content">
        <section className="intro">
          <h1>Welcome</h1>
          <p>
            Please choose your respective year to get the available subjects
          </p>

          <p className="note">
            If you have any more material regarding a subject please share it to
            my email <b> sameertaufiq63@gmail.com</b>
          </p>
        </section>

        <section className="subject-cards">
          <div className="subject-card" onClick={() => navigate("/year1")}>
            <h3>First Year</h3>
            <p>
              <b>
                This syallbus is given by JNTUH, So please confirm the syallbus
                that is given by college (R25)
              </b>
            </p>
            <p className="syllabus">
              Syllabus Link:{" "}
              <a
                href="https://jntuh.ac.in/uploads/bulletins/R25B.Tech.CSEIIIYearSyllabus.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View PDF
              </a>
            </p>
          </div>

          <div className="subject-card" onClick={() => navigate("/year2")}>
            <h3>Second Year</h3>
            <p><b>Syallbus given by CVR</b></p>
            <p className="syllabus">
              Syllabus Link(CSE):{" "}
              <a
                href="https://drive.google.com/file/d/19RODSpfmoG3-z3UxLmqskZLh9wRAxDZl/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View PDF
              </a>
            </p>
            <p className="syllabus">
              Syllabus Link(All):{" "}
              <a
                href="https://drive.google.com/drive/folders/1mtrt4HuVYySmg5_Yc1FesYjdNynD5s-t"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View PDF
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          {new Date().getFullYear()} Github :{" "}
          <a
            href="https://github.com/TaufiqSameer"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            My Github(make sure to follow ;)
          </a>
        </p>
      </footer>
    </div>
  );
}
