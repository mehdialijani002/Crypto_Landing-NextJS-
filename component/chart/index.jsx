import React from "react";
import ReactApexChart from "react-apexcharts";
import style from "../../styles/styles.module.css";
import { Row, Col } from "react-bootstrap";
import {
  FaEthereum,
  FaBitcoin,
  FaCopyright,
  FaCodepen,
  FaChartLine,
} from "react-icons/fa";
const CryptoCharts = () => {
  const bitcoinData = [
    { x: "2023-01-01", y: 35000 },
    { x: "2023-01-02", y: 35500 },
    { x: "2023-01-03", y: 34000 },
    { x: "2023-01-04", y: 34500 },
  ];

  const ethereumData = [
    { x: "2023-01-01", y: 2500 },
    { x: "2023-01-02", y: 2600 },
    { x: "2023-01-03", y: 2550 },
    { x: "2023-01-04", y: 2650 },
  ];

  const litecoinData = [
    { x: "2023-01-01", y: 150 },
    { x: "2023-01-02", y: 160 },
    { x: "2023-01-03", y: 155 },
    { x: "2023-01-04", y: 165 },
  ];

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      locales: [
        {
          name: "fa",
          options: {
            months: [
              "ژانویه",
              "فوریه",
              "مارس",
              "آوریل",
              "مه",
              "ژوئن",
              "جولای",
              "اوت",
              "سپتامبر",
              "اکتبر",
              "نوامبر",
              "دسامبر",
            ],
            shortMonths: [
              "ژانویه",
              "فوریه",
              "مارس",
              "آوریل",
              "مه",
              "ژوئن",
              "جولای",
              "اوت",
              "سپتامبر",
              "اکتبر",
              "نوامبر",
              "دسامبر",
            ],
            days: [
              "یکشنبه",
              "دوشنبه",
              "سه‌شنبه",
              "چهارشنبه",
              "پنج‌شنبه",
              "جمعه",
              "شنبه",
            ],
            shortDays: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            toolbar: {
              exportToSVG: "دریافت SVG",
              exportToPNG: "دریافت PNG",
              menu: "فهرست",
              selection: "انتخاب",
              selectionZoom: "بزرگنمایی با انتخاب دامنه",
              zoomIn: "بزرگنمایی",
              zoomOut: "کوچکنمایی",
              pan: "پن",
              reset: "بازنشانی داده‌ها",
            },
          },
        },
      ],
      defaultLocale: "fa",
    },
    xaxis: {
      type: "category",
      labels: {
        rotate: -45,
        style: {
          fontSize: "10px",
        },
      },
    },
    yaxis: {
      title: {
        text: "ارزش",
        style: {
          fontSize: "12px",
        },
      },
      labels: {
        style: {
          fontSize: "10px",
        },
      },
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      fillSeriesColor: false,
      style: {
        fontSize: "10px",
      },
    },
  };

  return (
    <div
      className="mx-5 mt-5"
      style={{ display: "flex", justifyContent: "space-around", width: "90%" }}
    >
      <div className={style.chartContainer}>
        <h3 data-testid="etherium">
          <FaEthereum />
          اتریوم
        </h3>
        <ReactApexChart
          options={options}
          series={[{ name: "اتریوم", data: ethereumData }]}
          type="line"
          height={300}
        />
      </div>

      {/*}
        <Col lg={6} md={6} className="mb-4">
          <div className={style.chartContainer} style={{ width: "100%" }}>
            <h3 data-testid="etherium">
              <FaEthereum />
              اتریوم
            </h3>
            <ReactApexChart
              options={options}
              series={[{ name: "اتریوم", data: ethereumData }]}
              type="line"
              height={300}
            />
          </div>
        </Col>
        <Col lg={12} md={12} className="mb-4">
          <div className={style.chartContainer} style={{ width: "100%" }}>
            <h3 data-testid="bitCoin">
              <FaBitcoin />
              بیت‌کوین
            </h3>
            <ReactApexChart
              options={options}
              series={[{ name: "بیت‌کوین", data: bitcoinData }]}
              type="line"
              height={300}
            />
          </div>
        </Col>
        <Col lg={6} md={6} className="mb-4">
          <div className={style.chartContainer} style={{ width: "100%" }}>
            <h3 data-testid="lightcoin">
              <FaCopyright />
              لایت‌کوین
            </h3>
            <ReactApexChart
              options={options}
              series={[{ name: "لایت‌کوین", data: litecoinData }]}
              type="line"
              height={300}
            />
          </div>
        </Col>
        <Col lg={6} md={6} className="mb-4">
          <div className={style.chartContainer} style={{ width: "100%" }}>
            <h3 data-testid="dogeCoin">
              <FaCodepen />
              دوج کوین
            </h3>
            <ReactApexChart
              options={options}
              series={[{ name: "لایت‌کوین", data: litecoinData }]}
              type="line"
              height={300}
            />
          </div>
        </Col>
  */}
    </div>
  );
};

export default CryptoCharts;
