import styled from 'styled-components';

export const Container = styled.div`
    background-color: #E8EDF4;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    gap: 5vh; /* 요소 간의 간격을 조절합니다. */
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const ProfileContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const MyprofileImg = styled.img`
    width: 136px;
    height: 136px;
    border-radius: 50%;
`

export const MynameText = styled.div`
    font-size: 32px;
    font-weight: bold;     
`

export const UpdateButton = styled.button`
    width: 107px;
    height: 35px;
    background-color: #ffffff;
    border: none;
    border-radius: 30px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #f0f0f0; /* 마우스 오버 시 배경색 변경 */
    }

`
export const AskContainer = styled.div`
    background-color: #4186F5;
    width: 330px;
    height: 120px;
    border-radius: 20px;
`
export const LoginUpdateBox = styled.div`
    width: 330px;
    height: 125px;
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const LoginUpdateButton = styled.div`
    font-size: 18px;
    display: flex; /* Flexbox를 사용하여 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
`