import { Button, Form, Upload } from 'antd'
import React from 'react'

const TestUpload = () => {
    const onFinish = (values) => {
        console.log(values)
    }
  return (
    <Form onFinish={onFinish} style={{paddingTop: '100px'}}>
        <Form.Item name={'images'}>
            <Upload multiple={true}>
                <Button>Upload</Button>
            </Upload>
        </Form.Item>
        <Button type='primary' htmlType='submit'>Submit</Button>
    </Form>
  )
}

export default TestUpload