import * as Styled from '../css/styled/icon.button.styled';
import calendar from '../../src/assets/calendaricon.png';
import main from '../../src/assets/mainicon.png';
import mypage from '../../src/assets/mypageicon.png';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function IconButton() {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState(1);
    
    const handleNavigation = (path, navIndex) => {
        setActiveNav(navIndex);
        navigate(path);
    };

    return (
        <>
            <Styled.IconButton 
                src={calendar} 
                alt="MyCalendar" 
                onClick={() => handleNavigation("/mycalendar", 0)} 
            />
            <Styled.IconButton 
                src={main} 
                alt="Main" 
                onClick={() => handleNavigation("/main", 1)} 
            />
            <Styled.IconButton 
                src={mypage} 
                alt="My Page" 
                onClick={() => handleNavigation("/mypage", 2)} 
            />
        </>
    );
}
