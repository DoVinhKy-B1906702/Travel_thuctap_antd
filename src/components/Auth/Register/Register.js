import React, { useContext} from 'react'
import classNames from 'classnames/bind'
import styles from './Register.module.scss';
import {Link} from 'react-router-dom';
import { Col, Row} from 'antd';

import {Form, Input, Button, Typography, Select} from 'antd';

import { AuthContext } from '../../../context/AuthContext';

const cx = classNames.bind(styles);

const Register = () => {
  const {registerUser} = useContext(AuthContext);



  const onFinish = async (values) => {
    console.log('Success:', values);
    if ( values.password !== values.confirmPassword) {
      // setAlert({type: 'warning', message: 'Password do not match'});
      // setTimeout(() => {
      //   setAlert(null);
      // }, 5000)
      console.log('sai pass')

      return
    }

    try {
      const registerData = await registerUser(values);
      console.log(registerData);
      // if (!registerData.success) {
      //   setAlert({type: 'warning', message: registerData.message});
      //   setTimeout(() => {
      //     setAlert(null)
      //   },5000)
      // }
    } catch (error) {
      console.log(error)
    
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
          <Typography.Title >Đăng Ký</Typography.Title>
          <Form.Item 
            label='Họ'
            name="firstName"
            id="firstName"
          
            rules={[
              {
                required: true,
                message: 'Hãy nhập họ của bạn!',
              },
            ]}
          >
            <Input 
              placeholder='Nhập vào họ của bạn.....'
             />
          </Form.Item>
          <Form.Item 
            label='Tên'
            name="lastName"
            id="lastName"
           
            rules={[
              {
                required: true,
                message: 'Hãy nhập tên của bạn!',
              },
            ]}
          >
            <Input 
              placeholder='Nhập vào tên của bạn.....'
            />
          </Form.Item>
          <Form.Item 
            label='Tên đăng nhập'
            name='username'
          
            rules={[
              {
                required: true,
                message: 'tên đăng nhập phải có!',
              },
            ]}
          >
            <Input 
              placeholder='Enter your username.....'
            />
          </Form.Item>
          <Form.Item 
            label='Mật khẩu'
            name='password'
          
            rules={[
              {
                required: true,
                message: 'Hãy nhập mật khẩu!',
              },
            ]}
          >
            <Input.Password 
              placeholder='Enter your password.....'
            />
          </Form.Item>
          <Form.Item 
            label='Nhập lại mật khẩu'
            name='confirmPassword'
          
            rules={[
              {
                required: true,
                message: 'Hãy xác nhận mật khẩu!',
              },
            ]}
          >
            <Input.Password 
             
              placeholder='Enter your password.....'
            />
          </Form.Item>
          <Form.Item 
              label='Giới tính'   
              name="gender"
              rules={[
                {
                  required: true,
                  message: 'Bạn chưa chọn giới tính kìa!',
                },
              ]}
          >
            <Select 
              placeholder='--------Chọn giới tính của bạn--------'  
              options={[
                {
                  label:'Nam',
                  value: true
                },
                {
                  label:'Nữ',
                  value:false
                },
              ]}
            >
              
            </Select>

          </Form.Item>
          {/* <Form.Item className={cx('btn-login')}>
            <Button type='primary' htmlType='submit' >Reset</Button>
          </Form.Item> */}
          <Form.Item className={cx('btn-login')}>
            <Button type='primary' htmlType='submit' >Đăng Ký</Button>
          </Form.Item>
          <Form.Item>
              <Typography.Text className={cx('redirect-text')}>Bạn đã có tài khoản rồi hả ?</Typography.Text>
              <Link to='/login'>
                <Button className={cx('btn-secondary')} >Đăng Nhập</Button>
              </Link>
          </Form.Item>
      </Form>
      
      </Col>
      
      
    </Row>
    
  )
}

export default Register