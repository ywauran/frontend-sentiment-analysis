import React, { useState, useEffect } from "react";
import { MdShowChart, MdOutlineBarChart } from "react-icons/md";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import IconSentiment from "../assets/ic_sentiment.png";
import IconDJP from "../assets/ic_djp.png";
import Header from "../components/Header";
import SentimentAnalysisPage from "./SentimentAnalysisPage";
import DiagramPage from "./DiagramPage";
import CalculatePage from "./CalculatePage";
import CopyRight from "../components/CopyRight";

const MainPage = () => {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  let currentPage;

  switch (page) {
    case 0:
      currentPage = (
        <>
          <Header name="Analisis Sentimen" />
          <div className="flex flex-col p-4 space-y-4">
            <div className="flex justify-end my-3">
              <button
                onClick={() => setPage(2)}
                className="bg-[#196B30] text-[#FFFFFF] py-2 rounded-3xl px-8"
              >
                Lihat Perhitungan
              </button>
            </div>
            <SentimentAnalysisPage />
          </div>
        </>
      );
      break;
    case 1:
      currentPage = (
        <>
          <Header name="Diagram Batang" />
          <div className="p-4">
            <DiagramPage />
          </div>
        </>
      );
      break;
    case 2:
      currentPage = (
        <>
          <Header name="Perhitungan" />
          <div className="p-4">
            <CalculatePage />
          </div>
        </>
      );
      break;
    default:
      currentPage = (
        <div className="grid h-screen font-bold place-content-center place-items-center">
          <h1 className="">Halaman tidak ditemukan</h1>
        </div>
      );
      break;
  }

  useEffect(() => {}, []);
  return (
    <div className="flex overflow-y-hidden">
      <div
        className={`${
          open ? "w-[55%]" : "w-[20%]"
        } md:w-[15%] pr-2 h-screen border-r-2  border-[#F5F5F5]`}
      >
        <div
          className={`flex justify-between items-center px-4 p-2 border-b-2 border-[#F5F5F5]`}
        >
          <div className="items-center justify-center hidden py-1 space-x-4 md:flex">
            <img src={IconDJP} alt="" className="w-10 " />
            <h1 className="text-xl font-bold text-primary">Sentimen DJP</h1>
          </div>
          <div className={` mx-auto md:hidden`}>
            <RxHamburgerMenu
              onClick={() => setOpen(!open)}
              className={`${
                open ? "text-primary self-end" : "text-[#F5F5F5]"
              } cursor-pointer font-bold`}
            />
          </div>
        </div>
        <div className="md:hidden">
          <nav className="mt-4">
            <ul
              className={`flex flex-col space-y-2 justify-center ${
                open ? "items-start" : "items-center"
              }`}
            >
              <li
                onClick={() => setPage(0)}
                className={`w-full ${
                  page === 0 ? " bg-primary rounded-r-full" : null
                } flex space-x-2 py-3 px-3 cursor-pointer`}
              >
                <MdShowChart
                  className={`${page === 0 ? "text-[#FFFFFF]" : null}`}
                />
                <h4
                  className={`${open ? "block" : "hidden"} ${
                    page === 0 ? "text-[#FFFFFF]" : null
                  } text-xs font-bold`}
                >
                  Analisis Sentimen
                </h4>
              </li>
              <li
                onClick={() => setPage(1)}
                className={` w-full ${
                  page === 1 ? " bg-primary rounded-r-full" : null
                } flex space-x-2 py-3 px-3 cursor-pointer`}
              >
                <MdOutlineBarChart
                  className={`${page === 1 ? "text-[#FFFFFF]" : null}`}
                />
                <h4
                  className={`${open ? "block" : "hidden"} ${
                    page === 1 ? "text-[#FFFFFF]" : null
                  } text-xs font-bold`}
                >
                  Diagram Batang
                </h4>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:block">
          <div className="">
            <nav className="mt-4">
              <ul
                className={`flex flex-col space-y-2 justify-center ${
                  open ? "items-start" : "items-center"
                }`}
              >
                <li
                  onClick={() => setPage(0)}
                  className={`w-full ${
                    page === 0 ? " bg-primary rounded-r-full" : null
                  } flex space-x-2 py-3 px-3 cursor-pointer`}
                >
                  <MdShowChart
                    className={`${
                      page === 0 ? "text-[#FFFFFF]" : "text-primary"
                    }`}
                  />
                  <h4
                    className={`${
                      page === 0 ? "text-[#FFFFFF]" : "text-primary"
                    } text-xs font-bold`}
                  >
                    Analisis Sentimen
                  </h4>
                </li>
                <li
                  onClick={() => setPage(1)}
                  className={` w-full ${
                    page === 1 ? " bg-primary rounded-r-full" : null
                  } flex space-x-2 py-3 px-3 cursor-pointer`}
                >
                  <MdOutlineBarChart
                    className={`${
                      page === 1 ? "text-[#FFFFFF]" : "text-primary"
                    }`}
                  />
                  <h4
                    className={` ${
                      page === 1 ? "text-[#FFFFFF]" : "text-primary"
                    } text-xs font-bold`}
                  >
                    Diagram Batang
                  </h4>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-[80%] md:w-[85%] overflow-x-hidden  text-gray-900 font-semibold">
        {currentPage}
      </div>
    </div>
  );
};

export default MainPage;
