import React from 'react'
import classNames from 'classnames/bind'
import styles from './IconText.module.scss';


const cx = classNames.bind(styles);
const IconText = ({icon, text, href}) => {
  return (
    <a className={cx('link')} href={href} rel="noreferrer" target='_blank'>
        <span className={cx('link-icon')}>{icon}</span>
        <span className={cx('link-text')}>{text}</span>
    </a>
  )
}

export default IconText