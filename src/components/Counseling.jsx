import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "./Accordion";
import ConfusionMatrix from "./ConfusionMatrix";
import Metrics from "./Metrics";
import TextToken from "./TextToken";
import { ENDPOINT } from "../utils/endpoint";

const Counseling = () => {
  const [dataCounseling, setDataCounseling] = useState(null);
  const fetchDataCounseling = async () => {
    try {
      const response = await axios.get(`${ENDPOINT}/calculate/counseling`);
      setDataCounseling(response.data);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDataCounseling();
  }, []);

  return (
    <>
      {dataCounseling === null ? (
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
                      {dataCounseling.df_original.map((item, index) => (
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
                      {dataCounseling.df_lower_case.map((item, index) => (
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
                      {dataCounseling.df_cleaning.map((item, index) => (
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
                      {dataCounseling.df_token.map((item, index) => (
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
                      {dataCounseling.df_stopwords.map((item, index) => (
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
                        <th>Data Latih</th>
                        <th>Data Uji</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{dataCounseling.train_samples}</td>
                        <td>{dataCounseling.test_samples}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
            />
            <Accordion
              title="Split Data"
              content={
                <table>
                  <thead>
                    <tr>
                      <th>Data Latih</th>
                      <th>Data Uji</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{dataCounseling.train_samples}</td>
                      <td>{dataCounseling.test_samples}</td>
                    </tr>
                  </tbody>
                </table>
              }
            />
            <Accordion
              title="Matriks Kebingungan Naive Bayes"
              content={<ConfusionMatrix data={dataCounseling.nb_cm} />}
            />
            <Accordion
              title="Matriks Kebingungan Adaboost"
              content={<ConfusionMatrix data={dataCounseling.adaboost_cm} />}
            />
            <Accordion
              title="Metrik Naive Bayes"
              content={<Metrics data={dataCounseling.nb_metrics} />}
            />
            <Accordion
              title="Metrik Adaboost"
              content={<Metrics data={dataCounseling.adaboost_metrics} />}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Counseling;
