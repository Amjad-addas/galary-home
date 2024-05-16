import React from 'react'
import Logo from '../../../public/logo.png'
import Image from 'next/image'
import style from './header.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Header() {
  return (
    <div className={style.header}>
        <div className={style.imageHeader}>
            <Image
            src={Logo}
            />
        </div>
        <div  className={style.contact}>
        <div className={style.subcontact} >
            <span className={style.iconPhone}>
                <LocalPhoneIcon/>
            </span>
            <div>
                    <ul>
                        <li>
                            0988599231
                        </li>
                        <li>0946446698</li>

                    </ul>
            </div>
        </div>
        <div className={style.subcontact}>
            <span>
                    <LocationOnIcon/>
            </span>
            <div>
                <ul>
                    <li>
                        0988599231
                    </li>
                    <li>0946446698</li>

                </ul>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Header