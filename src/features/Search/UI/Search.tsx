"use client";
import React, { ChangeEvent } from "react";
import useSearchStore from "@/features/Search/model/useSearchStore";

import cl from "./Search.module.scss";

interface SearchProps {
  searchText?: string;
  setSearchText?: (text: string) => void;
}

const Search: React.FC<SearchProps> = () => {
  const { searchText, setSearchText } = useSearchStore((state) => state);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.currentTarget.value);
  };

  return (
    <div>
      <input
        className={cl.search_input}
        value={searchText}
        onChange={onChange}
        placeholder="Введите ключевые слова для поиска..."
      />
    </div>
  );
};

export default Search;
