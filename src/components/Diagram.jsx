import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { app } from "../config/index";
import { getDatabase, ref, onValue } from "firebase/database";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const optionsGeneral = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Umum",
      color: "#828282",
      align: "start",
      font: {
        size: 12,
        weight: "bold",
      },
    },
    subtitle: {
      display: true,
      color: "#0B1354",
      align: "start",
      font: {
        size: 30,
        weight: "bold",
      },
      padding: {
        bottom: 15,
      },
    },
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        boxHeight: 10,
        boxWidth: 20,
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#4F4F4F",
        beginAtZero: true,
        font: {
          size: 12,
        },
      },
    },
    x: {
      ticks: {
        color: "#4F4F4F",
        beginAtZero: true,
        font: {
          size: 10,
        },
      },
    },
  },
  layout: {
    padding: 15,
  },
};

export const optionsCounseling = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Penyuluhan",
      color: "#828282",
      align: "start",
      font: {
        size: 12,
        weight: "bold",
      },
    },
    subtitle: {
      display: true,
      color: "#0B1354",
      align: "start",
      font: {
        size: 30,
        weight: "bold",
      },
      padding: {
        bottom: 15,
      },
    },
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        boxHeight: 10,
        boxWidth: 20,
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#4F4F4F",
        beginAtZero: true,
        font: {
          size: 12,
        },
      },
    },
    x: {
      ticks: {
        color: "#4F4F4F",
        beginAtZero: true,
        font: {
          size: 10,
        },
      },
    },
  },
  layout: {
    padding: 15,
  },
};

export const optionsService = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Pelayanan",
      color: "#828282",
      align: "start",
      font: {
        size: 12,
        weight: "bold",
      },
    },
    subtitle: {
      display: true,
      color: "#0B1354",
      align: "start",
      font: {
        size: 30,
        weight: "bold",
      },
      padding: {
        bottom: 15,
      },
    },
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        boxHeight: 10,
        boxWidth: 20,
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#4F4F4F",
        beginAtZero: true,
        font: {
          size: 12,
        },
      },
    },
    x: {
      ticks: {
        color: "#4F4F4F",
        beginAtZero: true,
        font: {
          size: 10,
        },
      },
    },
  },
  layout: {
    padding: 15,
  },
};

export const optionsPublicRelations = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Kehumasan",
      color: "#828282",
      align: "start",
      font: {
        size: 12,
        weight: "bold",
      },
    },
    subtitle: {
      display: true,
      color: "#0B1354",
      align: "start",
      font: {
        size: 30,
        weight: "bold",
      },
      padding: {
        bottom: 15,
      },
    },
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        boxHeight: 10,
        boxWidth: 20,
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#4F4F4F",
        beginAtZero: true,
        font: {
          size: 12,
        },
      },
    },
    x: {
      ticks: {
        color: "#4F4F4F",
        beginAtZero: true,
        font: {
          size: 10,
        },
      },
    },
  },
  layout: {
    padding: 15,
  },
};

const db = getDatabase(app);

const initialState = {
  accuracy: 0,
  precision: 0,
  recall: 0,
};

const initialData = {
  positiveNaiveBayes: initialState,
  negativeNaiveBayes: initialState,
  positiveNaiveBayesAdaboost: initialState,
  negativeNaiveBayesAdaboost: initialState,
};
const Diagram = () => {
  const [partition, setPartition] = useState("70:30");
  const [data, setData] = useState([]);
  const [dataGeneral, setDataGeneral] = useState({
    labels: ["+NB", "-NB", "+NBA", "-NBA"],
    datasets: [
      {
        label: "Akurasi",
        data: [],
        backgroundColor: "#63ABFD",
      },
      {
        label: "Presisi",
        data: [],
        backgroundColor: "#99FFA4",
      },
      {
        label: "Recall",
        data: [],
        backgroundColor: "rgb(230, 151, 255)",
      },
    ],
  });
  const [dataService, setDataService] = useState({
    labels: ["+NB", "-NB", "+NBA", "-NBA"],
    datasets: [
      {
        label: "Akurasi",
        data: [],
        backgroundColor: "#63ABFD",
      },
      {
        label: "Presisi",
        data: [],
        backgroundColor: "#99FFA4",
      },
      {
        label: "Recall",
        data: [],
        backgroundColor: "rgb(230, 151, 255)",
      },
    ],
  });
  const [dataPublicRelations, setDataPublicRelations] = useState({
    labels: ["+NB", "-NB", "+NBA", "-NBA"],
    datasets: [
      {
        label: "Akurasi",
        data: [],
        backgroundColor: "#63ABFD",
      },
      {
        label: "Presisi",
        data: [],
        backgroundColor: "#99FFA4",
      },
      {
        label: "Recall",
        data: [],
        backgroundColor: "rgb(230, 151, 255)",
      },
    ],
  });
  const [dataCounseling, setDataCounseling] = useState({
    labels: ["+NB", "-NB", "+NBA", "-NBA"],
    datasets: [
      {
        label: "Akurasi",
        data: [],
        backgroundColor: "#63ABFD",
      },
      {
        label: "Presisi",
        data: [],
        backgroundColor: "#99FFA4",
      },
      {
        label: "Recall",
        data: [],
        backgroundColor: "rgb(230, 151, 255)",
      },
    ],
  });

  const fetchDataGeneral = () => {
    try {
      const dbRef = ref(db, `partition/${partition}`);
      onValue(dbRef, (snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key;
          const value = childSnapshot.val();

          data.push({
            key: key,
            value: value,
          });
        });

        const {
          positiveNaiveBayes,
          negativeNaiveBayes,
          positiveNaiveBayesAdaboost,
          negativeNaiveBayesAdaboost,
        } = data[1].value;

        setDataGeneral({
          ...dataGeneral,
          datasets: [
            {
              ...dataGeneral.datasets[0],
              data: [
                positiveNaiveBayes.accuracy,
                negativeNaiveBayes.accuracy,
                positiveNaiveBayesAdaboost.accuracy,
                negativeNaiveBayesAdaboost.accuracy,
              ],
            },
            {
              ...dataGeneral.datasets[1],
              data: [
                positiveNaiveBayes.precision,
                negativeNaiveBayes.precision,
                positiveNaiveBayesAdaboost.precision,
                negativeNaiveBayesAdaboost.precision,
              ],
            },
            {
              ...dataGeneral.datasets[2],
              data: [
                positiveNaiveBayes.recall,
                negativeNaiveBayes.recall,
                positiveNaiveBayesAdaboost.recall,
                negativeNaiveBayesAdaboost.recall,
              ],
            },
          ],
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataService = () => {
    try {
      const dbRef = ref(db, `partition/${partition}`);
      onValue(dbRef, (snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key;
          const value = childSnapshot.val();

          data.push({
            key: key,
            value: value,
          });
        });

        const {
          positiveNaiveBayes,
          negativeNaiveBayes,
          positiveNaiveBayesAdaboost,
          negativeNaiveBayesAdaboost,
        } = data[3].value;

        setDataService({
          ...dataService,
          datasets: [
            {
              ...dataService.datasets[0],
              data: [
                positiveNaiveBayes.accuracy,
                negativeNaiveBayes.accuracy,
                positiveNaiveBayesAdaboost.accuracy,
                negativeNaiveBayesAdaboost.accuracy,
              ],
            },
            {
              ...dataService.datasets[1],
              data: [
                positiveNaiveBayes.precision,
                negativeNaiveBayes.precision,
                positiveNaiveBayesAdaboost.precision,
                negativeNaiveBayesAdaboost.precision,
              ],
            },
            {
              ...dataService.datasets[2],
              data: [
                positiveNaiveBayes.recall,
                negativeNaiveBayes.recall,
                positiveNaiveBayesAdaboost.recall,
                negativeNaiveBayesAdaboost.recall,
              ],
            },
          ],
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataPublicRelations = () => {
    try {
      const dbRef = ref(db, `partition/${partition}`);
      onValue(dbRef, (snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key;
          const value = childSnapshot.val();

          data.push({
            key: key,
            value: value,
          });
        });
        const {
          positiveNaiveBayes,
          negativeNaiveBayes,
          positiveNaiveBayesAdaboost,
          negativeNaiveBayesAdaboost,
        } = data[2].value;

        setDataPublicRelations({
          ...dataPublicRelations,
          datasets: [
            {
              ...dataPublicRelations.datasets[0],
              data: [
                positiveNaiveBayes.accuracy,
                negativeNaiveBayes.accuracy,
                positiveNaiveBayesAdaboost.accuracy,
                negativeNaiveBayesAdaboost.accuracy,
              ],
            },
            {
              ...dataPublicRelations.datasets[1],
              data: [
                positiveNaiveBayes.precision,
                negativeNaiveBayes.precision,
                positiveNaiveBayesAdaboost.precision,
                negativeNaiveBayesAdaboost.precision,
              ],
            },
            {
              ...dataPublicRelations.datasets[2],
              data: [
                positiveNaiveBayes.recall,
                negativeNaiveBayes.recall,
                positiveNaiveBayesAdaboost.recall,
                negativeNaiveBayesAdaboost.recall,
              ],
            },
          ],
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataCounseling = () => {
    try {
      const dbRef = ref(db, `partition/${partition}`);
      onValue(dbRef, (snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key;
          const value = childSnapshot.val();

          data.push({
            key: key,
            value: value,
          });
        });

        const {
          positiveNaiveBayes,
          negativeNaiveBayes,
          positiveNaiveBayesAdaboost,
          negativeNaiveBayesAdaboost,
        } = data[0].value;

        setDataCounseling({
          ...dataCounseling,
          datasets: [
            {
              ...dataCounseling.datasets[0],
              data: [
                positiveNaiveBayes.accuracy,
                negativeNaiveBayes.accuracy,
                positiveNaiveBayesAdaboost.accuracy,
                negativeNaiveBayesAdaboost.accuracy,
              ],
            },
            {
              ...dataCounseling.datasets[1],
              data: [
                positiveNaiveBayes.precision,
                negativeNaiveBayes.precision,
                positiveNaiveBayesAdaboost.precision,
                negativeNaiveBayesAdaboost.precision,
              ],
            },
            {
              ...dataCounseling.datasets[2],
              data: [
                positiveNaiveBayes.recall,
                negativeNaiveBayes.recall,
                positiveNaiveBayesAdaboost.recall,
                negativeNaiveBayesAdaboost.recall,
              ],
            },
          ],
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataGeneral();
    fetchDataService();
    fetchDataPublicRelations();
    fetchDataCounseling();
  }, [partition]);
  return (
    <>
      <div>
        <div className="bg-[#F7F8F9] p-2">
          <form>
            <div className="flex items-center">
              <span className="bg-[#FFFFFF] py-3 px-2 cursor-pointer">
                <AiOutlineSearch />
              </span>
              <select
                value={partition}
                id=""
                onChange={(e) => setPartition(e.target.value)}
                className="w-full px-4 py-2 font-medium"
              >
                <option value="60:40">60:40</option>
                <option value="70:30">70:30</option>
                <option value="80:20">80:20</option>
              </select>
              {/* <input
            type="text"
            placeholder="Tagar"
            className="w-full px-4 py-2 font-medium"
          /> */}
            </div>
          </form>
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2">
          <div className="p-2 shadow">
            <Bar options={optionsGeneral} data={dataGeneral} />
          </div>
          <div className="p-2 shadow">
            <Bar options={optionsCounseling} data={dataCounseling} />
          </div>
          <div className="p-2 shadow">
            <Bar options={optionsService} data={dataService} />
          </div>
          <div className="p-2 shadow">
            <Bar options={optionsPublicRelations} data={dataPublicRelations} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Diagram;
