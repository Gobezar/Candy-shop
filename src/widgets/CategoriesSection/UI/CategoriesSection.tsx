import React, { memo } from "react";
import {
  cakes,
  bigCakes,
  pancakes,
  pies,
  sandwiches,
} from "../consts/imagesList";
import CategoryCard from "@/entities/CategoryCard/UI/CategoryCard";
import cl from "./CategoriesSection.module.scss";

const CategoriesSection = () => {
  return (
    <section className={cl.CategoriesSection}>
      <div className={cl.Container1}>
        <CategoryCard id={"1"} image={cakes} text={"Пирожные"} />
      </div>
      <div className={cl.Container2}>
        <h2>Меню</h2>
      </div>
      <div className={cl.Container3}>
        <CategoryCard id={"2"} image={bigCakes} text={"Торты"} />
      </div>
      <div className={cl.Container4}>
        <CategoryCard id={"3"} image={pancakes} text={"Панкейки"} />
      </div>
      <div className={cl.Container5}>
        <CategoryCard id={"4"} image={pies} text={"Пироги"} />
      </div>
      <div className={cl.Container6}>
        <CategoryCard id={"5"} image={sandwiches} text={"Сэндвичи"} />
      </div>
    </section>
  );
};

export default CategoriesSection;
