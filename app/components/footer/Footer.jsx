import Image from 'next/image'
import React from 'react'
import style from './footer.module.css'
import Logo from '../../../public/logo.png'
export default function Footer() {
  return (
    <div className={style.footer}>
        <div className={style.image}>
        <Image
        src={Logo}
        style={{backgroundColor:'white',
        padding:'10px'

        }}
        />
        </div>
        <div className={style.copy}>
            the project is created by Raaed Sayad 2024
        </div>

    </div>
  )
}
