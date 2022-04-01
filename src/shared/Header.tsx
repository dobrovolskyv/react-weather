import Select from "react-select";
import GlobalSvgSelector from "../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../context/ThemeContext";
import { useTheme } from "../hooks/UseTheme";

import s from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    { value: "city-1", label: "Париж" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
      marginLeft: "20px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <div className={s.selected}>
          <Select defaultValue={options[0]} styles={colorStyles} options={options} />
        </div>
      </div>
    </header>
  );
};

export default Header;
