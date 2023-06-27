import React from "react";
import cl from "./AboutSection.module.scss";
import { aboutSectionImage } from "../consts/aboutSectionImage";

const AboutSection = () => {
  return (
    <div id="aboutSection" className={cl.aboutSection_wrapper}>
      <div className={cl.left}>
        <img src={aboutSectionImage} alt="about section image" />
      </div>
      <div className={cl.right}>
        <h2>О нас</h2>
        <p>
          Candy Shop - это молодая онлайн-кондитерская, изготавливающая торты и
          пирожные на заказ. В наличии имеется более 10 видов тортов, пирожные,
          панкейки, пироги, а также сэндвичи собственного производства. Мы
          исследуем кухни разных стран в поисках оригинальных сладостей для
          Вашего стола.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
