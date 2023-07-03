import React from "react";
import cl from "./ProductLoader.module.scss";
import Loading from "@/shared/Loading/UI/loading";

const ProductLoader = () => {
  return (
    <>
      <div className={cl.productLoader_wrapper}>
        <div className={cl.productLoader_left}>
          <div className={cl.productLoader_loading}>
            <Loading />
          </div>
        </div>
        <div className={cl.productLoader_right}>
          <div className={cl.productLoader_right_1}>
            <h2>Наименование...</h2>
          </div>
          <div className={cl.productLoader_right_2}>
            <h2>Характеристики...</h2>
          </div>
          <div className={cl.productLoader_right_3}>
            <h2>Описание, состав...</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLoader;
