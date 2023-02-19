import React, {useContext} from 'react'


import classNames from 'classnames/bind'
import styles from './UpdateUserModal.module.scss';

import { AuthContext } from '../../../context/AuthContext';

import {Form, Input, Button, Select, Card, message, Row, Col} from 'antd';


const cx = classNames.bind(styles);

const UpdateUserModal = () => {
    const {authState: {user},  setShowModalUpdateUser, updateUser } = useContext(AuthContext);

    

    const handleCloseModal = () => {
        setShowModalUpdateUser(false)
    }
    const onFinish = async (values) => {
      console.log('Success:', values);
      const response = await updateUser(values);
      if (response.success) {
        handleCloseModal();
        message.success('Đã cập nhật thành công !!!')
      } 

     
      
    }

    const updateModal = (
        <Row justify='center'>
          <Col xs={24} xl={12} sm={12} >
            <Form onFinish={onFinish} layout='vertical' className={cx('modal')}>
        <div onClick={handleCloseModal} className={cx('layout-cancel')}>
          <button className={cx('btn-x')}>x</button>
        </div>
        
        <div className={cx('title-update')} >Chỉnh sửa thông tin</div>
        <Form.Item 
            label='Tên của bạn' 
            name='firstName'
            initialValue={user.firstName}
            rules={[
                {
                  required: true,
                  message: 'Tên không được trống!',
                },
              ]}
        >
        <Input placeholder='Nhập vào tên của bạn.....' />
        </Form.Item>
        <Form.Item 
            label='Họ của bạn' 
            name='lastName'
            initialValue={user.lastName}
            rules={[
                {
                  required: true,
                  message: 'Họ không được trống!',
                },
              ]}
        >
        <Input placeholder='Nhập vào họ của bạn.....' />
        </Form.Item>
        <Form.Item 
            label='Email của bạn' 
            name='email'
            initialValue={user.email}
            rules={[
              {
                type: 'email',
                message: 'E-mail của bạn không đúng định dạng!',
              },
              {
                required: true,
                message: 'Vui lòng nhập E-mail của bạn!',
              },
            ]}
        >
        <Input placeholder='Nhập vào email của bạn.....' />
        </Form.Item>
        <Form.Item 
            label='Số điện thoại của bạn' 
            name='phone'
            initialValue={user.phone}
            rules={[
              {
                required: true,
                min:10,
                max:11,
                message:
                    'Số điện thoại của bạn không đúng định dạng!',
            }
            ]}
        >
        <Input placeholder='Nhập vào số điện thoại của bạn.....' />
        </Form.Item>
        <Form.Item 
          label='Giới tính'   
          name="gender"
          initialValue={user.gender}
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
        <Form.Item 
            hidden
            label='_id' 
            name='_id'
            initialValue={user._id}
        >
        <Input placeholder='Nhập vào số điện thoại của bạn.....' />
        </Form.Item>
        <Form.Item className={cx('btn-login')}>
            <Button className={cx('btn-cancel')} type='ghost' onClick={handleCloseModal} >Hủy Bỏ</Button>
            <Button type='primary' htmlType='submit' >Xong</Button>
        </Form.Item>
        
            </Form>
          </Col>
           
        </Row>
   

    )
  return (
    <Card className={cx('layout')}>
         {updateModal}
    </Card>
   
  )
}

export default UpdateUserModal