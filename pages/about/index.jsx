"use client";
import Image from "next/image";
import aboutImg from "../../asset/images/about.jpg";
import style from "../../styles/styles.module.css";
import Navbar from "../../component/navbar/index";
import Footer from "../../component/footer/index";
import React, { useEffect } from "react";
export default function About() {
  return (
    <div className="wow fadeIn">
      <Navbar />
      <div className={style.aboutContainer}>
        <div className="wow fadeInUp">
          <div className={style.aboutText}>
            <p>
              طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
              شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            </p>
          </div>
        </div>
        <div className={style.aboutImageContainer}>
          <Image src={aboutImg} alt="About" className={style.aboutImg} />
        </div>
      </div>
      {/*
      <div className={style.aboutContainersec}>
        <Image src={aboutImage} alt="About" className={style.aboutImg2} />
        <div className={style.aboutText}>
          <p>
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
          </p>
        </div>
      </div>
  */}
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
