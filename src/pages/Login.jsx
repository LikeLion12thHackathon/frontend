import { useState } from "react";
import * as Styled from "../css/styled/signin_up.styled.js";
import { EmailFormat } from "../constant/user.constraints.js";
import { postLoginDataWith } from "../function/login.register.js";
import { useNavigate } from "react-router-dom";
import { getAccesstoken, setToken } from "../function/common.js";
import { useSetRecoilState } from 'recoil';
import { userState } from '../hooks/userState.js'; // userState의 경로 확인
import { Header } from "../components/Header.jsx";

export const Login = () => {
    const navigate = useNavigate();
    const setUser = useSetRecoilState(userState); // Recoil 상태 설정 함수
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function onChange(e) {
      // deconstructed obj
        const {
          target: { name, value },
        } = e;

        switch(name) {
          case "username":
            setUsername(value);
          
            (!value?.match(EmailFormat)) ? setError("아이디 형식이 올바르지 않습니다") : setError("");           
            break;
          case "password":
            setPassword(value);
          
            (value?.length < 8) ? setError("비밀번호는 8자리 이상 입력해주세요") : setError("");
            break;
        }
      };
    
    //  로그인 버튼 누를때의 함수
    async function onSubmit(e) {
        e.preventDefault();

        // 서버로 데이터 보내는 로직 추가
        const loginData = {
            username: username,
            password: password,
        };

        // 제대로 입력하지 않으면 라우팅되는거 막기
        if(loginData.username === "" || loginData.password === "") {
            // ToastifyWarn("회원가입을 해주시거나, 다시 시도해주세요");
            return;
        }
        
        // 유저 정보를 잘 넘기면 해당 로그인 유저에 대한 데이터 반환
        const data = await postLoginDataWith(loginData,'/api/v1/auth/signin');        
        
        if (data && data.successFlag) {
            const user = data.data.user;

            // Recoil 상태에 사용자 정보 저장
            setUser({
                username: user.username,
                email: user.email,
                name: user.name,
                gender: user.gender,
                last_login: user.last_login,
                avatar: user.avatar,
                is_admin: user.is_admin,
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
            });

            navigate('/main'); // 메인 페이지로 이동
        } else {
            // 로그인 실패 처리
            setError("로그인에 실패했습니다. 다시 시도해주세요.");
            return;
        }
    }

    return (
        <>
            <Header />
            <Styled.FormContainer>
                <form>
                    <Styled.FormInnerWrapper>
                            <Styled.LoginInput 
                                type="username"
                                id="username"
                                name="username"
                                placeholder="아이디"
                                required
                                value={username}
                                onChange={onChange}
                            />
                    </Styled.FormInnerWrapper>
                    <Styled.FormInnerWrapper>
                            <Styled.LoginInput 
                                type="password"
                                id="password"
                                name="password"
                                placeholder="비밀번호"
                                required
                                value={password}
                                onChange={onChange}
                            />
                    </Styled.FormInnerWrapper>

                    <Styled.FormInnerWrapper>
                        <Styled.ErrorMsgContainer $visibleTrue={`${error?.length > 0}`}>{error}</Styled.ErrorMsgContainer>
                    </Styled.FormInnerWrapper>

                    
                    <Styled.FormInnerWrapper>
                        <Styled.LoginSubmitButton
                            type="button"
                            value="login"
                            disabled={error?.length > 0}
                            onClick={onSubmit}
                        >로그인
                        </Styled.LoginSubmitButton>
                    </Styled.FormInnerWrapper>
                    <Styled.LabelBox>
                        <span style={{
                            fontWeight: "bold",
                            color: "#666666",
                        }}>
                            처음이세요?
                        </span>
                        <Styled.StyledLink to="/register">
                            회원가입
                        </Styled.StyledLink>
                    </Styled.LabelBox>
                    {/* <ToastContainer /> */} 
                </form>
            </Styled.FormContainer>
        </>
    )
}