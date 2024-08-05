import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    /* width, height는 내부 컴포넌트들의 사이즈로 결정 */
    width: 100%;
    height: auto;
    margin: auto; margin-top: 12vh;
    padding: 50px;
    color: var(--bg-original-black);
    background-color: var(--bg-original-white);
    border-radius: 7%;
    filter: drop-shadow(5px 5px 3px var(--bg-main-green));
`
export const LoginTitle = styled.h1`
    text-align: center;
    margin-bottom: 4px;
    font-size: 28px;
`

export const FormInnerWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
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
    border-radius: 10px;
    border: 1px solid #cccccc;
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
        color: var(--bg-main-green);
    }
`

export const LoginSubmitButton = styled.button`
    width: 332px;
    height: 56px;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;
    margin: 0 auto;
    font-size: 20px;
    color: var(--bg-original-white);
    background-color: #4186f5;
    border: none;
    border-radius: 10px;
    transition: background-color 0.3s ease;

    &:focus, &:hover {
        background-color: var(--bg-main-green);
    }
    /* 버튼이 클릭되었다가 떼질 때 */
    &:active {
        background-color: var(--bg-main-green);
    }
`
export const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const ToggleButton = styled.button`
    position: absolute;
    right: 10px; // 입력 필드 안쪽 여백 조정
    background: none;
    border: none;
    cursor: pointer;
    color: #007BFF; // 버튼 색상
    font-size: 14px; // 버튼 글자 크기
    padding: 0;
    margin: 0;
`;