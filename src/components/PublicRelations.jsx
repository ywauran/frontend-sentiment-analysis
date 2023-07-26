import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "./Accordion";
import ConfusionMatrix from "./ConfusionMatrix";
import Metrics from "./Metrics";
import TextToken from "./TextToken";

const PublicRelations = () => {
  const [dataPublicRelations, setDataPublielations] = useState(null);
  const fetchDataPublicRelations = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.2:81/calculate/public-relations"
      );
      setDataPublielations(response.data);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDataPublicRelations();
  }, []);

  return (
    <>
      {dataPublicRelations === null ? (
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
                      {dataPublicRelations.df_original.map((item, index) => (
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
                      {dataPublicRelations.df_lower_case.map((item, index) => (
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
                      {dataPublicRelations.df_cleaning.map((item, index) => (
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
                      {dataPublicRelations.df_token.map((item, index) => (
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
                      {dataPublicRelations.df_stopwords.map((item, index) => (
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
                      {dataPublicRelations.df_stemming.map((item, index) => (
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
                        <td>{dataPublicRelations.train_samples}</td>
                        <td>{dataPublicRelations.test_samples}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
            />
            <Accordion
              title="Matriks Kebingungan Naive Bayes"
              content={<ConfusionMatrix data={dataPublicRelations.nb_cm} />}
            />
            <Accordion
              title="Matriks Kebingungan Adaboost"
              content={
                <ConfusionMatrix data={dataPublicRelations.adaboost_cm} />
              }
            />
            <Accordion
              title="Metrik Naive Bayes"
              content={<Metrics data={dataPublicRelations.nb_metrics} />}
            />
            <Accordion
              title="Metrik Adaboost"
              content={<Metrics data={dataPublicRelations.adaboost_metrics} />}
            />
          </div>
        </>
      )}
    </>
  );
};

export default PublicRelations;
