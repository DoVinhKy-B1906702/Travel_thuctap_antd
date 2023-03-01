import { Avatar, List } from 'antd'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/vi';
import { AuthContext } from '../../../context/AuthContext';
import classNames from 'classnames/bind'
import styles from './UserLikes.module.scss';



const cx = classNames.bind(styles);
const UserLikes = ({users}) => {
    console.log(users)
    const {authState: {user}} = useContext(AuthContext)
    
  return (
    <List
        grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1,
            xxl: 1,
          }}
        className={cx('list-users')}
        itemLayout='horizontal'
        dataSource={users}
        renderItem={(item) => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={item.user.image ? item.user.image : user.image} />}
                    title={<Link to={item.user.yourId}>{item.user.firstName ? `${item.user.firstName} ${item.user.lastName}` : `${user.firstName} ${user.lastName}` }</Link>}
                    description={moment(item.createdAt).format('LLL')}
                />
            </List.Item>
        )}
    />

  
  )
}

export default UserLikes