import { useEffect } from "react";
import styles from "../../styles/styles.module.css";
import Coin1 from "../../asset/images/coin1.png";
import Coin2 from "../../asset/images/coin2.png";
import Coin3 from "../../asset/images/coin3.png";
import Coin4 from "../../asset/images/coin4.png";
import Coin5 from "../../asset/images/coin5.png";
import Coin6 from "../../asset/images/coin6.png";
import Image from "next/image";
import Link from "next/link";
const images = [
  Coin1,
  Coin2,
  Coin3,
  Coin4,
  Coin5,
  Coin6,
  Coin1,
  Coin2,
  Coin3,
  Coin4,
  Coin5,
  Coin6,
  Coin1,
  Coin2,
  Coin3,
  Coin4,
  Coin5,
  Coin6,
  Coin5,
  Coin6,
  Coin1,
  Coin2,
  Coin3,
  Coin4,
  Coin5,
  Coin6,
  Coin5,
  Coin6,
  Coin1,
  Coin2,
  Coin3,
  Coin4,
  Coin5,
  Coin6,
  Coin5,
  Coin6,
  Coin1,
  Coin2,
  Coin3,
  Coin4,
  Coin5,
  Coin6,
  Coin5,
  Coin3,
  Coin4,
  Coin5,
  Coin6,
  Coin5,
];

const Slideshow = () => {
  useEffect(() => {
    const slider = document.querySelector(`.${styles.slider}`);
    const sliderItems = document.querySelectorAll(`.${styles.slide}`);
    const sliderItemCount = sliderItems.length;

    let currentIndex = 0;

    setInterval(() => {
      slider.style.transform = `translateX(-${currentIndex * 150}px)`;
      currentIndex = (currentIndex + 1) % sliderItemCount;
    }, 3000);
  }, []);

  return (
    <div className={styles.slideshowDark}>
      <div className={styles.sliderDark}>
        {images.map((image, index) => (
          <Link href={"#table"}>
            <Image
              key={index}
              src={image}
              alt={`Coin ${index + 1}`}
              className={styles.slideDark}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
