import React, {useContext} from 'react'
import classNames from 'classnames/bind'
import styles from './Login.module.scss';
import {Link} from 'react-router-dom';
import { Col, Row } from 'antd';

import {Form, Input, Button, Typography} from 'antd';
import { AuthContext } from '../../../context/AuthContext';

const cx = classNames.bind(styles);
const Login = () => {
  const {loginUser} = useContext(AuthContext);

  const onFinish = async (values) => {
    console.log('Success:', values);
  
    try {
      const registerData = await loginUser(values);
      console.log(registerData);
      // if (!registerData.success) {
      //   setAlert({type: 'warning', message: registerData.message});
      //   setTimeout(() => {
      //     setAlert(null)
      //   },5000)
      // }
    } catch (error) {
      console.log(error);
    
    }

  }
  return (
    <Row justify="center" className={cx('layout')}>
      <Col xs={24} xl={10} sm={10} className={cx('layout-left')}>
        <div className={cx('layout-background')}>
        
        </div>
      </Col>
      <Col xs={24} xl={6} sm={10}>
        <Form onFinish={onFinish} layout='vertical' className={cx('form-login')}>
          <Typography.Title >Đăng nhập</Typography.Title>
          <Form.Item label='Tên đăng nhập' name='username'>
            <Input placeholder='Enter your username.....' />
          </Form.Item>
          <Form.Item label='Mật khẩu' name='password'>
            <Input.Password placeholder='Enter your password.....' />
          </Form.Item>
          <Form.Item className={cx('btn-login')}>
            <Button type='primary' htmlType='submit' >Đăng nhập</Button>
          </Form.Item>
          <Form.Item>
              <Typography.Text className={cx('redirect-text')}>Bạn đã có tài khoản chưa ?</Typography.Text>
              <Link to='/register'>
                <Button className={cx('btn-secondary')} htmlType='submit' >Đăng Kí</Button>
              </Link>
          </Form.Item>
        </Form>
      </Col>
      
      
    </Row>
    
  )
}

export default Login