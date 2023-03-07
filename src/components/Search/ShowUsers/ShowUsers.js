import { Avatar, List } from 'antd'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './ShowUsers.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';



const cx = classNames.bind(styles);
const ShowUsers = ({allUsers}) => {
  return (
    <List
        itemLayout="horizontal"
        className={cx('list-user')}
        dataSource={allUsers}
        renderItem={(item, index) => (
            <List.Item className={cx('list-user-item') }>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<Link to={`${item.yourId}`} className={cx('link')}>{item.firstName} {item.lastName}</Link>}
                description={item.gender ? 
                    <FontAwesomeIcon className={cx('gender-male')} icon={faMars} /> 
                    : 
                    <FontAwesomeIcon className={cx('gender-female')} icon={faVenus} />
                }
              />
            </List.Item>
        )}
    />
  )
}

export default ShowUsers