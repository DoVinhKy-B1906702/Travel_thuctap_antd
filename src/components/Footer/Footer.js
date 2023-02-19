import { Col, Row } from 'antd'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss';

import fyl from '../../../src/assets/fyl.svg';
import IconText from '../IconText/IconText';
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { InstagramOutlined, LinkedinOutlined } from '@ant-design/icons/lib/icons';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
        <Row justify='center'>
            <Col xs={24} xl={8} sm={24}>
                <div className={cx('footer-title')}>
                    <div className={cx('footer-logo')}>
                        <img src={fyl} alt='logo' className={cx('footer-logo-image')} />
                    </div>
                    <div className={cx('footer-description')}>Yours Freedom, Yours Life</div>
                </div>
            </Col>
        </Row>
        <Row justify='center'>
            <Col xs={24} xl={6} sm={24} className={cx('all-col')}>
                <div className={cx('col-title')}>
                    Mạng xã hội
                </div>
                <ul className={cx('footer-item')}>
                    <li>
                        <IconText 
                            text='Facebook' 
                            icon={<FacebookOutlined style={{color: '#0984e3'}} />}
                            href='https://facebook.com'
                        />
                    </li>
                    <li>
                        <IconText 
                            text='Twitter' 
                            icon={<TwitterOutlined style={{color: '#0984e3'}} />}
                            href='https://facebook.com'
                        />
                    </li>
                    <li>
                        <IconText 
                            text='Linkedin' 
                            icon={<LinkedinOutlined style={{color: '#0984e3'}} />}
                            href='https://facebook.com'
                        />
                    </li>
                    <li>
                        <IconText 
                            text='Instagram' 
                            icon={<InstagramOutlined style={{color: '#e84393'}} />}
                            href='https://facebook.com'
                        />
                    </li>
                </ul>
            </Col>
            <Col xs={24} xl={6} sm={24} className={cx('all-col')}>
                <div className={cx('col-title')}>
                    Hỗ trợ
                </div>
                <div>Vui lòng liên hệ email <span className={cx('email')}>abcxyz@gmail.com</span>  để được hỗ trợ !!</div>
            </Col>
            <Col xs={24} xl={6} sm={24} className={cx('all-col')}>
                <div className={cx('col-title')}>
                    Liên hệ Quảng cáo
                </div>
                <div>Vui lòng liên hệ email <span className={cx('email')}>abcxyz@gmail.com</span>  để làm việc !!</div>
            </Col>
        </Row>
    </div>
  )
}

export default Footer