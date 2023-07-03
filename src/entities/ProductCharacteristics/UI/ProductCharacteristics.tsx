"use client";
import React from "react";
import useProductsStore from "@/app/store/useProductsStore";
import useCartStore from "@/features/Cart/model/useCartStore";
import Image from "next/image";
import cl from "./ProductCharacteristics.module.scss";
import { StarFilled } from "@ant-design/icons";
import useFavoritesListStore from "@/features/FavoritesList/model/useFavoritesList";
import ProductLoader from "../model/ProductLoader";

interface ProductCharacteristics {
  id: string;
}

const ProductCharacteristics: React.FC<ProductCharacteristics> = ({ id }) => {
  const products = useProductsStore((state) => state.products);
  const selectedProduct = products.filter((product) => product.id == +id);

  const { addToFavoritesList } = useFavoritesListStore((state) => state);
  const { addItem } = useCartStore((state) => state);

  if (selectedProduct.length < 1) {
    return <ProductLoader />;
  }

  return (
    <>
      {selectedProduct.map((prod) => (
        <div key={prod.id} className={cl.ProductCharacteristics_wrapper}>
          <div className={cl.left}>
            <Image
              className={cl.image}
              src={prod.image}
              alt="product image"
              width={100}
              height={100}
            />
          </div>
          <div className={cl.right}>
            <h2>{prod.title}</h2>
            <div className={cl.mainInfo}>
              <div className={cl.mainInfoBlock}>{prod.weight} гр.</div>
              <div className={cl.mainInfoBlock}>{prod.price_second} ₽</div>
              <div className={cl.mainInfoBlock}>
                <button
                  className={cl.addToFavoriteListButton}
                  onClick={() => addToFavoritesList(selectedProduct[0])}
                >
                  <StarFilled />
                </button>
              </div>
              <div className={cl.mainInfoBlock}>
                <button
                  className={cl.addToCartButton}
                  onClick={() => addItem(selectedProduct[0])}
                >
                  Купить
                </button>
              </div>
            </div>
            <div className={cl.secondaryInfoBlockTop}>
              <p>На 100 гр. продукта: </p>
            </div>
            <div className={cl.secondaryInfo}>
              <div className={cl.secondaryInfoBlock}>
                kkal: {prod.kilocalories}
              </div>
              <div className={cl.secondaryInfoBlock}>Жиры: {prod.fat}</div>
              <div className={cl.secondaryInfoBlock}>
                Белки: {prod.proteins}
              </div>
              <div className={cl.secondaryInfoBlock}>
                Углеводы: {prod.carbohydrates}
              </div>
            </div>
            <div className={cl.description}>
              <h3>Описание</h3>
              <p>{prod.description}</p>
            </div>
            <div className={cl.composition}>
              <h3>Состав:</h3>
              <p>{prod.composition}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCharacteristics;
