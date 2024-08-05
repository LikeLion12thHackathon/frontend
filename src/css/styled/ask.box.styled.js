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

export const AskInput = styled.textarea`
    width: 332px;
    height: 104px;
    background-color: #E8EDF4;
    border-radius: 1.25rem;
    border: 2px solid #4186F5;
    font-size: 1rem;
    padding: 1rem; /* 위쪽 패딩을 크게 설정 */
    padding-right: 50px; /* 버튼 공간을 위한 오른쪽 패딩 추가 */
    box-sizing: border-box; /* 패딩과 보더를 포함 */
    resize: none; /* 사용자가 크기를 조정할 수 없도록 설정 */
    overflow: auto; /* 텍스트가 넘칠 경우 스크롤바 표시 */
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
    right: 15px; /* 오른쪽 여백 */
    bottom: 10px; /* 아래쪽 여백 */
    background-color: #4186F5; /* 버튼 배경색 */
    color: white;
    border: none;
    border-radius: 50%; /* 둥근 버튼 */
    cursor: pointer; /* 커서 포인터로 변경 */
    transition: background-color 0.3s; /* 배경색 전환 효과 */

    &:hover {
        background-color: #3578d5; /* 호버 시 색상 변경 */
    }
`;