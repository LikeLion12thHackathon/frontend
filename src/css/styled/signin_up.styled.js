import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh; /* 전체 화면 높이에 맞춤 */
    padding: 20px; /* 여백 추가 */
    box-sizing: border-box; /* 패딩 포함 */
`;

export const LoginTitle = styled.h1`
    text-align: center;
    margin-bottom: 4px;
    font-size: 2rem; /* 반응형 글꼴 크기 */
`;

export const FormInnerWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    max-width: 332px; /* 최대 너비 설정 */
    flex-direction: column;
`;

export const ImageBox = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LabelBox = styled.div`
    width: 100%;
    max-width: 332px; /* 최대 너비 설정 */
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledLabel = styled.label`
    display:flex;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 20px;
`;

export const InputBase = styled.input`
    width: 100%;
    height: 52px;
    padding: 20px 15px;
    font-size: 1rem; /* 반응형 글꼴 크기 */
    border-radius: 10px;
    border: 1px solid #cccccc;
    box-sizing: border-box;

    &:focus {
        border: 2px solid #4186F5;
        outline: none;
    }
`;

export const LoginInput = styled(InputBase)`
    min-width: 220px;
    max-width: 332px; /* 최대 너비 설정 */
`;

export const RegisterInput = styled(InputBase)`
    min-width: 220px;
    max-width: 332px; /* 최대 너비 설정 */
`;

export const FileInput = styled.input`
    font-size: 1rem; /* 반응형 글꼴 크기 */
    box-sizing: border-box;
    &:focus {
        border: 2px solid #4186F5;
        outline: none;
    }
`;

export const RadioBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 332px; /* 최대 너비 설정 */
    height: 52px;
    border-radius: 10px;
    background-color: #f2f4f6;
    display: flex;
    text-align: center;
`;

export const CheckBoxInput = styled.input`
    position: absolute;
    width: 5px;
    height: 5px;
    opacity: 0; /* 시각적으로는 숨김 */
    margin: 0px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;

    &:checked + label {
        background-color: #4186F5;
        color: #ffffff;
        border-radius: 10px;
    }
`;

export const CheckboxLabel = styled.label`
    box-sizing: border-box;
    padding: 1rem 69px;
    cursor: pointer;
    border-radius: ${({ htmlFor }) => (htmlFor === 'male' ? '10px 0 0 10px' : '0 10px 10px 0')}; /* 조건부 border-radius */
    background-color: #f2f4f6;
    font-size: 1rem; /* 반응형 글꼴 크기 */
    font-weight: bold;
    color: #5C5C5C;
`;

export const CheckBoxLabel = styled.label`
    box-sizing: border-box;
    padding: 1rem 62px;
    cursor: pointer;
    border-radius: ${({ htmlFor }) => (htmlFor === 'admin' ? '10px 0 0 10px' : '0 10px 10px 0')}; /* 조건부 border-radius */
    background-color: #f2f4f6;
    font-size: 1rem; /* 반응형 글꼴 크기 */
    font-weight: bold;
    color: #5C5C5C;
`;

export const ErrorMsgContainer = styled.div`
    width: 100%;
    height: 20px;
    color: red;
    font-weight: 600;
    visibility: ${(props) => props.$visibleTrue ? 'visible' : 'hidden'};
`;

export const StyledLink = styled(Link)`
    margin-left: 5px;
    text-decoration: none;
    font-size: 1rem; /* 반응형 글꼴 크기 */
    font-weight: bold;
    color: #666666;
    transition: color 0.3s ease;

    &:hover, &:focus {
        color: #4186F5;
    }
`;

export const LoginSubmitButton = styled.button`
    width: 100%;
    max-width: 332px; /* 최대 너비 설정 */
    height: 56px;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;
    font-size: 1rem; /* 반응형 글꼴 크기 */
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
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleButton = styled.button`
    right: 10px; // 입력 필드 안쪽 여백 조정
    background: none;
    border: none;
    cursor: pointer;
    color: #007BFF; // 버튼 색상
    font-size: 1rem; // 반응형 글자 크기
    padding: 0;
    margin: 0;
`;

export const ResponsiveStyles = styled.div`
    @media (max-width: 768px) {
        ${FormContainer} {
            height: auto; /* 높이를 자동으로 조정 */
            padding: 10px;
        }

        ${LoginTitle} {
            font-size: 1.5rem; /* 글꼴 크기 조정 */
        }

        ${InputBase} {
            width: 100%; /* 너비를 100%로 설정 */
            max-width: none; /* 최대 너비 제한 해제 */
        }

        ${StyledLink} {
            font-size: 0.9rem; /* 글꼴 크기 조정 */
        }
    }
`;