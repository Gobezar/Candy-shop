// import Catalog from "@/pages/catalog/UI/catalog";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Каталог | Candy Shop",
// };
// export default Catalog;

import Navbar from "@/widgets/Navbar/UI/Navbar";
import Search from "@/features/Search/UI/Search";
import Sort from "@/features/Sort/UI/Sort";
import CategoriesList from "@/widgets/CategoriesList/UI/CategoriesList";
import ProductsList from "@/widgets/ProductsList/UI/ProductsList";
import cl from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог | Candy Shop",
};

const Catalog = () => {
  return (
    <div>
      <Navbar>
        <Search />
      </Navbar>
      <CategoriesList />
      <div className={cl.contentPage}>
        <div className={cl.sortBlock}>
          <Sort />
        </div>
        <div className={cl.productListBlock}>
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
