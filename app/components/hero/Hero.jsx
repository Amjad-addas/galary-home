'use client'
import Image from 'next/image'
import React from 'react'
import Heero from '../../../public/hero.jpg'
import style from './hero.module.css'
export default function Hero() {


  return (
    <div>
        <div className={style.imgContainer}>
        <Image
        src={Heero}
        />
        <div className={style.title}>
            Find Your Dream <span id='hero'></span>
        </div>
        </div>
    </div>
  )
}
