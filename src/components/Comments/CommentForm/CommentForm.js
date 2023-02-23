import React, {useContext} from 'react';
import classNames from 'classnames/bind'
import styles from './CommentForm.module.scss';


import { Form, Input, Button, message } from 'antd';
import { AuthContext } from '../../../context/AuthContext';
import { PostContext } from '../../../context/PostContext';
import { SendOutlined } from '@ant-design/icons';



const cx = classNames.bind(styles);

const CommentForm = ({id}) => {
    const { TextArea } = Input;
    const {authState: {user}} = useContext(AuthContext);
    const {postComment} = useContext(PostContext);

   const [form] = Form.useForm()

    const onFinish = async (values) => { 
        console.log('Success:', values);
        if(!values.text) {
            message.info('Bình luận của bạn trống kìa!!!!!!!');
            return;
        }
       
       
        try {
            const res = await postComment(values, id)
            console.log(res)
            if(res.success) {
                message.success('Done!');
                form.resetFields()
            } else {
                message.error('Lỗi rồi!!!')
            }
            console.log(values,id);
        } catch (error) {
            message.error('Lỗi rồi!!!');
            console.log(error)
        }
       
        
    }
  return (
    <div className={cx('layout')}>
        <div>
            <img className={cx('image')} src={user.image} alt={`${user.firstName}`} />
        </div>
        <Form onFinish={onFinish} layout='vertical' form={form} className={cx('form-comment')}>
            <Form.Item  name='text'>
                <TextArea placeholder='Hãy nhận xét bài viết này!!!' rows={4} />
                
            </Form.Item>
            <Form.Item className={cx('btn-send')}>
                <Button type='primary' htmlType='submit' ><SendOutlined /></Button>
            </Form.Item>
              
        </Form>
    </div>
  )
}

export default CommentForm