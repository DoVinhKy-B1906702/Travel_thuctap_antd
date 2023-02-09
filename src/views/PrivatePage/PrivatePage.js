// import { Row, Col } from 'antd'
import React from 'react'

import classNames from 'classnames/bind'
import styles from './PrivatePage.module.scss';
import PostForm from '../../components/Post/PostForm/PostForm';

const cx = classNames.bind(styles);
const PrivatePage = () => {
  return (
    
        <div className={cx('layout-private')}>
            <PostForm />
            
        </div>
       
  )
}

export default PrivatePage