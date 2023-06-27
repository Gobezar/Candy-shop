"use client";
import React, { useRef, useEffect } from "react";
import useSortStore from "../model/useSortStore";
import { sortList } from "../consts/sortList";
import { sortObject } from "../model/useSortStore";

function Sort() {
  const { sort, setSort, open, setOpen } = useSortStore((state) => state);
  const sortRef = useRef<HTMLDivElement>(null);

  function onClickListItem(obj: sortObject) {
    setSort(obj);
    setOpen(false);
  }

  useEffect(() => {
    const clickOutSide = (event: MouseEvent | React.MouseEvent) => {
      const path = (event as any).composedPath().includes(sortRef.current);
      if (!path) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", clickOutSide);
    return () => {
      document.body.removeEventListener("click", clickOutSide);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                onClick={() => onClickListItem(obj)}
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : ""
                }
                key={i}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
