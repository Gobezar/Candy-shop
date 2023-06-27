import React from "react";
import cl from "./Header.module.scss";
import Button from "@/shared/Button/UI/Button";
import Link from "next/link";

const Header = () => {
  const img = "https://i.ibb.co/jJ7NvK7/59265795853723-5ea0f7725cbe21.jpg";
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
        <img className={cl.image} src={img} alt="header image" />
      </div>
    </div>
  );
};
export default Header;
