import DataTable from "react-data-table-component";
import { FaListUl } from "react-icons/fa6";
import React, { useState, useRef } from "react";
import Link from "next/link";
import style from "../../styles/styles.module.css";
import {
  FaCartArrowDown,
  FaArrowDownShortWide,
  FaArrowUpWideShort,
} from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fakeData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$48,000",
    marketCap: "$900B",
    volume: "$50B",
    change: "+2.5%",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,200",
    marketCap: "$380B",
    volume: "$20B",
    change: "+3.8%",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$2.10",
    marketCap: "$68B",
    volume: "$5B",
    change: "-1.2%",
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    price: "$450",
    marketCap: "$75B",
    volume: "$3.5B",
    change: "-4.5%",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$180",
    marketCap: "$50B",
    volume: "$2.2B",
    change: "+5.9%",
  },
  {
    name: "Ripple",
    symbol: "XRP",
    price: "$1.05",
    marketCap: "$48B",
    volume: "$4B",
    change: "-0.8%",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$48,000",
    marketCap: "$900B",
    volume: "$50B",
    change: "+2.5%",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,200",
    marketCap: "$380B",
    volume: "$20B",
    change: "+3.8%",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$2.10",
    marketCap: "$68B",
    volume: "$5B",
    change: "-1.2%",
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    price: "$450",
    marketCap: "$75B",
    volume: "$3.5B",
    change: "-4.5%",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$180",
    marketCap: "$50B",
    volume: "$2.2B",
    change: "+5.9%",
  },
  {
    name: "Ripple",
    symbol: "XRP",
    price: "$1.05",
    marketCap: "$48B",
    volume: "$4B",
    change: "-0.8%",
  },
];

const columns = [
  {
    name: "نام",
    selector: "name",
    sortable: true,
  },
  {
    name: "نماد",
    selector: "symbol",
    sortable: true,
  },
  {
    name: "قیمت",
    selector: "price",
    sortable: true,
  },
  {
    name: "سر بازار",
    selector: "marketCap",
    sortable: true,
  },
  {
    name: "حجم",
    selector: "volume",
    sortable: true,
  },
  {
    name: "تغییرات (۲۴ ساعت گذشته)",
    selector: "change",
    sortable: true,
    width: "250px",
  },
  {
    name: "خرید",
    cell: (row) => (
      <div className={style.buy}>
        <button
          data-testid="tableBtn"
          className="delete btn btn-outline-success"
          onClick={() =>
            toast.success(`با موفقیت انجام شد  ${row.name} خرید   `, {
              position: toast.POSITION.TOP_RIGHT,
            })
          }
        >
          <FaCartArrowDown />
          خرید
        </button>
      </div>
    ),
  },
];

const CryptoTable = () => {
  const tableRef = useRef(null);
  const [showAllRows, setShowAllRows] = useState(false);
  const [showHideButton, setShowHideButton] = useState(false);
  const limitedData = showAllRows ? fakeData : fakeData.slice(0, 5);

  const handleShowAllRows = () => {
    setShowAllRows(true);
    setShowHideButton(true);
  };

  const handleHideRows = () => {
    setShowAllRows(false);
    setShowHideButton(false);
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={tableRef} id="table">
      <div className="px-5">
        <div className={style.tableContainer}>
          <div data-testid="tableHeader" className={style.tableHeader}>
            <FaListUl />
            <span className="mx-2 mb-2 text-center">
              اطلاعات ارز های دیجیتال
            </span>
          </div>
          <div>
            <DataTable
              columns={columns}
              className={style.DataTable}
              data={limitedData}
              highlightOnHover
              responsive
              striped
              noDataComponent="اطلاعاتی موجود نیست"
              direction="rtl"
            />
          </div>
        </div>
        {!showHideButton && (
          <p
            data-testid="tableShow"
            className={style.showAll}
            onClick={handleShowAllRows}
          >
            <span className="mx-3">نمایش همه ارز های دیجیتال</span>
            <FaArrowDownShortWide />
          </p>
        )}
        {showHideButton && (
          <p
            data-testid="tableHide"
            className={style.showAll}
            onClick={handleHideRows}
          >
            <span className="mx-3">مخفی کردن ارز های دیجیتال</span>

            <FaArrowUpWideShort />
          </p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CryptoTable;
