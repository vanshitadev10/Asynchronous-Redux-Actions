import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../shared/components/Button';
import styles from './UserList.module.css';

const UserList = props => {

    const totalNoOfUsers = useSelector(state => state.user.totalUsers);
    const userId = useSelector(state => state.user.userId);
    const isLoading = useSelector(state => state.user.isLoading);
    console.log(isLoading)

    const navigate = useNavigate();

    const userDataDisplayHandler = (user) => {
        props.userInfoHandler(user);
        navigate(`/user-info/:u${user}`);
    }

    return (
        <Fragment>
            {isLoading ? <p className='extras'>Loading...</p> :
                <div className={styles['user-list']}>
                    <h1 className={styles['user-list__title']}>The Total Number Of Fetched Users Are: {totalNoOfUsers}</h1>
                    <div className={styles['user-list__items']}>{userId.map(user => <Button key={user} onClick={userDataDisplayHandler.bind(this, user)}>User {user}</Button>)}</div>
                </div>
            }
        </Fragment>

    )
}

export default UserList;