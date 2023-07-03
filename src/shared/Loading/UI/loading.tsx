import cl from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={cl.loader}>
      Запекаем бисквиты...Взбиваем сливки...Плавим шоколад...
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
