import React from 'react'
import style from './Heading.module.scss'
const Heading = ({text,textalign,padding,w}) => {
  return (
    <>
        
        <div  data-aos="fade-in" data-aos-duration="400" data-aos-delay="200" style={{textAlign:textalign,padding:padding,width:w}} className={style.headingmain}>
        <h2>{text}</h2>
        </div>

        
    </>
  )
}

export default Heading