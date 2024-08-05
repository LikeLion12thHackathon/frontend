import React, { useEffect, useState } from 'react';
import * as Styled from '../../css/styled/ask.detail.styled';
import { getAllSymptoms } from '../../function/ask';

export const QuestionLog = ({ date }) => {
    const [symptomsData, setSymptomsData] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 상태 추가
    const [error, setError] = useState(null); // 에러 상태 추가

    const fetchData = async () => {
        setLoading(true);
        try {
            const url = '/api/v1/questions/';
            const data = await getAllSymptoms(url);
            console.log(data);

            if (!data || !data.successFlag) {
                throw new Error('데이터를 가져오는 데 실패했습니다.');
            }

            if (Array.isArray(data.data)) {
                const formattedDate = moment(date).format("YYYY-MM-DD");
                const filteredData = data.data.filter(item => {
                    const createdAtDate = moment(item.created_at).format("YYYY-MM-DD");
                    return createdAtDate === formattedDate;
                });
                setSymptomsData(filteredData);
            } else {
                throw new Error('데이터 형식이 올바르지 않습니다.');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [date]);

    if (loading) return <p>로딩 중...</p>; // 로딩 메시지
    if (error) return <p>{error}</p>; // 에러 메시지

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