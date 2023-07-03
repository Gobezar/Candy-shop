import React from "react";
import cl from "./ContactsSection.module.scss";
import Image from "next/image";
import contactsSectionImage from "../../../../public/images/ContactsSectionImage.jpg";

const ContactsSection = () => {
  return (
    <section id="contactsSection" className={cl.contactsSection_wrapper}>
      <div className={cl.left}>
        <h2>Контакты</h2>
        <p>
          Телефон: 8(8452) 777-777
          <br />
          e-mail: candyshop@gmail.com <br />
          instagram: candyshop64
          <br />
          Юридический адрес: Россия, Саратовская обл.,
          <br /> г. Саратов, ул. Сладкая Д.В., д. 64
        </p>
      </div>
      <div className={cl.right}>
        <Image
          src={contactsSectionImage}
          alt="contacts section image"
          className={cl.image}
        />
      </div>
    </section>
  );
};
export default ContactsSection;
