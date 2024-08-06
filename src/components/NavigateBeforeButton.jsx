import * as Styled from "../css/styled/icon.button.styled";
import beforeicon from "../assets/navigatebeforeicon.png";

export const NavigateBeforeButton = () => {
    const handleBack = () => {
        window.history.back(); // 이전 페이지로 이동
    };

    return (
        <>
            <Styled.NavigateBeforeButton
                src={beforeicon}
                alt="뒤로가기 버튼"
                onClick={handleBack}/>
        </>
    );
}