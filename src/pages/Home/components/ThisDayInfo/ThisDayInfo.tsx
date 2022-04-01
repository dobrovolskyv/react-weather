import React from 'react';
import cloud from "../../../../assets/images/Cloud-image.png"
import ThisDayItem from "./ThisDayItem"

import s from "./ThisDayInfo.module.scss";

type Props = {}

export interface Item {
  icon_id: string;
      name: string;
      value: string;
}

const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20 градусов - ощущается как 17'
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба- нормально'
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков'
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запод- легкий ветер'
    },
  ]
  return (
    <div className={s.this__day_info}>
      <div className={s.this__Day_info_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={ item.icon_id} item={item} />
        ))
      }</div>
      <img className={ s.cloud__img} src={cloud} alt="облако" />
    </div>
  )
}

export default ThisDayInfo