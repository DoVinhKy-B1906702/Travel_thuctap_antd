// import { Row, Col } from 'antd'
import React from 'react'

import classNames from 'classnames/bind'
import styles from './PrivatePage.module.scss';

import PostListPrivate from '../../components/Post/PostListPrivate/PostListPrivate';
import PostFormList from '../../components/Post/PostFormList/PostFormList';
import { Typography } from 'antd';


const cx = classNames.bind(styles);
const PrivatePage = () => {
  
 

 
  return (
    
        <div className={cx('layout-private')}>
            <div className={cx('title-private')}>
              <Typography.Title className={cx('title')}>Trang cá nhân</Typography.Title>
            </div>
            
            <div className={cx('post-form')}>
              <PostFormList />
            </div>
            
            <PostListPrivate />
        </div>
       
  )
}

export default PrivatePage