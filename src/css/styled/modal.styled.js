// ModalStyled.js
import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    width: 330px;
    height: 264px;
    background-color: white;
    border-radius: 20px;
    display: flex; /* flexbox 사용 */
    flex-direction: column; /* 세로 방향으로 배치 */
    justify-content: space-between; /* 아래쪽으로 버튼을 밀어내기 */

`;

export const ModalText = styled.div`
    flex: 1; /* 텍스트가 가능한 공간을 차지하도록 설정 */
    display: flex;
    justify-content: center; /* 텍스트 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ConfirmButton = styled.button`
    flex: 1; /* 버튼을 동일한 너비로 설정 */
    height: 75px;
    background-color: #4186F5;
    color: white;
    border: none;
    border-radius: 0px 0px 20px 0px;
    cursor: pointer;
    font-size: 20px;
    &:hover {
        background-color: #367bcf; /* 호버 효과 추가 */
    }
`;

export const CancelButton = styled.button`
    flex: 1; /* 버튼을 동일한 너비로 설정 */
    height: 75px;
    background-color: #ccc;
    border: none;
    border-radius: 0px 0px 0px 20px;
    cursor: pointer;
    font-size: 20px;
    &:hover {
        background-color: #b3b3b3; /* 호버 효과 추가 */
    }
`;