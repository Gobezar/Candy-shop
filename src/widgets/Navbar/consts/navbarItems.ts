import { InavbarItems } from "../model/types";

// const cartIcon = "https://i.ibb.co/VJX2H0Q/icons8-cart-24.png";

export const navbarItems: InavbarItems[] = [
  {
    id: 0,
    name: "Главная страница",
    address: "/",
  },
  {
    id: 1,
    name: "Контакты",
    address: "#contactsSection",
  },
  {
    id: 2,
    name: "О нас",
    address: "#aboutSection",
  },
  {
    id: 3,
    name: `Корзина `,
    address: "/cart",
  },
];
