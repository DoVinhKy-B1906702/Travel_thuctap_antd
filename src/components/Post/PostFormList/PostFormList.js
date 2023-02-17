

import React, {useState, useContext, useEffect} from 'react'

import classNames from 'classnames/bind'
import styles from './PostFormList.module.scss';
import { PostContext } from '../../../context/PostContext';


import { Row, Col, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage} from '@fortawesome/free-solid-svg-icons';
import MyCarousel from '../../Carousel/MyCarousel';
const cx = classNames.bind(styles);

const PostFormList = () => {
    const {addPostImages, avatarDefault, setAvatarDefault} = useContext(PostContext);
    

    const [image, setImage] = useState([]);
    
   
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
      const selectedFiles = e.target.files;
      const selectedFilesArray = Array.from(selectedFiles);
      const imageArray = selectedFilesArray.map( file => {
        return URL.createObjectURL(file);
      })
      // file.preview = URL.createObjectURL(file);
     
      setAvatarDefault(imageArray);
      setImage(selectedFiles);
      
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
            for (let a =0 ; a< image.length ; a++) {
              formData.append('images', image[a]);
            }
            
            formData.append('content', content);
            formData.append('title', title);
        
            const res =  await  addPostImages(formData);
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
            <Typography.Title className={cx('title-form')}>Tạo bài viết</Typography.Title>
            <div className={cx('value-item')}>
              <label className={cx('title')} htmlFor='title'>Tiêu đề</label>
              <input 
                className={cx('title-input')} 
                type='text'
                id='title' 
                name='title' 
                value={title} 
                onChange={handleChangeData}
                placeholder={`hôm nay của bạn thế nào !!`} 
              />
            </div>
            <div className={cx('value-item')}> 
              <label htmlFor='content'>Nội dung</label>
               <textarea 
                className={cx('content-input')} 
                onChange={handleChangeData} 
                name='content'
                id='content' 
                value={content} 
                placeholder={`Bạn đang nghĩ gì thế !!`} 
              />
            </div>
            <div className={cx('value-item')}>
              <div>Hình ảnh</div>
              <label htmlFor='images'>
                  <FontAwesomeIcon className={cx('icon-upload')} icon={faImage} />
                  Chọn hình ảnh
              </label>
              <input onChange={handleChange} name='images' className={cx('input-files')} type='file' id='images' multiple />
              
            </div>
            
            
            <div>
              {avatarDefault &&   
               <MyCarousel 
                list={avatarDefault}
                xl='20' 
                sm='20' 
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

export default PostFormList