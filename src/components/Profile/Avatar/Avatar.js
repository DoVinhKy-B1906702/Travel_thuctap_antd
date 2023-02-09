import React,{useContext, useState, useEffect} from 'react'

import { Button, Image, Typography} from 'antd'
import { AuthContext } from '../../../context/AuthContext'

import classNames from 'classnames/bind'
import styles from './Avatar.module.scss';





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
        try {
                const formData = new FormData();
                formData.append('image',file);

                
                const response = await updateImage(formData, user._id)
                console.log(response);
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
            <input type='file' name='image' onChange={handleChangeAvatar} />
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
        <Image
            className={cx('layout-image')}
            src="error"
            fallback={avatarDefault ? avatarDefault : user.image}
        />
       {showUpdateAvatar ? btnDone : btnUpdate }
        
    </div>
  
  )
}

export default Avatar