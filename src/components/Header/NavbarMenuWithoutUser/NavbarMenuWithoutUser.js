import React from 'react'
import classNames from 'classnames/bind'
import styles from './NavbarMenuWithoutUser.module.scss';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import fyl from '../../../assets/logofyl.png';


const cx = classNames.bind(styles);

const NavbarMenuWithoutUser = () => {


    
    return (
      <Row justify='center'>
        <Col xs={4} sm={4} xl={12}>
            <Link>
                <img src={fyl} className={cx('logo')}  alt='Logo' />
            </Link>
        </Col>
        <Col  xs={20} sm={20} xl={4}>
            <div className={cx('btn')}>
                <Link to='/login' className={cx('btn-login')}>
                    <Button>Đăng nhập</Button>
                </Link>
                <Link to='/register'>
                    <Button type='primary'>Đăng ký</Button>
                </Link>
            </div>
        </Col>
      </Row>
    )
}

export default NavbarMenuWithoutUser