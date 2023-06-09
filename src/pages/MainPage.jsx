import React, { useState, useEffect } from "react";
import { MdShowChart, MdOutlineBarChart } from "react-icons/md";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import IconSentiment from "../assets/ic_sentiment.png";
import Header from "../components/Header";
import SentimentAnalysisPage from "./SentimentAnalysisPage";
import DiagramPage from "./DiagramPage";

const MainPage = () => {
  const [page, setPage] = useState(1);
  const [switched, setSwitched] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  let currentPage;

  switch (page) {
    case 0:
      currentPage = (
        <>
          <Header name="Analisis Sentimen" />
          <div className="p-4">
            <SentimentAnalysisPage />
          </div>
        </>
      );
      break;
    case 1:
      currentPage = (
        <>
          <Header name="Diagram" />
          <div className="p-4">
            <DiagramPage />
          </div>
        </>
      );
      break;
    default:
      currentPage = (
        <div className="font-bold grid place-content-center h-screen place-items-center">
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
        } md:w-[15%] pr-2 h-screen border-r-2 border-[#F5F5F5]`}
      >
        <div
          className={`flex justify-between items-center p-2 border-b-2 border-[#F5F5F5]`}
        >
          <div className="hidden md:flex items-center justify-center space-x-4">
            <img src={IconSentiment} alt="" className="" />
            <h1 className="text-primary font-bold text-xl">Sentimen</h1>
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
                  Hologram
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
                    Hologram
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
