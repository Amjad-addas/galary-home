import CardArea from '@/app/components/cardarea/CardArea'
import React from 'react'
import style from './area.module.css'
function Area() {
  return (
    <div className={style.area}>
        <CardArea/>
        <CardArea/>
        <CardArea/>
        <CardArea/>
    
    </div>
  )
}

export default Area