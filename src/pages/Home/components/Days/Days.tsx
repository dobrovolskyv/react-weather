import React from "react";
import s from "./Days.module.scss";
import Card from "./Card";
import Tabs from "./Tabs";

type Props = {};

export interface Day {
  days: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

const Days = (props: Props) => {
  const days: Day[] = [
    {
      days: "Сегодня",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days: "Завтра",
      day_info: "29 авг",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days: "Сегодня",
      day_info: "28 авг",
      icon_id: "small rain sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days: "Сегодня",
      day_info: "28 авг",
      icon_id: "small rain sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days: "Сегодня",
      day_info: "28 авг",
      icon_id: "small rain sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days: "Сегодня",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days: "Сегодня",
      day_info: "28 авг",
      icon_id: "small rain sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
  ];
  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => (
          <Card day={day} key={day.days} />
        ))}
      </div>
    </>
  );
};

export default Days;
