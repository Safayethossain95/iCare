import React from 'react'
import style from './LocationCard.module.scss'
const LocationCard = ({imgurl,text}) => {
  return (
    <>
        <div className={style.locationcardmain}>
            <div className={style.overlay}>
                <p>{text}</p>
            </div>
           <img src={imgurl} alt=""/>
        </div>
    </>
  )
}

export default LocationCard