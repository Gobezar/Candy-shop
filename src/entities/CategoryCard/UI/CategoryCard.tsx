"use client";
import React from "react";
import cl from "./CategoryCard.module.scss";
import Button from "@/shared/Button/UI/Button";
import useCategoriesStore from "@/widgets/CategoriesList/model/useCategoriesStore";
import Image from "next/image";

interface CategoryCardProps {
  image: string;
  text: string;
  id: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, text, id }) => {
  const { setCategoryId } = useCategoriesStore((state) => state);

  return (
    <div className={cl.CategoryCard_wrapper}>
      <Image
        src={image}
        alt={image}
        className={cl.imageCard}
        width={100}
        height={100}
      />
      <div className={cl.buttonBlock}>
        <Button
          onClick={() => setCategoryId(+id)}
          link={"/catalog"}
          theme={"secondary"}
        >
          {text}
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
