import React from "react";
import cl from "./ContactsSection.module.scss";
import { contactsSectionImage } from "../consts/contactsSectionImage";

const ContactsSection = () => {
  return (
    <div id="contactsSection" className={cl.contactsSection_wrapper}>
      <div className={cl.left}>
        <h2>Контакты</h2>
        <p>
          Телефон: 8(8452) 777-777
          <br />
          e-mail: candyshop@gmail.com <br />
          instagram: candyshop64
          <br />
          Юридический адрес: Россия, Саратовская обл., г. Саратов, ул. Емлютина
          Д.В., д. 64
        </p>
      </div>
      <div className={cl.right}>
        <img src={contactsSectionImage} alt="contacts section image" />
      </div>
    </div>
  );
};

export default ContactsSection;
