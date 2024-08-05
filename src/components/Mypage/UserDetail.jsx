import { Header } from "../Header.jsx";
import { useState, useEffect } from "react";
import * as Styled from "../../css/styled/signin_up.styled.js";
import { useRecoilValue } from "recoil";
import { userState } from "../../hooks/userState.js"; // userState의 경로를 확인하세요
import profileavatar from "../../assets/profileimg.png";

export const UserDetail = () => {
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
            <Styled.FormContainer>
                <form>
                    <Styled.FormInnerWrapper>
                    <Styled.StyledLabel>프로필 사진</Styled.StyledLabel>
                    <Styled.ImageBox>
                        <img src={user.avatar || profileavatar} alt="프로필" style={{ margin: '20px', width: '200px', height: '200px' }} />
                    </Styled.ImageBox>
                    </Styled.FormInnerWrapper>
                    <Styled.FormInnerWrapper>
                        <Styled.StyledLabel htmlFor="username">아이디</Styled.StyledLabel>
                        <Styled.RegisterInput 
                            type="text"
                            id="username"
                            name="username"
                            required
                            value={username}
                            readOnly // 읽기 전용
                        />
                    </Styled.FormInnerWrapper>
                    <Styled.FormInnerWrapper>
                        <Styled.StyledLabel htmlFor="password">비밀번호</Styled.StyledLabel>
                        <Styled.RegisterInput 
                            type="password"
                            id="password"
                            name="password"
                            required
                            value="********" // 비밀번호는 보안상 표시하지 않음
                            readOnly // 읽기 전용
                        />
                    </Styled.FormInnerWrapper>
                    <Styled.FormInnerWrapper>
                        <Styled.StyledLabel htmlFor="name">이름</Styled.StyledLabel>
                        <Styled.RegisterInput 
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={name}
                            readOnly // 읽기 전용
                        />
                    </Styled.FormInnerWrapper>
                    <Styled.FormInnerWrapper>
                        <Styled.StyledLabel>성별</Styled.StyledLabel>
                        <Styled.RadioBox>                      
                            <Styled.CheckBoxInput
                                type="radio"
                                name="gender"
                                value="male"
                                id="male"
                                checked={gender === 'male'}
                                readOnly // 읽기 전용
                            />
                            <Styled.CheckboxLabel htmlFor="male">
                                남성
                            </Styled.CheckboxLabel>   
                            <Styled.CheckBoxInput
                                type="radio"
                                name="gender"
                                value="female"
                                id="female"
                                checked={gender === 'female'}
                                readOnly // 읽기 전용
                            />
                            <Styled.CheckboxLabel htmlFor="female">
                                여성
                            </Styled.CheckboxLabel>
                        </Styled.RadioBox>
                    </Styled.FormInnerWrapper>
                    <Styled.FormInnerWrapper>
                        <Styled.StyledLabel htmlFor="email">이메일</Styled.StyledLabel>
                        <Styled.RegisterInput
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            readOnly // 읽기 전용
                        />
                    </Styled.FormInnerWrapper>
                    <Styled.FormInnerWrapper>
                        <Styled.StyledLabel htmlFor="admin">관리자 여부</Styled.StyledLabel>
                        <Styled.RadioBox>                
                            <Styled.CheckBoxInput
                                type="radio"
                                name="admin"
                                value="true"
                                id="admin"
                                checked={admin === true}
                                readOnly // 읽기 전용
                            />
                            <Styled.CheckBoxLabel htmlFor="admin">
                                관리자
                            </Styled.CheckBoxLabel>
                            <Styled.CheckBoxInput
                                type="radio"
                                name="admin"
                                value="false"
                                id="user"
                                checked={admin === false}
                                readOnly // 읽기 전용
                            />
                            <Styled.CheckBoxLabel htmlFor="user">
                                사용자
                            </Styled.CheckBoxLabel>
                        </Styled.RadioBox>
                    </Styled.FormInnerWrapper>
                </form>
            </Styled.FormContainer>
            
        </>
    );
};
