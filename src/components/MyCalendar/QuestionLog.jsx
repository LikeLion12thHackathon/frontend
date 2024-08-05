import React, { useEffect, useState } from 'react';
import * as Styled from '../../css/styled/ask.detail.styled';
import { getAllSymptoms } from '../../function/ask';

export const QuestionLog = ({ date }) => {
    const [symptomsData, setSymptomsData] = useState([]);

    const dateObject = new Date(date);

    const fetchData = async () => {
        const url = '/api/v1/questions/';
        const data = await getAllSymptoms(url);
        console.log(data);

        // data가 false인 경우 처리
        if (!data || !data.successFlag) {
            console.error('데이터를 가져오는 데 실패했습니다.');
            return;
        }

        // data.data가 배열인지 확인 후 필터링
        if (Array.isArray(data.data)) {
            const filteredData = data.data.filter(item => {
                const createdAt = new Date(item.created_at);
                const createdAtDate = `${createdAt.getFullYear()}-${(createdAt.getMonth() + 1).toString().padStart(2, '0')}-${createdAt.getDate().toString().padStart(2, '0')}`;

                const formattedDate = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}`;

                return createdAtDate === formattedDate;
            });
            setSymptomsData(filteredData);
        } else {
            console.error('데이터 형식이 올바르지 않습니다.');
        }
    };

    useEffect(() => {
        fetchData();
    }, [date]);

    return (
        <Styled.DetailContainer>
            {symptomsData.length > 0 ? (
                symptomsData.map(symptom => (
                    <div key={symptom.id}>
                        <h3>{symptom.question_text}</h3>
                        <p>{symptom.answer_text}</p>
                        <p>작성일: {new Date(symptom.created_at).toLocaleString()}</p>
                    </div>
                ))
            ) : (
                <p>해당 날짜에 대한 데이터가 없습니다.</p>
            )}
        </Styled.DetailContainer>
    );
};
