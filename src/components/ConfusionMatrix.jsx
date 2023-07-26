import React from "react";

const ConfusionMatrix = ({ data }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Prediksi</th>
              <th>Positif</th>
              <th>Negatif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Positif</th>
              <td>{data[0][0]}</td>
              <td>{data[0][1]}</td>
            </tr>
            <tr>
              <th>Negatif</th>
              <td>{data[1][0]}</td>
              <td>{data[1][1]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ConfusionMatrix;
