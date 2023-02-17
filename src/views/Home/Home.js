import React, { useState, useContext } from 'react'
import {Col, Row} from 'antd';
import classNames from 'classnames/bind'
import styles from './Home.module.scss';

import camping1 from '../../assets/camping1.jpg';
import camping2 from '../../assets/camping2.jpg';

import PostList from '../../components/Post/PostList/PostList';
import { PostContext } from '../../context/PostContext';
import MyCarousel from '../../components/Carousel/MyCarousel';

const cx = classNames.bind(styles);
const Home = () => {
  const { postState: {posts}} = useContext(PostContext);
  const [limit, setLimit] = useState(2);
  

  const handleIncreaseLimit = () => {
    if (limit === posts.length) {
       setLimit(limit+5);
    } else {
      setLimit(posts.length);
      console.log('da render du')
    }
   
  }

  
  return (
    <div className={cx('layout-home')}>
      <MyCarousel list={[camping1, camping2]}  />
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