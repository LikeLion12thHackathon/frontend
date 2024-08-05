import { Link } from "react-router-dom";
import styled from "styled-components";


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center; /* 수직 중앙 정렬 */
    align-items: center; /* 수평 중앙 정렬 */
    //margin: 0 auto; /* 중앙 정렬을 위한 여백 */
    width: 100%;
    height: 120vh;
`
export const LoginTitle = styled.h1`
    text-align: center;
    margin-bottom: 4px;
    font-size: 28px;
`

export const FormInnerWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    justify-content: center; /* 수직 중앙 정렬 */
    align-items: center; /* 수평 중앙 정렬 */
`

export const StyledLabel = styled.label`
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 20px;
`

export const LoginInput = styled.input`
    width: 332px;
    height: 52px;
    padding: 20px 15px;
    font-size: 18px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    &:focus {
        border: 2px solid #4186F5;
        outline: none;
    }

`
export const RegisterInput = styled.input`
    width: 332px;
    height: 52px;
    padding: 20px 15px;
    font-size: 18px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    &:focus {
        border: 2px solid #4186F5;
        outline: none;
    }
    
`

export const FileInput = styled.input`
    padding: 20px 15px;
    font-size: 18px;
    box-sizing: border-box;
    &:focus {
        border: 2px solid #4186F5;
        outline: none;
    }
    
`

export const ErrorMsgContainer = styled.div`
    width: 100%;
    height: 20px;
    color: red;
    font-weight: 600;
    visibility: ${(props) => props.$visibleTrue ? 'visible' : 'hidden'};
`

export const StyledLink = styled(Link)`
    margin-left: 5px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color: #666666;
    transition: color 0.3s ease;

    &:hover, &:focus {
        color: #4186F5;
    }
`

export const LoginSubmitButton = styled.button`
    width: 332px;
    height: 56px;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
    color: var(--bg-original-white);
    background-color: #4186f5;
    border: none;
    border-radius: 10px;
    transition: background-color 0.3s ease;

    &:focus, &:hover {
        background-color: #3578d5;
    }
    /* 버튼이 클릭되었다가 떼질 때 */
    &:active {
        background-color: #3578d5;
    }
`
export const InputContainer = styled.div`
    /* position: relative; */
    display: flex;
    align-items: center;
`;

export const ToggleButton = styled.button`
    /* position: absolute; */
    right: 10px; // 입력 필드 안쪽 여백 조정
    background: none;
    border: none;
    cursor: pointer;
    color: #007BFF; // 버튼 색상
    font-size: 14px; // 버튼 글자 크기
    padding: 0;
    margin: 0;
`;