"use client";
import style from "../styles/styles.module.css";
import Header from "../component/header/index";
import Navbar from "../component/navbar/index";
import Slider from "../component/slider/index";
import Info from "../component/info/index";
import Card from "../component/card/index";
import SliderDark from "../component/slider-dark/index";
import Chart from "../component/chart/index";
import Table from "../component/table/index";
import Footer from "../component/footer/index";
import UpButton from "../component/upButton";
function HomePage() {
  return (
    <div className={style.container}>
      <div>
        <Navbar />
      </div>
      <div className="mb-5">
        <Header />
        <Slider />
      </div>
      <div className=" mb-5">
        <Info />
      </div>
      <div className={style.tablePage}>
        <Table />
        <SliderDark />
      </div>
      <div className="mt-5">
        <Card />
      </div>
      <div>
        <Footer />
      </div>
      <UpButton />
    </div>
  );
}

export default HomePage;
