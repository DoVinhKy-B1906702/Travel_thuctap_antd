

import React, {useState, useContext, useEffect} from 'react'

import classNames from 'classnames/bind'
import styles from './PostForm.module.scss';
import { PostContext } from '../../../context/PostContext';


import { Image, Row, Col } from 'antd';
const cx = classNames.bind(styles);

const PostForm = () => {
    const {addPost} = useContext(PostContext);
    

    const [image, setImage] = useState(null);
    const [ avatarDefault, setAvatarDefault] = useState(); 
   
    useEffect(() => {
        
      
        return () => {
            avatarDefault &&  URL.revokeObjectURL(avatarDefault.preview)
          }
    }, [avatarDefault])
    const [data, setData] = useState({
        title:'',
        content:''
    });

    const {title, content} = data;

    const handleChange = (e) => {
      const file = e.target.files[0];
      // console.log(file)
      file.preview = URL.createObjectURL(file);
      // console.log(file.preview)
      setAvatarDefault(file.preview);
       
        // file.preview = URL.createObjectURL(file);
        setImage(file);
        // console.log(imagesArray);
    }

      const handleChangeData = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        })
        console.log(e.target.value)
      
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const formData = new FormData();
            formData.append('image', image);
            formData.append('content', content);
            formData.append('title', title);
        
            const res =  await  addPost(formData);
            if (res.success) {
              setData({
                title:'',
                content:''
              });
              setImage(null);
              setAvatarDefault('');
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Row justify='center'>
      <Col xs={20} xl={8} sm={10}>
      <div className={cx('post-form')}>
        <form encType='multipart/form-data' >
            <div>
              <div className={cx('title')}>Tiêu đề</div>
              <input 
                className={cx('title-input')} 
                type='text' 
                name='title' 
                value={title} 
                onChange={handleChangeData}
                placeholder={`hôm nay của bạn thế nào !!`} 
              />
            </div>
            <div> 
              <div>Nội dung</div>
               <textarea 
                className={cx('content-input')} 
                onChange={handleChangeData} 
                name='content' 
                value={content} 
                placeholder={`Bạn đang nghĩ gì thế !!`} 
              />
            </div>
            <div>
              <div>Hình ảnh</div>
              <input onChange={handleChange} name='image' type='file'  />
            </div>
            <div>
              {avatarDefault &&   
                <Image
                  className={cx('layout-image')}
                  src="error"
                  fallback={avatarDefault}
                />
              }
            </div>
           
            <div className={cx('btn-right')}>
              <button type='submit' className={cx('btn-submit')} onClick={handleSubmit} >Đăng</button>
            </div>
            
        </form>
    </div>
      </Col>
    </Row>
   
   
  )
}

export default PostForm