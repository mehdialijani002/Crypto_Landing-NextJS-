import { useState } from "react";
import Image from "next/image";
import Pic from "../../asset/images/logo.gif";
import { FaDiceD20 } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "../../styles/styles.module.css";

function Info() {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.infoContainer}>
      <div>
        <h1 data-testid="infoHeader" className={styles.infoHeader}>
          <FaDiceD20 />
          <span className="mx-3">نام اشنا در بازار</span>
        </h1>
        <p data-testid="infoText" className={styles.infoText}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طجوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
        </p>
        <p
          data-testid="infoBtn"
          className={`btn btn-warning ${styles.infoBtn}`}
          onClick={handleModalShow}
        >
          <span id="table">اطلاعات بیشتر</span>
          <FaArrowLeftLong />
        </p>
      </div>

      <Image
        data-testid="infoLogo"
        className={styles.infoImage}
        src={Pic}
        alt="Logo"
      />

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است...
          </p>

          <Image
            data-testid="infoModalText"
            src={Pic}
            alt="More Info"
            width={100}
          />
        </Modal.Body>
        <Modal.Footer>
          <p
            data-testid="infoModalBtn"
            className="btn btn-outline-danger"
            onClick={handleModalClose}
          >
            بستن
          </p>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Info;
