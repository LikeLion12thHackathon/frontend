import { serverEndPoint } from "../constant/common.constant";
import { getAccesstoken } from "./common";

// 증상 질문
export const postAskData = async (askObj,url) => {
    const BACK_API = `${serverEndPoint}${url}`;
    const token = getAccesstoken();

    try {
        const response = await fetch(BACK_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}` ,
            },
            body: JSON.stringify(askObj),
        });

        
        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        // 서버에서 반환된 데이터
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        return false;
    }
}

// 질의한 모든 데이터 받기
export const getAllSymptoms = async (url) => {
    const BACK_API = `${serverEndPoint}${url}`;
    const token = getAccesstoken();

    try {
        const response = await fetch(BACK_API, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}` ,
            },
        });
  
        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        // 서버에서 반환된 데이터
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error(error); // 에러 로그 출력
        return false; // 에러 발생 시 false 반환
    }
}