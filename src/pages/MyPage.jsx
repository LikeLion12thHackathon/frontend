import { useState } from 'react';
import { Header } from '../components/Header';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../hooks/userState'
import { questionState } from '../hooks/questionState'
import * as Styled from '../css/styled/mypage.styled';
import defaultAvatar from '../assets/userimg.png';
import { Modal } from '../components/Modal';
import { postLogoutData } from '../function/login.register';
import { useNavigate } from "react-router-dom";

export const MyPage = () => {
    const navigate = useNavigate();
    const user = useRecoilValue(userState); // Recoil 상태에서 사용자 정보 가져오기
    const setUser = useSetRecoilState(userState); // Recoil 상태를 업데이트하기 위한 함수
    const setQuestion = useSetRecoilState(questionState); // Recoil 상태를 업데이트하기 위한 함수
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태

    const handleLogout = async () => {
        const url = '/api/v1/auth/signout';
        const data = await postLogoutData(url);

        if (data && data.successFlag) {
            console.log('로그아웃 성공'); // 로그아웃 성공 메시지
            setIsModalOpen(false); // 모달 닫기
            setUser({
                username: '',
                email: '',
                name: '',
                gender: '',
                last_login: null,
                avatar: '',
                is_admin: false,
                accessToken: '',
                refreshToken: '',
            }); // recoil 상태 초기화
            setQuestion(null); // questionState 초기화
            // persist 사용 시 recoil 상태 업데이트 시 sessionstorage에도 자동 업데이트, 따라서 세션 스토리지 정보 삭제는 불필요

            navigate('/'); // 처음으로 이동

        } else {
            console.error('로그아웃 실패', data ? data.message : '응답 없음'); // 로그아웃 실패 메시지
            // 에러 처리 로직 추가 가능
        }
    };

    // 정보 수정 핸들러
    const handleUpdateMyinfo = () => {
        navigate('/updateuserdata'); // 비밀번호 변경 페이지로 이동
    };

    // 비밀번호 변경 핸들러
    const handleUpdatePassword = () => {
        navigate('/updatepassword'); // 비밀번호 변경 페이지로 이동
    };

    return(
        <Styled.Container>
            <Header />
            <Styled.ProfileContainer>
                <Styled.MyprofileImg src={user && user.avatar ? user.avatar : defaultAvatar} alt={`${user && user.name ? user.name : '사용자'}의 프로필`} />
                <Styled.MynameText>{user && user.name}</Styled.MynameText>
                <Styled.UpdateButton onClick={handleUpdateMyinfo}>내 정보 조회</Styled.UpdateButton>
            </Styled.ProfileContainer>
            <Styled.AskContainer></Styled.AskContainer>
            <Styled.LoginUpdateBox>
            <Styled.LoginUpdateButton onClick={() => setIsModalOpen(true)}>로그아웃</Styled.LoginUpdateButton>
                <Styled.LoginUpdateButton onClick={handleUpdatePassword}>비밀번호 변경</Styled.LoginUpdateButton>
            </Styled.LoginUpdateBox>
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onConfirm={handleLogout} 
            />
        </Styled.Container>
    )
}