import { useState, useEffect } from 'react';
import * as Styled from "../../css/styled/ask.box.styled";
import enter from '../../assets/entericon.png';
import { postAskData } from "../../function/ask";
import { useSetRecoilState } from 'recoil';
import { questionState } from '../../hooks/questionState';

export const AskBox = () => {
    const [question, setQuestion] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('');
    const [displayedDots, setDisplayedDots] = useState([]);
    const setQuestionData = useSetRecoilState(questionState); // Recoil 상태 업데이트 함수

    const handleChange = (event) => {
        setQuestion(event.target.value);
        setLoadingMessage(''); // 질문 입력 시 로딩 메시지 초기화
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

        // 로딩 메시지 설정
        setLoadingMessage("잠시만 기다려 주세요...");

        const result = await postAskData(askObj, url);
        if (result && result.successFlag) {
            // 질문 데이터 Recoil 상태에 저장
            setQuestionData(result.data); // Recoil 상태에 결과 저장

            alert("질문이 성공적으로 제출되었습니다.");
            setQuestion(''); // 제출 후 질문 초기화
        } else {
            alert("질문 제출에 실패했습니다.");
        }

        // 로딩 메시지 초기화
        setLoadingMessage('');
    };

    useEffect(() => {
        if (loadingMessage) {
            const dots = '...';
            setDisplayedDots([]); // 초기화
    
            dots.split('').forEach((dot, index) => {
                setTimeout(() => {
                    setDisplayedDots((prev) => [...prev, dot]);
                }, index * 300); // 각 점이 300ms 간격으로 나타나도록 설정
            });
        }
    }, [loadingMessage]);

    return (
        <Styled.AskBox>
            <Styled.AskLabel>현재 증상은 무엇인가요?</Styled.AskLabel>
            <Styled.AskInput
                as="textarea" // textarea로 사용
                placeholder="증상을 입력해 주세요."
                value={loadingMessage || question} // 로딩 메시지가 있을 경우 이를 표시
                onChange={handleChange}
                onKeyDown={handleSubmit}
                readOnly={!!loadingMessage} // 로딩 메시지가 있는 경우 읽기 전용으로 설정
            />
             <div>
                {displayedDots.map((dot, index) => (
                    <Styled.Dot key={index} style={{ animationDelay: `${index * 300}ms` }}>{dot}</Styled.Dot>
                ))}
            </div>
            <Styled.SubmitButton onClick={submitQuestion} disabled={!!loadingMessage}> {/* 로딩 중일 때 버튼 비활성화 */}
                <img src={enter} alt="Submit" style={{ width: '1rem', height: '1rem' }} />
            </Styled.SubmitButton>
        </Styled.AskBox>
    );
};

