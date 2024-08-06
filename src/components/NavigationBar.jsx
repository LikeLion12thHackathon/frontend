import * as Styled from "../css/styled/navigation.bar.styled";
import IconButton from "./IconButton";
import { useLocation } from "react-router-dom";

export const NavigationBar = () => {
    const locationNow = useLocation();
    
    return (
            locationNow.pathname === "/main" || locationNow.pathname === "/mycalendar" || locationNow.pathname === "/mypage" ? (
                <Styled.NavigationBar>
                    <IconButton />
                </Styled.NavigationBar>
            ) : (
                null
            )
    );
}