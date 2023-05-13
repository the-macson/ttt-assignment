import ChartComponent from "./ChartComponent";
const ChartPage = ({ wordCount }) => {
  return (
    <div>
      <ChartComponent wordCount={wordCount} />
    </div>
  );
};

export default ChartPage;