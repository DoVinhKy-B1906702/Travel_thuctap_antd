import React from 'react'
import classNames from 'classnames/bind'
import styles from './ButtonAnimate.module.scss';



const cx = classNames.bind(styles);
const ButtonAnimate = ({text}) => {
  return (
    <div className={cx('body')}>
         <button className={`${cx('btn')} ${cx('btn-animation')}`}>
            <span></span>
            <span></span>
            <span></span>
            <span>{text}</span>
        </button>
    </div>
   
  )
}

export default ButtonAnimate