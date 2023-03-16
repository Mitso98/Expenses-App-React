import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (probs) => {
  const dataPointsValues = probs.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {probs.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
