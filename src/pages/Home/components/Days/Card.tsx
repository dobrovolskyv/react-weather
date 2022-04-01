import React from 'react';
import IndicatorSvgSelector from '../../../../assets/icons/indicators/IndicatorSvgSelector';
import { Day } from './Days';
import s from './Days.module.scss'

interface Props  {
 day: Day
}


const Card = ({ day }: Props) => {
    const {
        days,
        day_info,
        icon_id,
        temp_day,
        temp_night,
        info
    } = day
  return (
      <div className={s.card}>
          <div className={s.day}>{ days}</div>
          <div className={s.day_info}>{day_info}</div>
          <div className={s.img}>
              <IndicatorSvgSelector id={ icon_id }/>
          </div>
          <div className={s.temp__day}>{temp_day}</div>
          <div className={s.temp__night}>{temp_day}</div>
          <div className={s.info}>{info}</div>
    </div>
  )
}

export default Card