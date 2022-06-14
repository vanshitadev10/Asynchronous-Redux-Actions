import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserNumber } from './shared/store/data-actions';
import UserList from './pages/UserList';
import UserInfo from './pages/UserInfo';
import Error from './shared/components/Error';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserNumber());
  }, [dispatch]);

  const error1 = useSelector(state => state.user.hasError);
  const error2 = useSelector(state => state.userData.hasError);
  const navigate = useNavigate();

  useEffect(() => {
    if (error1 || error2) {
      navigate('/error');
    }
  }, [error1, error2]);

  const [userId, setUserId] = useState('');

  const userIdHandler = (id) => {
    setUserId(id);
  }

  return (
    <Routes>
      <Route path='/' element={<UserList userInfoHandler={userIdHandler} />} />
      {userId && <Route path={`/user-info/:u${userId}`} element={<UserInfo userIdNo={userId} />} />}
      <Route path='/error' element={<Error />} />
      <Route path='/*' element={<Navigate replace to='/' />} />
    </Routes>
  )
};

export default App;