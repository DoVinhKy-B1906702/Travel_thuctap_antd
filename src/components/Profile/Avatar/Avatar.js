import React,{useContext, useState, useEffect} from 'react'

import { Button, Image, Typography, Alert} from 'antd'
import { AuthContext } from '../../../context/AuthContext'

import classNames from 'classnames/bind'
import styles from './Avatar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);


const Avatar = () => {
    const {authState: {user}, showUpdateAvatar, setShowUpdateAvatar , updateImage} = useContext(AuthContext);

    const handleShowUpdate = () => {
        setShowUpdateAvatar(true);
    }
    
    const handleCloseUpdate = () => {
        setShowUpdateAvatar(false);
    }
    // co the xoa
    const [ avatarDefault, setAvatarDefault] = useState(); 
    const [file, setFile] = useState(null)

    // set showAlert
    const [showAlert, setShowAlert] = useState(false);
    const [showDescription, setShowDescription] = useState({
      type: '',
      message: '',
      description: '',
    })
    
   
    useEffect(() => {
        
      
        return () => {
            avatarDefault &&  URL.revokeObjectURL(avatarDefault.preview)
          }
    }, [avatarDefault])
     const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        // console.log(file)
        file.preview = URL.createObjectURL(file);
        // console.log(file.preview)
        setAvatarDefault(file.preview);
        setFile(e.target.files[0])
    }
    const handleUpdateImage = async (e) => {
        e.preventDefault();
        setShowUpdateAvatar(false);
        try {
                const formData = new FormData();
                formData.append('image',file);
                if(!file) {
                  console.log('xu ly loi tai day');
                  setShowAlert(true);
                  
                  setShowDescription({
                    type: 'info',
                    message: 'Không có gì để cập nhật !!',
                    description: 'Chọn hình ảnh để được cập nhật !!!'
                  })
                  setTimeout(() => {
                    setShowAlert(false)
                  },4000)
                  return ;
                }
                
                const response = await updateImage(formData, user._id)
                console.log(response);
                if (response.success) {
                    setShowAlert(true);
                    
                    setFile(null);
                    setShowDescription({
                      type: 'success',
                      message: 'Đã cập nhật thành công',
                      description: 'Ảnh đại diện đã được cập nhật !!!'
                    })
                    setTimeout(() => {
                      setShowAlert(false)
                    },4000)
                }
            } catch (error) {
                console.log(error)
            }
        
    }

    const btnUpdate = (
        <div className={cx('btn-update-info')}>
          <Button onClick={handleShowUpdate} type='primary' >Chỉnh sửa hình đại diện</Button>
        </div>
    
    )
    const btnDone = (
      <div>
          <form encType='multipart/form-data'>
          <div>
            <label htmlFor='image'>
             <FontAwesomeIcon className={cx('icon-update')} icon={faImage} />
            </label>
            <input type='file' id='image' className={cx('input-file')} name='image' onChange={handleChangeAvatar} />
          </div>
          
         
          <div className={cx('btn-update-done')}>
            <button onClick={handleCloseUpdate} className={cx('btn-cancel')} >Hủy</button>
            <button onClick={handleUpdateImage} className={cx('btn-done')} type='submit' >Xong</button>
          </div>
          </form>
      </div>
    
      
    )
  return (
    <div className={cx('layout-avatar')}>
        <Typography.Title className={cx('title-avatar')}>Avatar</Typography.Title>
        <div className={cx('avatar-center')}>
          <Image
              className={cx('layout-image')}
              src="error"
              fallback={avatarDefault ? avatarDefault : user.image}
          />
        </div>
       
       {showUpdateAvatar ? btnDone : btnUpdate }
       <div>
            {showAlert && 
              <Alert
                type={showDescription.type}
                message={showDescription.message}
                description={showDescription.description}
              />
            }
        </div>
    </div>
  
  )
}

export default Avatar