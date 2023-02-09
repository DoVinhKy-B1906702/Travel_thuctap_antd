import React from 'react'
import classNames from 'classnames/bind'
import styles from './Notify.module.scss';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';


const cx = classNames.bind(styles);

const Notify = ({type, text, display}) => {
  return (
    
        display ? (
            <div className={cx('notify')}>
                <div className={type ? cx('success') : cx('fail') }>
                    {text} !!! {type ? <FontAwesomeIcon icon={faCheckCircle} /> : 'no'}
                </div>
            </div>
        ) : null
    
    
   
  )
}

export default Notify