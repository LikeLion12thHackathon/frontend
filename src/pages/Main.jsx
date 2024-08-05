import { useState } from 'react';
import { Header } from "../components/Header";
import { AskBox } from "../components/Main/AskBox";
import { AskDetail } from "../components/Main/AskDetail";

export const Main = () => {
    const [loadingMessage, setLoadingMessage] = useState('');

    return (
        <>
            <Header text="현재 증상 질문" />
            <AskBox setLoadingMessage={setLoadingMessage} />
            {!loadingMessage && <AskDetail />}
        </>
    );
};