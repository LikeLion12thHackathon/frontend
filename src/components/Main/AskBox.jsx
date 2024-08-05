import { useState, useEffect } from 'react';
import * as Styled from "../../css/styled/ask.box.styled";
import enter from '../../assets/entericon.png';
import { postAskData } from "../../function/ask";
import { useSetRecoilState } from 'recoil';
import { questionState } from '../../hooks/questionState';

export const AskBox = ({ setLoadingMessage }) => {
    const [question, setQuestion] = useState('');
    const [loadingMessage, setLoadingMessageLocal] = useState('');
    const [displayedDots, setDisplayedDots] = useState([]);
    const setQuestionData = useSetRecoilState(questionState);

    const handleChange = (event) => {
        setQuestion(event.target.value);
        setLoadingMessage('');
    };

    const handleSubmit = async (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            await submitQuestion();
        }
    };

    const submitQuestion = async () => {
        if (!question.trim()) {
            alert("질문을 입력해주세요.");
            return;
        }

        const askObj = { question_text: question };
        const url = '/api/v1/questions/';

        setLoadingMessage("잠시만 기다려 주세요...");
        setLoadingMessageLocal("잠시만 기다려 주세요...");

        const result = await postAskData(askObj, url);
        if (result && result.successFlag) {
            setQuestionData(result.data);
            alert("질문이 성공적으로 제출되었습니다.");
            setQuestion('');
        } else {
            alert("질문 제출에 실패했습니다.");
        }

        setLoadingMessage('');
        setLoadingMessageLocal('');
        setDisplayedDots([]);
    };

    useEffect(() => {
        if (loadingMessage) {
            const dots = '...';
            setDisplayedDots([]);

            dots.split('').forEach((dot, index) => {
                setTimeout(() => {
                    setDisplayedDots((prev) => [...prev, dot]);
                }, index * 300);
            });
        }
    }, [loadingMessage]);

    return (
        <Styled.AskBox>
            <Styled.AskLabel>현재 증상은 무엇인가요?</Styled.AskLabel>
            <Styled.AskInputContainer>
                <Styled.AskInput
                    as="textarea"
                    placeholder="증상을 입력해 주세요."
                    value={loadingMessage || question}
                    onChange={handleChange}
                    onKeyDown={handleSubmit}
                    readOnly={!!loadingMessage}
                />
                <Styled.SubmitButton onClick={submitQuestion} disabled={!!loadingMessage}>
                    <img src={enter} alt="Submit" style={{ width: '1rem', height: '1rem' }} />
                </Styled.SubmitButton>
            </Styled.AskInputContainer>
            <div>
                {displayedDots.map((dot, index) => (
                    <Styled.Dot key={index} style={{ animationDelay: `${index * 300}ms` }}>{dot}</Styled.Dot>
                ))}
            </div>
        </Styled.AskBox>
    );
};
