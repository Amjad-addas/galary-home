import React from 'react'
import style  from './title.module.css'
function Title(props) {
  if(props.z=='white'){
    return(
      <div className={style.title}>
          <h1 style={{color:'white'}} className={style.mainText}> {props.x} <span className={style.subText}>{props.y}</span> </h1>

      </div>
    )

  }
  return (
    <div className={style.title}>
          <h1  className={style.mainText}> {props.x} <span className={style.subText}>{props.y}</span> </h1>

    </div>
  )
}

export default Title