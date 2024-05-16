import style from './card.module.css'
import House from '../../../public/house1.jpg'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Card() {
  return (
    <Link href={''} className={style.CardMain}>
        <Image
        className={style.imgCard}

        src={House}
        />
        <div className={style.content}>
            <span className={style.price}>price 3000$</span>
            <span className={style.price}>Aleepo Hamdania</span>
        </div>
    </Link>
  )
}

export default Card