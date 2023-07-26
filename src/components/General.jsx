import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "./Accordion";
import ConfusionMatrix from "./ConfusionMatrix";
import Metrics from "./Metrics";
import TextToken from "./TextToken";
import { ENDPOINT } from "../utils/endpoint";

const General = () => {
  const [dataGeneral, setDataGeneral] = useState(null);
  const fetchDataGeneral = async () => {
    try {
      const response = await axios.get(`${ENDPOINT}/calculate/general`);
      setDataGeneral(response.data);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDataGeneral();
  }, []);

  return (
    <>
      {dataGeneral === null ? (
        <p>Belum ada data</p>
      ) : (
        <>
          <div className="flex flex-col space-y-4">
            <Accordion
              title="Data Asli"
              content={
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataGeneral.df_original.map((item, index) => (
                        <tr key={index}>
                          <td>{item.label}</td>
                          <td>{item.tweet}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            />
            <Accordion
              title="Data Lower Case"
              content={
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataGeneral.df_lower_case.map((item, index) => (
                        <tr key={index}>
                          <td>{item.label}</td>
                          <td>{item.tweet}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            />
            <Accordion
              title="Data Setelah Pembersihan"
              content={
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataGeneral.df_cleaning.map((item, index) => (
                        <tr key={index}>
                          <td>{item.label}</td>
                          <td>{item.tweet}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            />
            <Accordion
              title="Data Setelah Tokenisasi"
              content={
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataGeneral.df_token.map((item, index) => (
                        <tr key={index}>
                          <td>{item.label}</td>
                          <td>[{<TextToken tokenizeText={item.tweet} />}]</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            />
            <Accordion
              title="Data Setelah Penghapusan Stopword"
              content={
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataGeneral.df_stopwords.map((item, index) => (
                        <tr key={index}>
                          <td>{item.label}</td>
                          <td>[{<TextToken tokenizeText={item.tweet} />}]</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            />
            <Accordion
              title="Data Setelah Stemming"
              content={
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataGeneral.df_stemming.map((item, index) => (
                        <tr key={index}>
                          <td>{item.label}</td>
                          <td>{item.tweet}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            />
            <Accordion
              title="Split Data"
              content={
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Data Latih</th>
                        <th>Data Uji</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{dataGeneral.train_samples}</td>
                        <td>{dataGeneral.test_samples}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
            />
            <Accordion
              title="Matriks Kebingungan Naive Bayes"
              content={<ConfusionMatrix data={dataGeneral.nb_cm} />}
            />
            <Accordion
              title="Matriks Kebingungan Adaboost"
              content={<ConfusionMatrix data={dataGeneral.adaboost_cm} />}
            />
            <Accordion
              title="Metrik Naive Bayes"
              content={<Metrics data={dataGeneral.nb_metrics} />}
            />
            <Accordion
              title="Metrik Adaboost"
              content={<Metrics data={dataGeneral.adaboost_metrics} />}
            />
          </div>
        </>
      )}
    </>
  );
};

export default General;
