// import { Row, Col } from 'antd'
import React from 'react'

import classNames from 'classnames/bind'
import styles from './PrivatePage.module.scss';

import PostListPrivate from '../../components/Post/PostListPrivate/PostListPrivate';
import PostFormList from '../../components/Post/PostFormList/PostFormList';


const cx = classNames.bind(styles);
const PrivatePage = () => {
  
 

 
  return (
    
        <div className={cx('layout-private')}>
            <PostFormList />
            <PostListPrivate />
        </div>
       
  )
}

export default PrivatePage