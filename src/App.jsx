import React, { useEffect, useState } from "react";
import "./css/public.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { MyPage } from "./pages/MyPage";
import { MyCalendar } from "./pages/MyCalendar";
import { AskBox } from "./components/Main/AskBox";
import { UpdatePassword } from "./components/Mypage/UpdatePassword";
import { UserDetail } from "./components/Mypage/UserDetail";
import { NavigationBar } from "./components/NavigationBar";
import { PrivateRoute } from './pages/PrivateRoute';
import { getAccesstoken } from "./function/common";

const App = () => {
    const [token, setToken] = useState(getAccesstoken());

    useEffect(() => {
        const storedTokenInStorage = getAccesstoken();
        // 테스트용 로그
        // console.log("Current token:", token); // 현재 상태의 token
        // console.log("Stored token in storage:", storedTokenInStorage); // 세션 스토리지에서 가져온 token
    
        // storedTokenInStorage가 null이 아닐 경우, token을 업데이트
        if (storedTokenInStorage !== token) {
            setToken(storedTokenInStorage);
        }
    }, []); // 빈 배열로 설정하여 컴포넌트가 마운트될 때만 실행

    return (
        <>
            <NavigationBar />
            <Routes>
                {/* Public으로 접근 가능한 경로 */}
                <Route path="/" element={<Login setToken={setToken} />} />
                <Route path="/register" element={<Register />} />

                {/* Private으로 접근 가능한 경로 */}
                <Route path="/main" element={<PrivateRoute authenticated={token} element={<Main />} />} />
                <Route path="/mypage" element={<PrivateRoute authenticated={token} element={<MyPage />} />} />
                <Route path="/mycalendar" element={<PrivateRoute authenticated={token} element={<MyCalendar />} />} />
                <Route path="/askbox" element={<PrivateRoute authenticated={token} element={<AskBox />} />} />
                <Route path="/updatepassword" element={<PrivateRoute authenticated={token} element={<UpdatePassword />} />} />
                <Route path="/userdetail" element={<PrivateRoute authenticated={token} element={<UserDetail />} />} />

                {/* default 경로 설정 */}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </>
    );
};

export default App;
