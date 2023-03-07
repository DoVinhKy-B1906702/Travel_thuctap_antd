import React, { useState, useContext } from 'react'
import {Col, Row, message} from 'antd';
import classNames from 'classnames/bind'
import styles from './Home.module.scss';



import PostList from '../../components/Post/PostList/PostList';
import { PostContext } from '../../context/PostContext';
import PostFormList from '../../components/Post/PostFormList/PostFormList';



const cx = classNames.bind(styles);
const Home = () => {
  const { postState: {posts}} = useContext(PostContext);
  const [limit, setLimit] = useState(4);
  
 

  const handleIncreaseLimit = () => {
    if (limit === posts.length) {
       setLimit(limit+5);
    } else {
      // xử lí khi user click xem thêm và hết bài viết
      message.info('Không còn bài viết nào !!!')
      
    }
   
  }

  
  return (
    <div className={cx('layout-home')}>
      <div className={cx('form-post')}>
        <PostFormList />
      </div>
      
      <PostList limit={limit}  />
      <Row justify='center'>
        <Col xs={8} xl={8} sm={10}>
          <div className={cx('load-more')} onClick={handleIncreaseLimit}>Xem thêm</div>
        </Col>
      </Row>
  
    </div>
    
    
  )
}

export default Home