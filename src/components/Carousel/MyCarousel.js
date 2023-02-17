import React, {useContext} from 'react'
import { Row, Col, Typography, Carousel, Card, Image} from 'antd'
import classNames from 'classnames/bind'
import styles from './MyCarousel.module.scss';

import { PostContext } from '../../context/PostContext';

const cx = classNames.bind(styles);


const MyCarousel = ({list, xs, xl, sm}) => {
   
  
  

  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);

  // };
  return (
    <Row justify="center"  className={cx('layout-slide')}>
        <Col xs={xs ? xs : 20} xl={xl ? xl : 8} sm={sm ? sm : 10}>
          <Carousel effect='fade'  autoplay>
           {list.map((item, index)  => (
                <Card key={index} className={cx('layout-card')} >
                   
                    <div className={cx('slide-number')}>
                      {`${index+1}/${list.length}`}
                    </div>
                     
                    <Typography.Title className={cx('title-location')}>ảnh {index + 1}</Typography.Title>
                    <Image  
                    className={cx('layout-image')}
                    src="error"
                    fallback={item}
                    />
                </Card>
           ))}
           
            
          
          </Carousel>
        </Col>
      </Row>
  )
}

export default MyCarousel