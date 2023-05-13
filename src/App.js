import { useState } from 'react';
import './App.css';
import ChartPage from './ChartPage';
function App() {
  const [viewChart, setViewChart] = useState(false);
  const [wordCount, setWordCount] = useState([]);    
  const handleViewChart = () => {
    setViewChart(!viewChart);
    getChartData();
  }

  const getChartData = async () => {
    const data = await fetch("https://www.terriblytinytales.com/test.txt");
    const text = await data.text();
    const wordCount = getWordCount(text);
    const sortedWordCount = sortWordCount(wordCount);
    setWordCount(sortedWordCount);
  }

  const getWordCount = (text) => {
    const words = text.split(/\s+/);
    const wordCount = {};
    words.forEach((word) => {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    });
    return wordCount;
  }

  const sortWordCount = (wordCount) => {
    const sortedWordCount = [];
    for (let word in wordCount) {
      sortedWordCount.push([word, wordCount[word]]);
    }
    sortedWordCount.sort((a, b) => b[1] - a[1]);
    return sortedWordCount;
  }

  return (
    <div>
      {viewChart ? (
        <div className="chart-container">
          {
            wordCount.length > 0 ? (
              <ChartPage wordCount={wordCount} />
            ) : ('Loading...')
          }
        </div>
      ) : (
        <div className="main-container">
          <button className="btn" onClick={handleViewChart}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
