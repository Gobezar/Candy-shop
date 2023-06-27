import React from "react";
import Link from "next/link";
import cn from "classnames";
import css from "./Button.module.scss";

type ButtonTheme = "primary" | "secondary";

type Props = {
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  theme?: ButtonTheme;
  size?: "m" | "s";
  type?: "submit";
  disabled?: boolean;
};

function Button({
  link,
  onClick,
  children,
  size = "m",
  theme = "primary",
  disabled,
  type,
}: Props) {
  return (
    <>
      <Link href={`${link}`}>
        <button
          onClick={onClick}
          type={type}
          disabled={disabled}
          className={cn(
            css.root,
            css[`root_size_${size}`],
            css[`root_theme_${theme}`],
            disabled && css.root_disabled
          )}
        >
          {children}
        </button>
      </Link>
    </>
  );
}

export default Button;
