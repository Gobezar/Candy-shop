import Link from "next/link";
import { footerItems } from "../consts/footerItems";
import cl from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={cl.footer_wrapper}>
      <div>
        <h3>Candy Shop</h3>
      </div>
      <div>
        <p>
          Режим работы
          <br />
          Ежедневно
          <br />
          10:00-20:00
        </p>
      </div>
      <div>
        <ul>
          {footerItems.map((item) => (
            <li key={item.id}>
              <Link href={item.address}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>8(8452) 777-777</h3>
      </div>
    </footer>
  );
};

export default Footer;
