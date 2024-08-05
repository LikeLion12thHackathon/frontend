import { useState } from "react";
import * as Styled from "../../css/styled/signin_up.styled.js";
import { Header } from "../Header.jsx";
import { UserRules } from "../../constant/user.constraints.js";
import { updatePassword } from "../../function/login.register.js"; // 비밀번호 변경 함수의 경로 확인
import { useNavigate } from "react-router-dom"; // useNavigate 추가

export const UpdatePassword = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);
    const [successMessage, setSuccessMessage] = useState(''); // 성공 메시지 상태 추가
    const [showCurrentPassword, setShowCurrentPassword] = useState(false); // 현재 비밀번호 표시 상태
    const [showNewPassword, setShowNewPassword] = useState(false); // 새 비밀번호 표시 상태
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // 확인 비밀번호 표시 상태

    const validatePassword = () => {
        const errors = [];
        if (!currentPassword) {
            errors.push('현재 비밀번호를 입력해 주세요.');
        }
        if (!UserRules.password.length.rule.test(newPassword)) {
            errors.push(UserRules.password.length.message);
        }
        if (!UserRules.password.commonPasswords.rule.test(newPassword)) {
            errors.push(UserRules.password.commonPasswords.message);
        }
        if (!UserRules.password.noNumericOnly.rule.test(newPassword)) {
            errors.push(UserRules.password.noNumericOnly.message);
        }
        if (!UserRules.password.similarToPersonalInfo.rule.test(newPassword)) {
            errors.push(UserRules.password.similarToPersonalInfo.message);
        }
        if (newPassword !== confirmPassword) {
            errors.push('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 submit 동작 방지
        const validationErrors = validatePassword();
        if (validationErrors.length > 0) {
            setErrorMessages(validationErrors);
            setSuccessMessage(''); // 에러가 발생하면 성공 메시지 초기화
        } else {
            const passwordObj = {
                old_password: currentPassword,
                new_password: newPassword
            };

            const response = await updatePassword(passwordObj, '/api/v1/auth/change-password');
            if (response && response.successFlag) {
                setSuccessMessage('비밀번호가 성공적으로 변경되었습니다.');
                setErrorMessages([]); // 에러 메시지 초기화
                setTimeout(() => {
                    navigate("/"); // 이전 페이지로 돌아감
                }, 2000); // 2초 후에 이전 페이지로 이동
            } else {
                setErrorMessages(['비밀번호 변경에 실패했습니다. 다시 시도해 주세요.']);
                setSuccessMessage(''); // 실패하면 성공 메시지 초기화
            }
        }
    };

    return (
        <>
            <Header text="비밀번호 변경" />
            <Styled.FormContainer>
                <form>
                    <Styled.FormInnerWrapper>
                        <Styled.InputContainer>
                            <Styled.LoginInput 
                                type={showCurrentPassword ? "text" : "password"}
                                placeholder='현재 비밀번호' 
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                            />
                            <Styled.ToggleButton onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                                {showCurrentPassword ? '숨기기' : '보기'}
                            </Styled.ToggleButton>
                        </Styled.InputContainer>
                    </Styled.FormInnerWrapper>
                    <Styled.FormInnerWrapper>
                        <Styled.InputContainer>
                            <Styled.LoginInput 
                                type={showNewPassword ? "text" : "password"}
                                placeholder='새 비밀번호' 
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                            <Styled.ToggleButton onClick={() => setShowNewPassword(!showNewPassword)}>
                                {showNewPassword ? '숨기기' : '보기'}
                            </Styled.ToggleButton>
                        </Styled.InputContainer>
                    </Styled.FormInnerWrapper>
                    <Styled.FormInnerWrapper>
                        <Styled.InputContainer>
                            <Styled.LoginInput 
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder='새 비밀번호 확인' 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <Styled.ToggleButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? '숨기기' : '보기'}
                            </Styled.ToggleButton>
                        </Styled.InputContainer>
                    </Styled.FormInnerWrapper>
                    <Styled.FormInnerWrapper>
                        <Styled.ErrorMsgContainer $visibleTrue={`${errorMessages.length > 0}`}>
                            {errorMessages.map((error, index) => (
                                <div key={index}>{error}</div>
                            ))}
                        </Styled.ErrorMsgContainer>
                    </Styled.FormInnerWrapper>
                    <Styled.FormInnerWrapper>
                        <Styled.LoginSubmitButton
                            type="submit"
                            disabled={errorMessages.length > 0}
                            onSubmit={handleSubmit}
                        >
                            변경하기
                        </Styled.LoginSubmitButton>
                    </Styled.FormInnerWrapper>
                </form>
            </Styled.FormContainer>
        </>
    );
};
