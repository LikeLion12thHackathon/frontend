import * as Styled from '../css/styled/modal.styled'; // 모달 스타일을 정의하는 파일을 따로 만들어주세요

export const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <Styled.ModalOverlay>
            <Styled.ModalContainer>
                <Styled.ModalText>로그아웃 하시겠습니까?</Styled.ModalText>
                <Styled.ButtonContainer>
                    <Styled.CancelButton onClick={onClose}>취소</Styled.CancelButton>
                    <Styled.ConfirmButton onClick={onConfirm}>로그아웃</Styled.ConfirmButton>
                </Styled.ButtonContainer>
            </Styled.ModalContainer>
        </Styled.ModalOverlay>
    )
}