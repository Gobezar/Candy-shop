"use client";
const Error = ({ error }: { error?: Error }) => {
  return <div>OOps!! {error?.message} Произошла ошибка получения данных!</div>;
};

export default Error;
