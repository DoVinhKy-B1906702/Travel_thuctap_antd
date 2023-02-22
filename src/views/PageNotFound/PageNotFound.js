import React from 'react'
import classNames from 'classnames/bind'
import styles from './PageNotFound.module.scss';
import { Row, Col} from 'antd';
import { Link } from 'react-router-dom';
import robot404 from '../../assets/robot404.jpg';

const cx = classNames.bind(styles);
const PageNotFound = () => {
  return (
    <div className={cx('layout')}>
       <Row justify='center'>
            <Col xs={12} xl={6} sm={12}>
               <img src={robot404} alt='404' className={cx('bg-image')} />
            </Col>
            <Col xs={12} xl={6} sm={12}>
               <div className={cx('notfound')}>404 !!!</div>
               <div className={cx('alert')}>Đã có lỗi xảy ra !!</div>
               <Link to='/'>
                <div className={cx('back')}>Quay lại trang chủ thôi nào</div>
               </Link>
               <Link to='/' >
                <div className={cx('body')}>

                    <button className={cx('btn', 'btn-animation')} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>Go Back</span>
                    </button>
                </div>
               </Link>
               

            </Col>
       </Row>
    </div>
  )
}

export default PageNotFound