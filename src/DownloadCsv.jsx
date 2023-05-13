import React from 'react'
import './App.css'
const DownloadCsv = ({wordCount}) => {
  const handleDownloadCSV = () => {
    const csvContent ="data:text/csv;charset=utf-8," + convertToCSV(wordCount);
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "word-frequency.csv");
    document.body.appendChild(link);
    link.click();
  };

  const convertToCSV = (wordCount) => {
    const headers = ["Word", "Frequency"];
    const rows = wordCount.slice(0,20).map((word) => [word[0], word[1]]);
    let csv = headers.join(",") + "\n";
    csv += rows.join("\n");
    return csv;
  };
  return (
    <div>
      <button className="btn" onClick={handleDownloadCSV}>
        Export
      </button>
    </div>
  );
}

export default DownloadCsv;