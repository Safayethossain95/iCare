import React from 'react'
import style from './CommonButton.module.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
const CommonButton = ({w,h,mt,br,text,click}) => {
  return (
    <>
        <div className={style.viewmorebutton}>
            <button style={{borderRadius:br,height:h,width:w}} onClick={click}>
                {text}

                <AiOutlineArrowRight/>
            </button>
        </div>
    </>
  )
}

export default CommonButton