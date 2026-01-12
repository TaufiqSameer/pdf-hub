export default function SubjectList({ pdfs, onSelect }) {
    return (
      <div className="subjects">
        {Object.keys(pdfs).map(subject => (
          <button key={subject} onClick={() => onSelect(subject)}>
            {subject}
          </button>
        ))}
      </div>
    );
  }
  