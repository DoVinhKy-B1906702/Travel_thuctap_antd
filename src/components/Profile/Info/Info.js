import React, {useContext} from 'react'

import { AuthContext } from '../../../context/AuthContext'
import { Button, Card, Typography} from 'antd';
import classNames from 'classnames/bind'
import styles from './Info.module.scss';





const cx = classNames.bind(styles);

const Info = () => {
    const {authState: {user }, setShowModalUpdateUser } = useContext(AuthContext);

    const handleOpenUpdateModal = () => {
        setShowModalUpdateUser(true)
    }
    
  return (
    <div>
        <Card className={cx('card')} style={{borderRadius: '0'}}>
            <ul className={cx('list')}>
                <Typography.Title className={cx('title-info')}>Thông tin của bạn</Typography.Title>
                <li className={cx('list-item')}>
                    <div>Tên:</div>
                    <div className={cx('list-item-info')}>{user.firstName}</div>
                </li>
                <li className={cx('list-item')}>
                   <div>Họ:</div>
                   <div className={cx('list-item-info')}>{user.lastName}</div> 
                </li>
                <li className={cx('list-item')}>
                    <div>yourID:</div>
                    <div className={cx('list-item-info')}>{user.yourId}</div>
                </li>
                <li className={cx('list-item')}>
                    <div>Email:</div>
                    <div className={cx('list-item-info')}>{user.email}</div>
                </li>
                <li className={cx('list-item')}>
                    <div>Số điện thoại:</div>
                    <div className={cx('list-item-info')}>{user.phone}</div>
                </li>
                <li className={cx('list-item')}>
                    <div>Số tiền hiện có:</div>
                    <div className={cx('list-item-info')}>{user.cash}</div>
                </li>
                <li className={cx('list-item')}>
                    <div>Giới tính của bạn</div>
                    <div className={cx('list-item-info')}>{user.gender ? 'Nam' : 'Nữ'}</div>
                </li>
                <div className={cx('btn-update-info')}>
                   
                    <Button onClick={handleOpenUpdateModal} type='primary' >Chỉnh sửa thông tin</Button>
                </div>
                
            </ul>
        </Card>
         
    </div>
  )
}

export default Info