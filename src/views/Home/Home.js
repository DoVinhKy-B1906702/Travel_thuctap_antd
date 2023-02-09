import React from 'react'
import { Card, Carousel, Col, Row, Image, Typography } from 'antd';
import classNames from 'classnames/bind'
import styles from './Home.module.scss';

import camping1 from '../../assets/camping1.jpg';
import camping2 from '../../assets/camping2.jpg';
import camping3 from '../../assets/camping3.jpg';
import PostList from '../../components/Post/PostList/PostList';


const cx = classNames.bind(styles);
const Home = () => {
  

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <Row justify="center">
        <Col xs={20} xl={8} sm={10}>
          <Typography.Title className={cx('title-theme')}>Theme Camping</Typography.Title>
          <Carousel  afterChange={onChange}>
            <Card className={cx('layout-card')}>
              <Typography.Title className={cx('title-location')}>Sapa</Typography.Title>
              <Image  
                className={cx('layout-image')}
                src="error"
                fallback={camping1}
              />
            </Card>
            <Card className={cx('layout-card')}>
              <Typography.Title className={cx('title-location')}>Russia</Typography.Title>
              <Image  
                className={cx('layout-image')}
                src="error"
                fallback={camping2}
              />
            </Card>
            <Card className={cx('layout-card')}>
              <Typography.Title className={cx('title-location')}>England</Typography.Title>
              <Image  
                className={cx('layout-image')}
                src="error"
                fallback={camping3}
              />
            </Card>
          
          </Carousel>
        </Col>
      </Row>
      <PostList />
    </div>
    
    
  )
}

export default Home