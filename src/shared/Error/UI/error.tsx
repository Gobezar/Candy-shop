import cl from "./error.module.scss";

const Error = ({ error }: { error?: Error }) => {
  return (
    <div className={cl.error_wrapper}>
      <p>
        OOps!! {error?.message} Произошла ошибка получения данных. <br />
        Попробуйте перезагрузить страницу.
      </p>
    </div>
  );
};

export default Error;
