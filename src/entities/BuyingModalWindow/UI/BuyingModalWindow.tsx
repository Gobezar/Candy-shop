import React from "react";
import cn from "classnames";
import cl from "./BuyingModalWindow.module.scss";

interface IBuyingModalWindow {
  visible: boolean;
}

const BuyingModalWindow: React.FC<IBuyingModalWindow> = ({ visible }) => {
  return (
    <div>
      <div className={cn(cl.modal, visible && cl.visible)}>
        <div className={cl.modalContent}>
          <p>Поздравляем с совершением покупки!</p>
          <p>Вы сможете продолжить через пару секунд...</p>
        </div>
      </div>
    </div>
  );
};

export default BuyingModalWindow;
