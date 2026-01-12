export default function PdfViewer({ pdf }) {
    if (!pdf) return <p>Select a PDF</p>;
  
    return (
      <iframe
        src={pdf}
        width="100%"
        height="600"
        style={{ border: "none" }}
        title="PDF Viewer"
      />
    );
  }
  