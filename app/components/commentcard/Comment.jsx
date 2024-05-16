import Image from 'next/image'
import style from './comment.module.css'
import Avatar from '../../../public/avater2.jpg'
import React from 'react'

export default function Comment() {
  return (
    <div className={style.container}>
        <div className={style.card}>
            <div className={style.containerImage}>
                <Image
                src={Avatar}
                />
            </div>
            <h1 className={style.name}>
                johan doe
            </h1>
            <h2 className={style.title}>
                Selling Agents
            </h2>
            <p className={style.p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus cupiditate quis reprehenderit perferendis, doloremque omnis hic blanditiis ut, eaque eligendi dolorem fugiat sequi accusamus perspiciatis dolor optio repudiandae officia.
            </p>
        </div>
    </div>
  )
}
