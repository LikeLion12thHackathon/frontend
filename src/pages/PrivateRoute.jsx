import React from 'react';
import { Navigate } from 'react-router-dom';
// import { ToastifyError } from '../../function/toast';

export const PrivateRoute = ({ authenticated, component}) => {
  if (!authenticated) {
    alert("로그인 후 이용할 수 있습니다."); // 경고 메시지 표시
    return <Navigate to='/' />;
  }

  return component;
 };