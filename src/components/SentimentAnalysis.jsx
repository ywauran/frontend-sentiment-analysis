import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { uid } from "uid";
import { app } from "../config";
import { set, ref, getDatabase } from "firebase/database";

const db = getDatabase(app);
const SentimentAnalysis = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [variable, setVariable] = useState("public-relations");
  const variables = [
    {
      option: "umum",
      value: "general",
    },
    {
      option: "kehumasan",
      value: "public-relations",
    },
    {
      option: "pelayanan",
      value: "service",
    },
    {
      option: "penyuluhan",
      value: "counseling",
    },
  ];
  const header = ["Data", "Nilai", "Hasil"];

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/api/${variable}`,
        {
          text: text,
        }
      );

      setData([response.data, ...data]);
      addNewData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewData = (data) => {
    const uuid = uid();
    set(ref(db, `/data/${uuid}`), {
      ...data,
      uuid,
      variable,
    });
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-col space-y-3">
        <div className="bg-[#F7F8F9] p-2 flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between">
          <div onSubmit={sendData} className="flex items-center">
            <span className="bg-[#FFFFFF] py-3 px-2 cursor-pointer">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Cari analisis sentimen anda"
              className="font-medium w-[320px] px-4 py-2"
            />
          </div>
          <select
            name=""
            id=""
            value={variable}
            onChange={(e) => setVariable(e.target.value)}
            className="px-3 w-max"
          >
            {variables.map((item, number) => (
              <option key={number + 1} value={item.value}>
                {item.option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center">
          <button
            onClick={(e) => sendData(e)}
            className="bg-primary text-[#FFFFFF] rounded-full py-2 px-10"
          >
            Lihat Hasil
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="relative w-full p-2 px-6 overflow-x-auto shadow">
          {data.length === 0 ? (
            <>
              <div>
                <h3 className="p-2 text-center">Data Kosong</h3>
              </div>
            </>
          ) : (
            <>
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-[#64748B] gray-700 uppercase ">
                  <tr className="border-b-2 border-[#F7F8F9]">
                    {header.map((item, number) => (
                      <th key={number + 1} scope="col" className="px-6 py-3">
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, number) => (
                    <tr
                      key={number + 1}
                      className="font-normal text-[#191D23] border-b-2 border-[#F7F8F9]"
                    >
                      <td className="py-2">{item.text}</td>
                      <td className="py-2">
                        {item.sentiment === 0 ? "-1" : "1"}
                      </td>
                      <td className="py-2">
                        <p
                          className={`${
                            item.sentiment === 1 ? "bg-blue" : "bg-purple"
                          } py-2 px-4 rounded-full text-center max-w-[150px] text-[#FFFFFF]`}
                        >
                          {item.sentiment === 1 ? "Positif" : "Negatif"}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SentimentAnalysis;
