import { useEffect } from "react";
import style from "../../styles/styles.module.css";
import { FaBitcoin, FaUser } from "react-icons/fa";
import Image from "next/image";

import Link from "next/link";
import headerImg from "../../asset/images/header.png";

function HomePage() {
  return (
    <div>
      <div className={`${style.header} wow fadeIn`}>
        <div className={style.headerP}>
          <h2
            data-testid="headerTitle"
            className={`${style.headerText} wow fadeInUp`}
          >
            وبسایت ارز دیجیتال با بیش از 500 ارز دیجیتال
          </h2>
          <p data-testid="headerText" className={style.headerpara}>
            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
            است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
          </p>
          <div className={style.headerbtncontainer}>
            <Link href={"#table"}>
              <button
                data-testid="coinBtn"
                className={`${style.btnHeader} btn btn-warning wow fadeInUp`}
              >
                <FaBitcoin />
                <span className="mx-2 "> ارز های دیجیتال</span>
              </button>
            </Link>
            <Link className="mx-5" href={"/login"}>
              <button
                data-testid="loginBtn"
                className={`${style.btnHeader} btn btn-outline-warning wow fadeInUp`}
              >
                <FaUser />
                <span className="mx-2">ثبت نام</span>
              </button>
            </Link>
          </div>
        </div>
        <div data-testid="headerImage" className={style.headerImgShadow}>
          <Image
            className={`${style.headerImg} wow fadeInUp`}
            src={headerImg}
            alt="About"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
