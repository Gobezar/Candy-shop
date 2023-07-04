import cl from "./loading.module.scss";
import cn from "classnames";

interface ILoading {
  className?: string;
}

const Loading: React.FC<ILoading> = ({ className }) => {
  return (
    <div className={cn(cl.loader, className === "main" ? cl.mainLoader : "")}>
      <p>Запекаем бисквиты...Взбиваем сливки...Плавим шоколад...</p>
      <figure>
        <div className={cl.white}></div>
        <div className={cl.dot}></div>
        <div className={cl.dot}></div>
        <div className={cl.dot}></div>
        <div className={cl.dot}></div>
      </figure>
    </div>
  );
};

export default Loading;
