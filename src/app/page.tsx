"use client";
import { useEffect } from "react";
import useProductsStore from "@/app/store/useProductsStore";
import CategoriesList from "@/widgets/CategoriesList/UI/CategoriesList";
import Navbar from "@/widgets/Navbar/UI/Navbar";
import Header from "@/widgets/Header/UI/Header";
import SwiperSlider from "../widgets/SwiperSlider/UI/SwiperSlider";
import CategoryFeed from "@/widgets/CategoryFeed/UI/CategoryFeed";
import CategoriesSection from "@/widgets/CategoriesSection/UI/CategoriesSection";
import AboutSection from "@/widgets/AboutSection/UI/AboutSection";
import ContactsSection from "@/widgets/ContactsSection/UI/ContactsSection";

export default function Home() {
  const fetchProducts = useProductsStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts({});
  }, []);

  return (
    <>
      <Navbar />
      <CategoriesList />
      <Header />
      <CategoryFeed />
      <SwiperSlider novelties={true}>Новинки</SwiperSlider>
      <CategoriesSection />
      <SwiperSlider catalog={true}>Каталог</SwiperSlider>
      <AboutSection />
      <ContactsSection />
    </>
  );
}
