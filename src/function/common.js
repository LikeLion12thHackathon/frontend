import React from "react";

// 웹 스토리지에 저장된 토큰을 서버 쪽에 보내기
export const getAccesstoken = () => sessionStorage.getItem("accessToken");
export const getRefreshtoken = () => sessionStorage.getItem("refreshToken");
// 웹 스토리지에 토큰 저장
export const setAccesstoken = (accessToken) => sessionStorage.setItem('accessToken', accessToken);
export const setRefreshToken = (refreshToken) => sessionStorage.setItem('refreshToken', refreshToken);


export const WrappingReactFragment = (ReactNode, index) => (
    <React.Fragment key={index}>
        {ReactNode}
    </React.Fragment>
);