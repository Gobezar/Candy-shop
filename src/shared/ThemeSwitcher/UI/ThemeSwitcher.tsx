"use client";
import { useTheme } from "next-themes";
import { Switch } from "antd";
import cl from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else setTheme("light");
  };

  // let themeLogo;
  // if (theme === "light") {
  //   themeLogo = <Switch className={cl.SwitchToggleLight} />;
  // } else if (theme === "dark") {
  //   themeLogo = <Switch defaultChecked className={cl.SwitchToggleDark} />;
  // }

  return (
    <div>
      <span className={cl.toggleThemeButton} onClick={changeTheme}>
        <Switch className={cl.SwitchToggleLight} />
      </span>
    </div>
  );
};

export default ThemeSwitcher;
