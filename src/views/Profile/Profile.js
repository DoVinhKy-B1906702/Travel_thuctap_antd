import React, {useContext} from 'react'
import { Col, Row } from 'antd';
import classNames from 'classnames/bind'
import styles from './Profile.module.scss';
// import {Link} from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import Info from '../../components/Profile/Info/Info';
import Avatar from '../../components/Profile/Avatar/Avatar';

import UpdateUserModal from '../../components/Modal/UpdateUserModal/UpdateUserModal';
import Notify from '../../components/Notify/Notify';
const cx = classNames.bind(styles);

const Profile = () => {
const {showModalUpdateUser, showNotifyUpdate} = useContext(AuthContext);
 

  return (
    <Row justify="center" className={cx('layout')}>
    <Col xs={20} xl={8} sm={10} className={cx('layout-item')} >
       
        <Info />

    </Col>
    <Col xs={20} xl={8} sm={10} className={cx('layout-item')}>
        <Avatar />
    </Col>
    {showModalUpdateUser && <UpdateUserModal />}
    {showNotifyUpdate && <Notify display={showNotifyUpdate} type={true} text='Cập nhật thành công' />}
    </Row>
  )
}

export default Profile