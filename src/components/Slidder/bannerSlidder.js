import { useEffect, useState } from "react";
import "./bannerSlidder.css";
import BtnSlider from "./BtnSlidder";
import offer2 from "../../images/offers/offer2.jpg";
import offer1 from "../../images/offers/offer1.jpg";
import offer3 from "../../images/offers/offer3.jpg";
import offer4 from "../../images/offers/offer4.jpg";
import offer5 from "../../images/offers/offer5.jpg";

function Banners() {
  const [banners, setBanners] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== banners.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === banners.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(banners.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    setBanners([
      {
        bannerImageUrl: `${offer1}`,
        bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
        isActive: true,
        order: 1,
        id: "5b6c38156cb7d770b7010ccc",
      },
      {
        bannerImageUrl: `${offer2}`,
        bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
        isActive: true,
        order: 2,
        id: "5b6c38336cb7d770b7010ccd",
      },
      {
        bannerImageUrl: `${offer3}`,
        bannerImageAlt: "Independence Day Deal - Rs99 off on domex",
        isActive: true,
        order: 3,
        id: "5b6c38456cb7d770b7010cce",
      },
      {
        bannerImageUrl: `${offer4}`,
        bannerImageAlt: "Independence Day Deal - Rs99 off on bodywash",
        isActive: true,
        order: 4,
        id: "5b6c38576cb7d770b7010ccf",
      },
      {
        bannerImageUrl: `${offer5}`,
        bannerImageAlt: "Independence Day Deal - Rs70 off on tea",
        isActive: true,
        order: 5,
        id: "5b6c386b6cb7d770b7010cd0",
      },
    ]);
  }, []);
  return (
    <div className="container-slider">
      {banners.map((banner, index) => {
        return (
          <div
            key={banner.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={banner.bannerImageUrl} alt="banner-details" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Banners;
