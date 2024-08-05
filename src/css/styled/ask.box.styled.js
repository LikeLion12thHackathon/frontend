import styled, { keyframes } from 'styled-components';

export const AskBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* 자식 요소를 위쪽으로 정렬 */
    box-sizing: border-box;
    align-items: center;
    position: relative; /* SubmitButton의 위치를 기준으로 설정 */
`;


export const AskLabel = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2.6rem;
`;

export const AskInputContainer = styled.div`
    position: relative; /* 버튼을 절대 위치로 설정하기 위해 필요 */
    width: 332px; /* 고정된 너비 */
`;

export const AskInput = styled.textarea`
    width: 100%; /* 고정된 너비에 맞춤 */
    height: 104px;
    background-color: #E8EDF4;
    border-radius: 1.25rem;
    border: 2px solid #4186F5;
    font-size: 1rem;
    padding: 1rem; /* 위쪽 패딩 */
    padding-right: 1rem; /* 버튼 공간을 위한 오른쪽 패딩 추가 */
    box-sizing: border-box;
    resize: none;
    overflow: auto;

    /* 스크롤바 스타일 */
    &::-webkit-scrollbar {
        display: none;
    }

    &::-webkit-scrollbar-track {
        background: transparent; /* 스크롤바 배경 색상 */
    }

`;

// 애니메이션 정의
export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Dot = styled.span`
    margin-top: 15vh;
    font-size: 4.5rem;
    color: #4186F5;
    display: inline-block;
    opacity: 0; /* 초기 상태는 투명하게 설정 */
    animation: ${fadeIn} 0.5s forwards; /* 애니메이션 적용 */
`;


export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    position: absolute; /* 버튼을 절대 위치로 설정 */
    right: 10px; /* 오른쪽 여백 */
    bottom: 15px; /* 아래쪽 여백 */
    background-color: #4186F5;
    color: white;
    border: none;
    border-radius: 50%; /* 둥근 버튼 */
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #3578d5; /* 호버 시 색상 변경 */
    }
`;