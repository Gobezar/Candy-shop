import React, { memo } from "react";
import Button from "@/shared/Button/UI/Button";
import Image from "next/image";
import cl from "./Header.module.scss";
import HeaderImage from "../../../../public/images/HeaderImage.jpg";

const Header = () => {
  return (
    <div className={cl.header_wrapper}>
      <div className={cl.left}>
        <h1>Свежая выпечка у вас дома</h1>
        <p>
          Вы когда-нибудь пробовали нашу продукцию? Невероятно вкусно, и никаких
          проблем с фигурой.
        </p>
        <div className={cl.button}>
          <Button link={"/catalog"}>В каталог</Button>
        </div>
      </div>
      <div className={cl.right}>
        <Image className={cl.image} src={HeaderImage} alt="header image" />
      </div>
    </div>
  );
};

export default Header;
