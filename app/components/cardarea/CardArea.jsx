import React from 'react'
import style from './cardarea.module.css'
import HouseBlue from '../../../public/house-blue.png'
import Link from 'next/link'
import { Icon } from '@mui/material'
import Image from 'next/image'
function CardArea() {
  return (
    <Link href={''}>
        <div className={style.cardContent}>
            <div className={style.imageCard}>
                <Image
                src={HouseBlue}
                />
            </div>
            <h2 className={style.subTitle}>Modren Villa</h2>
            <p className={style.pargh}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quia eos assumenda veniam unde pariatur, porro delectus quod, vel</p>
        </div>
    </Link>
  )
}

export default CardArea