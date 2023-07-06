// import ProductPage from "../../../pages/product/UI/product";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Карточка товара | Candy Shop",
// };
// export default ProductPage;

import React from "react";
import Navbar from "@/widgets/Navbar/UI/Navbar";
import CategoriesList from "@/widgets/CategoriesList/UI/CategoriesList";
import ProductCharacteristics from "@/entities/ProductCharacteristics/UI/ProductCharacteristics";
import SwiperSlider from "@/widgets/SwiperSlider/UI/SwiperSlider";
import CategoryFeed from "@/widgets/CategoryFeed/UI/CategoryFeed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Карточка товара | Candy Shop",
};

type ProductPageProps = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params: { id } }: ProductPageProps) {
  return {
    title: "Продукт " + id,
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params: { id } }) => {
  return (
    <div>
      <Navbar />
      <CategoriesList />
      <ProductCharacteristics id={id} />
      <SwiperSlider couples={true}>С этим товаром покупают</SwiperSlider>
      <CategoryFeed />
      <SwiperSlider id={id} similar={true}>
        Похожие товары
      </SwiperSlider>
    </div>
  );
};

export default ProductPage;
