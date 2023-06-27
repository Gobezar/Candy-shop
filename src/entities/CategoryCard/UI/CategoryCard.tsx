import React from "react";
// import {cakes, bigCakes, pancakes, pies, sandwiches} from '../consts/imagesList'
import cl from "./CategoryCard.module.scss";
import Button from "@/shared/Button/UI/Button";

interface CategoryCardProps {
  image: string;
  text: string;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ image, text }) => {
  return (
    <div className={cl.CategoryCard}>
      <img src={image} alt={image} className={cl.image} />
      <div className={cl.buttonBlock}>
        <Button>{text}</Button>
      </div>
    </div>
  );
};

export default CategoryCard;
