import React, {useContext} from 'react'
import { Row, Col, Image } from 'antd';
import classNames from 'classnames/bind'
import styles from './PostItem.module.scss';

import moment from 'moment';
import 'moment/locale/vi';
import { AuthContext } from '../../../context/AuthContext';

const cx = classNames.bind(styles);

const PostItem = ({post}) => {
  const {authState: {user}} = useContext(AuthContext)
  return (
    <Row justify="center">
       
    <Col  xs={20} xl={12} sm={16}>
    <div className={cx('layout')}>
      <div className={cx('info')}>
       <div >
        <img  className={cx('info-image')} src={post.user.image ? post.user.image : user.image } alt='avatar' />
       </div>
       <div>
        <div className={cx('info-name')}>
          {post.user.firstName ? `${post.user.firstName} ${post.user.lastName}` : `${user.firstName} ${user.lastName}` }
        </div>
        <div className={cx('info-time')}>
          {moment(post.createdAt).format('LLL')}
        </div>
       </div>
      </div>
      <div className={cx('post')}>
        <div>
          <div className={cx('post-title')}>
            {post.title}
          </div>
          <div className={cx('post-content')}>
            {post.content}
          </div>
        </div>
        <div className={cx('image-layout')}>
          <div  className={cx('image-center')}>
            <Image  
              className={cx('image-post')}
              src="error"
              fallback={post.image}
            />
          </div>
          
          {/* <img className={cx('image-post')} src={post.image}  alt={`hình ảnh của ${post.user.firstName}`}/> */}
        </div>
      </div>
    </div>
    </Col>



    </Row>
   
  )
}

export default PostItem