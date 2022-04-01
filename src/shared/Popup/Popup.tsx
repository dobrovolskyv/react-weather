import React from "react";
import Select from "react-select";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";

import s from "./Popup.module.scss";

type Props = {};

const Popup = ({}: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20 градусов - ощущается как 17",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба- нормально",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запод- легкий ветер",
    },
  ];
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>12&deg;</div>
          <div className={s.day__name}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day__time}>
            Время <span>21:54</span>
          </div>
          <div className={s.day__city}>
            Город: <span>Санкт-Петербург</span>
          </div>
        </div>
        <div className={s.this__Day_info_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
