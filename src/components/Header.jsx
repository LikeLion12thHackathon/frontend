import * as Styled from "../css/styled/header.styled";
import { NavigateBeforeButton } from "./NavigateBeforeButton";
import { useLocation } from "react-router-dom";

export const Header = ({text}) => {
    const locationNow = useLocation();
    return(
        locationNow.pathname === "/userdetail" || locationNow.pathname === "/updatepassword" ? (
            <Styled.HeaderText>    
                <NavigateBeforeButton />
                {text}
            </Styled.HeaderText>
        ) : (
            <Styled.HeaderText>
                {text}    
            </Styled.HeaderText>
        )
    )
}