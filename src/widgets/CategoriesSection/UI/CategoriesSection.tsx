import React from "react";
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
    <div className={cl.CategoriesSection}>
      <div className={cl.Container1}>
        <CategoryCard image={cakes} text={"Пирожные"} />
      </div>
      <div className={cl.Container2}>
        <h2>Меню</h2>
      </div>
      <div className={cl.Container3}>
        <CategoryCard image={bigCakes} text={"Торты"} />
      </div>
      <div className={cl.Container4}>
        <CategoryCard image={pancakes} text={"Панкейки"} />
      </div>
      <div className={cl.Container5}>
        <CategoryCard image={pies} text={"Пироги"} />
      </div>
      <div className={cl.Container6}>
        <CategoryCard image={sandwiches} text={"Сэндвичи"} />
      </div>
    </div>
  );
};

export default CategoriesSection;
