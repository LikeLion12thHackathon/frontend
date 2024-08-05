import { Header } from "../Header.jsx";
import { useState, useEffect } from "react";
import { ErrorMsgContainer, FormInnerWrapper, RegisterInput, StyledLabel } from "../../css/styled/signin_up.styled.js";
import { useRecoilValue } from "recoil";
import { userState } from "../../hooks/userState"; // userState의 경로를 확인하세요
import profileavatar from "../../assets/profileimg.png";

export const UpdateUserdata = () => {
    const user = useRecoilValue(userState); // Recoil 상태에서 사용자 정보 가져오기

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [admin, setAdmin] = useState(false);
    
    useEffect(() => {
        if (user) {
            setUsername(user.username || "");
            setEmail(user.email || "");
            setName(user.name || "");
            setGender(user.gender || "");
            setAdmin(user.is_admin || false);
        }
    }, [user]);

    return (
        <>
            <Header text="내 정보 조회" />
            <FormInnerWrapper>
                <StyledLabel>프로필 사진</StyledLabel>
                <img src={user.avatar || profileavatar} alt="프로필" style={{ margin: '20px', width: '200px', height: '200px' }} />
            </FormInnerWrapper>
            <FormInnerWrapper>
                <StyledLabel htmlFor="username">아이디</StyledLabel>
                <RegisterInput 
                    type="text"
                    id="username"
                    name="username"
                    required
                    value={username}
                    readOnly // 읽기 전용
                />
            </FormInnerWrapper>
            <FormInnerWrapper>
                <StyledLabel htmlFor="password">비밀번호</StyledLabel>
                <RegisterInput 
                    type="password"
                    id="password"
                    name="password"
                    required
                    value="********" // 비밀번호는 보안상 표시하지 않음
                    readOnly // 읽기 전용
                />
            </FormInnerWrapper>
            <FormInnerWrapper>
                <StyledLabel htmlFor="name">이름</StyledLabel>
                <RegisterInput 
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    readOnly // 읽기 전용
                />
            </FormInnerWrapper>
            <FormInnerWrapper>
                <StyledLabel>성별</StyledLabel>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === 'male'}
                            readOnly // 읽기 전용
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === 'female'}
                            readOnly // 읽기 전용
                        />
                        Female
                    </label>
                </div>
            </FormInnerWrapper>
            <FormInnerWrapper>
                <StyledLabel htmlFor="email">이메일</StyledLabel>
                <RegisterInput
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    readOnly // 읽기 전용
                />
            </FormInnerWrapper>
            <FormInnerWrapper>
                <StyledLabel htmlFor="admin">관리자 여부</StyledLabel>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="admin"
                            value="true"
                            checked={admin === true}
                            readOnly // 읽기 전용
                        />
                        관리자
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="admin"
                            value="false"
                            checked={admin === false}
                            readOnly // 읽기 전용
                        />
                        일반 사용자
                    </label>
                </div>
            </FormInnerWrapper>
        </>
    );
};
