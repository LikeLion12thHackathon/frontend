import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
export const HeaderText = styled.div`
    position: relative; /* position을 relative로 변경 */
    left: 3vh;
    font-weight: bold;
    font-size: 1.75rem;
    margin: 20px 0px; /* 아래에 여백 추가 (필요에 따라 조정 가능) */
    width: 100%;
    height: 2.8rem;
`