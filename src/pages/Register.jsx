import { useState } from "react";
import { ErrorMsgContainer, FormInnerWrapper, RegisterInput, LoginSubmitButton, LoginTitle, StyledForm, StyledLabel, StyledLink } from "../css/styled/signin_up.styled";
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
        profileimg: false,
        name: false,
        gender: false,
        admin: false,
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
                setProfileimg(value);
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
                setAdmin(value === "true"); // 관리자 여부
                setValid((prevState) => ({ ...prevState, admin: true })); // 별도의 유효성 검사 필요 시 추가
                break;
        }
        setError(result); // 최종 에러 메시지 설정
    }
    

    async function onSubmit(event) {
        event.preventDefault();
        // 유효하지 않은 정보가 하나라도 있으면 안됨
        if(Object.values(valid).filter((value) => value === false).length > 0) {
            alert("제대로 입력해주세요");
            // ToastifyWarn("모든 항목을 제대로 입력해주세요");
            return;
        }
        // 서버로 보낼 데이터 객체형태로 묶기
        const formattedUserData = {
            username: username,
            password: password,
            email: email,
            profile_photo: profileimg,
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
            <LoginTitle>프로필 설정</LoginTitle>
            <FormInnerWrapper>
                {/* <Avatar 
                    src={profileimg} 
                    style={{margin:'20px'}} 
                    size={200} 
                    onClick={()=>{fileInput.current.click()}}/> */}
                <StyledLabel htmlFor="profileimg">프로필 사진</StyledLabel>
                <input
                    type="file"
                    id="profileimg"
                    name="profileimg"
                    required
                    value={profileimg}
                    onChange={onChange}
                />
            </FormInnerWrapper>
            <FormInnerWrapper>
                <StyledLabel htmlFor="username">아이디</StyledLabel>
                <RegisterInput 
                    type="text"
                    id="username"
                    name="username"
                    required
                    value={username}
                    onChange={onChange}
                />
            </FormInnerWrapper>
            <FormInnerWrapper>
                <StyledLabel htmlFor="password">비밀번호</StyledLabel>
                <RegisterInput 
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={onChange}
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
                    onChange={onChange}
                />
            </FormInnerWrapper>
            <FormInnerWrapper>
                <StyledLabel>성별</StyledLabel>
                <div>
                    <label>
                        <input
                            type="radio"
                            id="gender"
                            name="gender"
                            value="male"
                            checked={gender === 'male'}
                            onChange={onChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="gender"
                            name="gender"
                            value="female"
                            checked={gender === 'female'}
                            onChange={onChange}
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
                    onChange={onChange}
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
                            onChange={onChange}
                        />
                        관리자
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="admin"
                            value="false"
                            checked={admin === false}
                            onChange={onChange}
                        />
                        일반 사용자
                    </label>
                </div>
            </FormInnerWrapper>
            <FormInnerWrapper>
                <ErrorMsgContainer $visibleTrue={`${error?.length > 0}`}>{error}</ErrorMsgContainer>
            </FormInnerWrapper>

            <FormInnerWrapper>
                <span style={{
                        fontWeight: "lighter",
                        color: "#aeaeae"
                }}>
                    계정이 없으신가요?
                </span>
                <StyledLink to="/">
                    로그인하기
                </StyledLink>
            </FormInnerWrapper>
            <FormInnerWrapper>
                <LoginSubmitButton
                    type="button"
                    value="register"
                    disabled={error?.length > 0}
                    onClick={onSubmit}
                >회원가입</LoginSubmitButton>
            </FormInnerWrapper>
            {/* <ToastContainer /> */}
        </>
    )
}