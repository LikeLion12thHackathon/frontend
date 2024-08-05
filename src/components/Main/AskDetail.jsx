import React from 'react';
import * as Styled from '../../css/styled/ask.detail.styled';
import { useRecoilValue } from 'recoil'; // Recoil 훅 가져오기
import { questionState } from '../../hooks/questionState';
import ReactMarkdown from 'react-markdown';

export const AskDetail = () => {
    // Recoil 상태에서 questionState 가져오기
    const questionDetail = useRecoilValue(questionState);

    return (
        <Styled.DetailContainer>
            {questionDetail && ( // questionDetail이 존재할 때만 렌더링
                <>
                    <Styled.ChatBubble>
                        {questionDetail.question_text}
                    </Styled.ChatBubble>
                    <Styled.ChatBubble isAnswer={true} >
                        <ReactMarkdown
                            components={{
                                // 'li' 요소에 대한 스타일링 추가
                                li: ({ children }) => (
                                    <div style={{ marginLeft: '16px' }}>
                                        <strong>*</strong> {children}
                                    </div>
                                ),
                            }}
                        >{questionDetail.answer_text}</ReactMarkdown>
                    </Styled.ChatBubble>
                </>
            )}
        </Styled.DetailContainer>
    );
};
