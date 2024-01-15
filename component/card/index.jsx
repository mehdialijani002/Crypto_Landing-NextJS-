import React, { useState } from "react";
import { FaInfo } from "react-icons/fa";
import style from "../../styles/styles.module.css";
import { FaChartLine } from "react-icons/fa";
import imgUrl1 from "../../asset/images/coin4.png";
import imgUrl2 from "../../asset/images/coin5.png";
import imgUrl3 from "../../asset/images/coin2.png";
import { Card, Button } from "react-bootstrap";
import Image from "next/image";
const CardComponent = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleReadMore = (cardIndex) => {
    setExpandedCard((prevExpandedCard) =>
      prevExpandedCard === cardIndex ? null : cardIndex
    );
  };

  const cardData = [
    {
      title: "Card 1",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      imgUrl: imgUrl2,
    },
    {
      title: "Card 2",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      imgUrl: imgUrl1,
    },
    {
      title: "Card 3",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      imgUrl: imgUrl3,
    },
  ];

  return (
    <div className={style.cardContainer}>
      <h1 className="text-center mb-4">
        <FaChartLine />
        <span className="mx-2">ارز های پر فروش</span>
      </h1>
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4" key={index}>
            <Card>
              <div className="d-flex justify-content-center mt-2">
                <Image src={imgUrl3} width={100} />
              </div>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {expandedCard === index
                    ? card.content
                    : `${card.content.slice(0, 50)}...`}
                </Card.Text>
                <Button variant="warning" onClick={() => handleReadMore(index)}>
                  <FaInfo />
                  {expandedCard === index ? "نمایش کمتر" : "اطلاعات بیشتر"}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
