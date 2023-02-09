

import React, {useState, useContext} from 'react'

import classNames from 'classnames/bind'
import styles from './PostForm.module.scss';
import { PostContext } from '../../../context/PostContext';


const cx = classNames.bind(styles);

const PostForm = () => {
    const {addPost} = useContext(PostContext);
   

    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        title:'',
        content:''
    });

    const {title, content} = data;

    const handleChange = (e) => {
       
       
        // file.preview = URL.createObjectURL(file);
        setImage(e.target.files[0]);
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
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div style={{background:'gray'}}>
        <form encType='multipart/form-data' >
            <div>
              <div className={cx('title')}>Tiêu đề</div>
              <input className={cx('title-input')} type='text' name='title' value={title} onChange={handleChangeData} />
            </div>
            <div> 
              <div>Nội dung</div>
               <textarea className={cx('content-input')} onChange={handleChangeData} name='content' value={content} />
            </div>
            <div>
              <div>Hình ảnh</div>
              <input onChange={handleChange} name='image' type='file' />
            </div>
            
            <button type='submit' className={cx('btn-submit')} onClick={handleSubmit} >Đăng</button>
        </form>
    </div>
   
  )
}

export default PostForm