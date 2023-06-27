import { Metadata } from "next";
import Navbar from "@/widgets/Navbar/UI/Navbar";
import Search from "@/features/Search/UI/Search";
import Sort from "@/features/Sort/UI/Sort";
import CategoriesList from "@/widgets/CategoriesList/UI/CategoriesList";
import ProductsList from "@/widgets/ProductsList/UI/ProductsList";

export const metadata: Metadata = {
  title: "Catalog | Online Store",
};

const Catalog = () => {
  return (
    <div>
      <Navbar>
        <Search />
      </Navbar>
      <CategoriesList />
      <Sort />
      <ProductsList />
    </div>
  );
};

export default Catalog;
