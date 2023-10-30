import React from 'react'
import style from './SmFeatureSingle.module.scss'
const SmFeatureSingle = ({imgurl,number,text}) => {
  return (
    <>
        <div className={style.smfeaturessingle}>
            <img src={imgurl} />

            <div className='text-start'>
                <p className={style.mynumber}>{number}+</p>
                <p className={style.mytext}>{text}</p>
            </div>
        </div>
    </>
  )
}

export default SmFeatureSingle