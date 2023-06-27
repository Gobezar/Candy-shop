"use client";
import React from "react";
import useProductsStore from "@/app/store/useProductsStore";
import useCartStore from "@/features/Cart/model/useCartStore";

import cl from "./ProductCharacteristics.module.scss";
import Button from "@/shared/Button/UI/Button";

interface ProductCharacteristics {
  id: string;
}

const ProductCharacteristics: React.FC<ProductCharacteristics> = ({ id }) => {
  const products = useProductsStore((state) => state.products);
  const selectedProduct = products.filter((product) => product.id == +id);

  const { addToFavoriteList } = useProductsStore((state) => state);
  const { addItem } = useCartStore((state) => state);

  return (
    <>
      {selectedProduct.map((prod) => (
        <div key={prod.id} className={cl.ProductCharacteristics_wrapper}>
          <div className={cl.left}>
            <img className={cl.image} src={prod.image} alt="product image" />
          </div>
          <div className={cl.right}>
            <h2>{prod.title}</h2>
            <div className={cl.mainInfo}>
              <div>{prod.weight} гр.</div>
              <div>{prod.price_second} ₽</div>
              <div>
                <p>- 1 +</p>
              </div>
              <div>
                <Button>В корзину</Button>
              </div>
            </div>
            <div className={cl.property}>
              <p>На 100 гр. продукта: </p>
            </div>
            <div className={cl.secondaryInfo}>
              <div className={cl.property}>kkal: {prod.kilocalories}</div>
              <div className={cl.property}>Жиры: {prod.fat}</div>
              <div className={cl.property}>Белки: {prod.proteins}</div>
              <div className={cl.property}>Углеводы: {prod.carbohydrates}</div>
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
      <button onClick={() => addToFavoriteList(selectedProduct[0])}>
        Добавить в избранное
      </button>
      <button onClick={() => addItem(selectedProduct[0])}>
        Добавить в корзину
      </button>
    </>
  );
};

export default ProductCharacteristics;
