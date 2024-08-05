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
import { UpdateUserdata } from "./components/Mypage/UpdateUserData";
import { NavigationBar } from "./components/NavigationBar";
import { PrivateRoute } from './pages/PrivateRoute';
import { getAccesstoken } from "./function/common";

const App = () => {
    const [token, setToken] = useState(getAccesstoken());

    useEffect(() => {
        const storedTokenInStorage = getAccesstoken();
        if (storedTokenInStorage !== token) {
            setToken(storedTokenInStorage);
        }
    }, [token]);

    return (
        <>
            <NavigationBar />
            <Routes>
                {/* Public으로 접근 가능한 경로 */}
                <Route path="/" element={<Login setToken={setToken} />} />
                <Route path="/register" element={<Register />} />

                {/* Private으로 접근 가능한 경로 */}
                <Route path="/main" element={<PrivateRoute authenticated={token} component={<Main />} />} />
                <Route path="/mypage" element={<PrivateRoute authenticated={token} component={<MyPage />} />} />
                <Route path="/mycalendar" element={<PrivateRoute authenticated={token} component={<MyCalendar />} />} />
                <Route path="/askbox" element={<PrivateRoute authenticated={token} component={<AskBox />} />} />
                <Route path="/updatepassword" element={<PrivateRoute authenticated={token} component={<UpdatePassword />} />} />
                <Route path="/updateuserdata" element={<PrivateRoute authenticated={token} component={<UpdateUserdata />} />} />

                {/* default 경로 설정 */}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </>
    );
};

export default App;
