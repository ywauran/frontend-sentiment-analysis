import React from "react";

const Metrics = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Metrik</th>
            <th>Nilai</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([metrik, nilai]) => (
            <tr key={metrik}>
              <td>{metrik}</td>
              <td>{nilai}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Metrics;
