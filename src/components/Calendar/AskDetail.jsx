import React, { useEffect, useState } from 'react';
import * as Styled from '../../css/styled/ask.detail.styled';
import { getAllSymptoms } from '../../function/ask'; // 경로를 실제 경로로 수정

export const AskDetail = ({ date }) => {
    const [symptomsData, setSymptomsData] = useState([]);

    // date를 Date 객체로 변환
    const dateObject = new Date(date);

    const fetchData = async () => {
        const url = '/api/v1/questions/';
        const data = await getAllSymptoms(url);
        console.log(data);

        // data가 false인 경우 처리
        if (!data) {
            console.error('데이터를 가져오는 데 실패했습니다.');
            return;
        }

        if (data.successFlag) {
            // date와 일치하는 데이터 필터링
            const filteredData = data.data.filter(item => {
                const createdAt = new Date(item.created_at);
                const createdAtDate = `${createdAt.getFullYear()}-${(createdAt.getMonth() + 1).toString().padStart(2, '0')}-${createdAt.getDate().toString().padStart(2, '0')}`; // 'YYYY-MM-DD' 형식으로 변환

                const formattedDate = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}`; // 'YYYY-MM-DD' 형식으로 변환

                return createdAtDate === formattedDate; // 두 날짜 비교
            });
            setSymptomsData(filteredData);
        }
    };

    useEffect(() => {
        fetchData();
    }, [date]);

    return (
        <Styled.DetailContainer>
            {symptomsData && symptomsData.length > 0 ? (
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
