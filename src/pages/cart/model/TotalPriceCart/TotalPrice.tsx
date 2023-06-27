'use client'
import React from 'react'
import useCartStore from '@/features/Cart/model/useCartStore';
import cl from './TotalPrice.module.scss'


const TotalPrice = () => {
    const totalPrice= useCartStore((state) => state.totalPrice);

  return (
    <div className={cl.TotalPrice_wrapper}>
        <div><p>Итог:</p></div>
        <div><p>Сумма заказа:</p>{totalPrice} ₽</div>
        <div><button>Купить</button></div>

    </div>
  )
}

export default TotalPrice