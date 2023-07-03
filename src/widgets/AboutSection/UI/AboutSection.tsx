import React, { memo } from "react";
import cl from "./AboutSection.module.scss";
import Image from "next/image";
import aboutSectionImage from "../../../../public/images/AboutSectionImage.jpg";

const AboutSection = () => {
  return (
    <section id="aboutSection" className={cl.aboutSection_wrapper}>
      <div className={cl.left}>
        <Image
          src={aboutSectionImage}
          className={cl.image}
          alt="about section image"
        />
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
    </section>
  );
};

export default AboutSection;
