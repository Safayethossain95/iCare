import React from 'react'
import style from './Heading.module.scss'
const Heading = ({text,textalign,padding}) => {
  return (
    <>
        <div style={{textAlign:textalign,padding:padding}} className={style.headingmain}>
        <h2>{text}</h2>
        </div>
    </>
  )
}

export default Heading