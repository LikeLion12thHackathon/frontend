import { useState } from "react";
import * as Styled from "../css/styled/signin_up.styled";
import { Header } from "../components/Header";
import { isRequired, MinimumLength, CantContainSpace, EmailFormat, SpecialText, UserRules } from "../constant/user.constraints";
//import { sendReqAndSaveToken } from "../../function/login.register";
import { postRegisterDataWith } from "../function/login.register";
import profileavatar from "../assets/profileimg.png";

export const Register = () => {
    const BACK_API_URL = process.env.REACT_APP_BACKEND_API_URL;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [profileimg, setProfileimg] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [admin, setAdmin] = useState(false);
    
    const [error, setError] = useState("");
    const [valid, setValid] = useState({
        username: false,
        password: false,
        email: false,
        profileimg: true, // 프로필 이미지는 유효성 검사에서 제외
        name: false,
        gender: false,
        admin: false, // 기본값을 true로 설정 (true/false 모두 허용)
    });

    function validation(value, constraints) {
        const result = [];
        // 만약 제한 조건으로 들어온 값들 중에 false로 넘어온 값들이 있으면 그걸 배열에 다시 담습니다.
        constraints.map((constraint) => {
            if(constraint.rule.test(value) === false) {
                result.push(constraint.message);
            }
        })
        
        // 제한 조건에 해당 안 되는게 하나라도 있으면 배열 중 가장 앞 값을 반환
        return (result.length > 0) ? result[0] : null;
    }

    function onChange(event) {
        const {
            target: { name, value }
        } = event;
        let result = null;
    
        switch(name) {
            case "username":
                setUsername(value);
                result = validation(value, [UserRules.id]); // 아이디 규칙 적용
                setValid((prevState) => ({...prevState, username: result === null}));
                break;
            case "password":
                setPassword(value);
                result = validation(value, [
                    UserRules.password.length, 
                    UserRules.password.commonPasswords, 
                    UserRules.password.noNumericOnly, 
                    UserRules.password.similarToPersonalInfo
                ]); // 비밀번호 규칙 적용
                setValid((prevState) => ({...prevState, password: result === null}));
                break;
            case "email":
                setEmail(value);
                result = validation(value, [isRequired, CantContainSpace, EmailFormat]); // 이메일 규칙
                setValid((prevState) => ({...prevState, email: result === null}));
                break;
            case "profileimg":
                setProfileimg(value || ""); // 파일 값이 없으면 빈 문자열로 설정
                // 프로필 이미지는 유효성 검사에서 제외하므로 별도의 유효성 검사 없음
                result = validation(value, [isRequired]); // 프로필 이미지 규칙
                setValid((prevState) => ({...prevState, profileimg: result === null}));
                break;
            case "name":
                setName(value);
                result = validation(value, [isRequired, MinimumLength(2), CantContainSpace]); // 이름 규칙
                setValid((prevState) => ({...prevState, name: result === null}));
                break;
            case "gender":
                setGender(value);
                result = validation(value, [isRequired]); // 성별 규칙
                setValid((prevState) => ({...prevState, gender: result === null}));
                break;
            case "admin":
                setAdmin(value === "true"); // true/false 모두 허용
                setValid((prevState) => ({ ...prevState, admin: true })); // 별도의 유효성 검사 필요 
                break;
        }
        setError(result); // 최종 에러 메시지 설정
    }
    

    async function onSubmit(event) {
        event.preventDefault();
        // 유효하지 않은 정보가 하나라도 있으면 안됨
        if(Object.keys(valid).some((key) => 
            (key !== 'profileimg' && key !== 'admin' && valid[key] === false))) {
            alert("제대로 입력해주세요");
            // ToastifyWarn("모든 항목을 제대로 입력해주세요");
            return;
        }
        // 서버로 보낼 데이터 객체형태로 묶기
        const formattedUserData = {
            username: username,
            password: password,
            email: email,
            profile_photo: profileimg || "",
            name: name,
            gender: gender,
            is_admin: admin,
        }

        const resultAfterPost = await postRegisterDataWith(formattedUserData,'/api/v1/auth/signup');

        // true값을 반환해오면, login페이지로 이동
        if(resultAfterPost && resultAfterPost.successFlag) {
            window.location.href = "/";
            // ToastifySuccess("회원가입 성공");
        } else { 
            // ToastifyError("회원가입 실패");
        }
    }



    return (
        <>
            <Header text="프로필 설정" />
            <Styled.FormContainer>
                <form onSubmit={onSubmit}>
                    <Styled.FormInnerWrapper>
                        {/* <Avatar 
                            src={profileimg} 
                            style={{margin:'20px'}} 
                            size={200} 
                            onClick={() => {fileInput.current.click()}} 
                        /> */}
                        <Styled.StyledLabel htmlFor="profileimg">프로필 사진</Styled.StyledLabel>
                        <Styled.FileInput
                            type="file" 
                            id="profileimg" 
                            name="profileimg" 
                            required 
                            onChange={onChange} 
                        />
                    </Styled.FormInnerWrapper>

                    <Styled.FormInnerWrapper>
                        <Styled.StyledLabel htmlFor="username">아이디</Styled.StyledLabel>
                        <Styled.RegisterInput 
                            type="text"
                            id="username"
                            name="username"
                            required
                            value={username}
                            onChange={onChange}
                        />
                    </Styled.FormInnerWrapper>

                    <Styled.FormInnerWrapper>
                        <Styled.StyledLabel htmlFor="password">비밀번호</Styled.StyledLabel>
                        <Styled.RegisterInput 
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={onChange}
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
                            onChange={onChange}
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
                                onChange={onChange}
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
                                onChange={onChange}
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
                            onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}
                                />
                            <Styled.CheckBoxLabel htmlFor="user">
                                사용자
                            </Styled.CheckBoxLabel>
                        </Styled.RadioBox>
                    </Styled.FormInnerWrapper>

                    <Styled.FormInnerWrapper>
                        <Styled.ErrorMsgContainer $visibleTrue={`${error?.length > 0}`}>
                            {error}
                        </Styled.ErrorMsgContainer>
                    </Styled.FormInnerWrapper>

                    <Styled.FormInnerWrapper>
                        <Styled.LoginSubmitButton
                            type="submit"
                            disabled={error?.length > 0}
                        >
                            회원가입
                        </Styled.LoginSubmitButton>
                    </Styled.FormInnerWrapper>

                    <Styled.LabelBox>
                        <span style={{ fontWeight: "bold", color: "#666666" }}>계정이 있으신가요?</span>
                        <Styled.StyledLink to="/">
                            로그인
                        </Styled.StyledLink>
                    </Styled.LabelBox>
                    {/* <ToastContainer /> */}
                </form>
            </Styled.FormContainer>
        </>

    )
}