import { AskBox } from "../components/Main/AskBox";
import { Header } from "../components/Header";
export const Main = () => {
    return(
        <>
            <Header text="현재 증상 질문" />
            <AskBox />
        </>
    )
}