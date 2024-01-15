import Link from "next/link";
import Image from "next/image";
import image from "../asset/images/404.jpg";
import style from "../styles/styles.module.css";
import { FaHome } from "react-icons/fa";
export default function NotFound() {
  return (
    <div className={style.notFoundContainer}>
      <div>
        <h2>صفحه مورد نظر پیدا نشد!! </h2>

        <Link className="btn btn-primary mt-3" href="/">
          <FaHome />
          <span className="mx-1">بازگشت به خانه</span>
        </Link>
      </div>
      <Image src={image} alt="About" width={600} height={400} />
    </div>
  );
}
