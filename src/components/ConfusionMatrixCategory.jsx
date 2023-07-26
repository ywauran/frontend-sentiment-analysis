import React from "react";

const ConfusionMatrixCategory = ({ data }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Prediksi</th>
              <th>Umum</th>
              <th>Penyuluhan</th>
              <th>Pelayanan</th>
              <th>Kehumasan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Umum</th>
              <td>{data[0][0]}</td>
              <td>{data[0][1]}</td>
              <td>{data[0][2]}</td>
              <td>{data[0][3]}</td>
            </tr>
            <tr>
              <th>Penyuluhan</th>
              <td>{data[1][0]}</td>
              <td>{data[1][1]}</td>
              <td>{data[1][2]}</td>
              <td>{data[1][3]}</td>
            </tr>
            <tr>
              <th>Pelayanan</th>
              <td>{data[2][0]}</td>
              <td>{data[2][1]}</td>
              <td>{data[2][2]}</td>
              <td>{data[2][3]}</td>
            </tr>
            <tr>
              <th>Kehumasan</th>
              <td>{data[3][0]}</td>
              <td>{data[3][1]}</td>
              <td>{data[3][2]}</td>
              <td>{data[3][3]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ConfusionMatrixCategory;
