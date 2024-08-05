import styled from "styled-components";

export const DetailContainer = styled.div`
    width: 100%;
    height: 200%;
    background-color: #ffffff; 
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 기본적으로 왼쪽 정렬 */
    margin: 20px; 
`;

export const ChatBubble = styled.div`
    background-color: #E8EDF4; /* 배경색 */
    box-sizing: border-box;
    border-radius: 20px; 
    padding: 20px; 
    max-width: 70%; 
    align-self: ${({ isAnswer }) => (isAnswer ? 'flex-start' : 'flex-end')}; /* 대답은 오른쪽 정렬 */
    overflow-wrap: break-word; /* 긴 단어가 있을 경우 줄 바꿈 */
    word-wrap: break-word; /* 지원하는 브라우저를 위해 추가 */
    white-space: pre-wrap; /* 줄 바꿈 및 공백 유지 */
`;
