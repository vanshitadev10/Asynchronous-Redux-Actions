import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserData } from '../shared/store/data-actions';
import Card from '../shared/components/Card';
import styles from './UserInfo.module.css';

const UserInfo = props => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData(props.userIdNo));
    }, [dispatch])

    const userName = useSelector(state => state.userData.userName);
    const userEmail = useSelector(state => state.userData.userEmail);
    const userImage = useSelector(state => state.userData.userImage);

    const isLoading = useSelector(state => state.userData.isLoading);
    console.log(isLoading)


    return (
        <Fragment>
            {isLoading ? <p className='extras'>Loading...</p> :
                <div>
                    <h1 className={styles['user-info__title']}>User {props.userIdNo}</h1>
                    <Card className={styles['user-info']}>
                        <div>
                            <h1 className={styles['user-info__name']}>{userName}</h1>
                            <div className={styles['user-info__email']}>
                                <h3>Email:</h3>
                                <p>{userEmail}</p>
                            </div>
                        </div>
                        <img className={styles['user-info__img']} src={userImage} alt='User Image' />
                    </Card>
                </div>
            }
        </Fragment>
    )
}

export default UserInfo;