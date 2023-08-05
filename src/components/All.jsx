import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "./Accordion";
import ConfusionMatrix from "./ConfusionMatrix";
import Metrics from "./Metrics";
import TextToken from "./TextToken";
import { ENDPOINT } from "../utils/endpoint";

const All = () => {
  const [dataAll, setDataAll] = useState(null);
  const fetchDataAll = async () => {
    try {
      const response = await axios.get(`${ENDPOINT}/calculate/all`);
      setDataAll(response.data);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDataAll();
  }, []);

  return (
    <>
      {dataAll === null ? (
        <div className="flex flex-col items-center justify-center h-[400px]">
          <span className="loading loading-spinner loading-lg bg-gradient-to-r from-[#17415F]"></span>
          <p className="mt-4 tex-center">Mohon tunggu sebentar ya.</p>
        </div>
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
                      {dataAll.df_original.map((item, index) => (
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
                      {dataAll.df_lower_case.map((item, index) => (
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
                      {dataAll.df_cleaning.map((item, index) => (
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
                      {dataAll.df_token.map((item, index) => (
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
                      {dataAll.df_stopwords.map((item, index) => (
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
                      {dataAll.df_stemming.map((item, index) => (
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
                        <td>{dataAll.train_samples}</td>
                        <td>{dataAll.test_samples}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
            />
            <Accordion
              title="Matriks Kebingungan Naive Bayes"
              content={<ConfusionMatrix data={dataAll.nb_cm} />}
            />
            <Accordion
              title="Matriks Kebingungan Adaboost"
              content={<ConfusionMatrix data={dataAll.adaboost_cm} />}
            />
            <Accordion
              title="Metrik Naive Bayes"
              content={<Metrics data={dataAll.nb_metrics} />}
            />
            <Accordion
              title="Metrik Adaboost"
              content={<Metrics data={dataAll.adaboost_metrics} />}
            />
          </div>
        </>
      )}
    </>
  );
};

export default All;
