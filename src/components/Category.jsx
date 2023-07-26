import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "./Accordion";
import Metrics from "./Metrics";
import TextToken from "./TextToken";
import ConfusionMatrixCategory from "./ConfusionMatrixCategory";
import { ENDPOINT } from "../utils/endpoint";

const Category = () => {
  const [dataCategory, setDataCategory] = useState(null);
  const fetchDataCategory = async () => {
    try {
      const response = await axios.get(`${ENDPOINT}/calculate/category`);
      setDataCategory(response.data);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDataCategory();
  }, []);

  return (
    <>
      {dataCategory === null ? (
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
                        <th>Kategori</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataCategory.df_original.map((item, index) => (
                        <tr key={index}>
                          <td>{item.kategori}</td>
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
                        <th>Kategori</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataCategory.df_lower_case.map((item, index) => (
                        <tr key={index}>
                          <td>{item.kategori}</td>
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
                        <th>Kategori</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataCategory.df_cleaning.map((item, index) => (
                        <tr key={index}>
                          <td>{item.kategori}</td>
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
                        <th>Kategori</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataCategory.df_token.map((item, index) => (
                        <tr key={index}>
                          <td>{item.kategori}</td>
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
                        <th>Kategori</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataCategory.df_stopwords.map((item, index) => (
                        <tr key={index}>
                          <td>{item.kategori}</td>
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
                        <th>Kategori</th>
                        <th>Tweet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataCategory.df_stemming.map((item, index) => (
                        <tr key={index}>
                          <td>{item.kategori}</td>
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
                        <td>{dataCategory.train_samples}</td>
                        <td>{dataCategory.test_samples}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
            />
            <Accordion
              title="Matriks Kebingungan Naive Bayes"
              content={<ConfusionMatrixCategory data={dataCategory.nb_cm} />}
            />
            <Accordion
              title="Matriks Kebingungan Adaboost"
              content={
                <ConfusionMatrixCategory data={dataCategory.adaboost_cm} />
              }
            />
            <Accordion
              title="Metrik Naive Bayes"
              content={<Metrics data={dataCategory.nb_metrics} />}
            />
            <Accordion
              title="Metrik Adaboost"
              content={<Metrics data={dataCategory.adaboost_metrics} />}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Category;
