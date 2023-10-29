import React from 'react'
import style from './Header.module.scss'
const Header = () => {
  return (
    <>
        <div className={style.header}>
            <p>Call to get in touch <a href="tel:+880123456789">+880123456789</a></p>
        </div>
    </>
  )
}

export default Header