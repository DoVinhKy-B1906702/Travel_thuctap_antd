import React from 'react'
import classNames from 'classnames/bind'
import styles from './CardUser.module.scss';
import { Image, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const cx = classNames.bind(styles);
const CardUser = ({info}) => {
   
   
  return (
    <div className={cx('layout-card')}>
        <Image
              src="error"
              fallback={info.user.image}
        />
        <div className={cx('card-name')}>{info.user.firstName} {info.user.lastName}</div>
        <div>{
        info.user.gender ? 
        (
            <div className={cx('layout-gender')}>
                <FontAwesomeIcon className={cx('icon-gender-male')} icon={faMars} />
                <span>Nam</span>
            </div>
        )
        : 
        (
            <div className={cx('layout-gender')}>
                <FontAwesomeIcon className={cx('icon-gender-female')} icon={faVenus} />
                <span>Nữ</span>
            </div>
        )
        }
        </div>
        <div className={cx('btn-link')}>
            <Link to={`/${info.user.yourId}`}>
                <Button type='primary'>Xem trang cá nhân</Button>
            </Link>
        </div>
    </div>
  )
}

export default CardUser