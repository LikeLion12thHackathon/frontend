import { serverEndPoint } from "../constant/common.constant";
import { getAccesstoken } from "./common";

// 비밀번호 변경 함수
export const updatePassword = async (passwordObj,url) => {
    const BACK_API = `${serverEndPoint}${url}`;
    const token = getAccesstoken();

    try {
        const response = await fetch(BACK_API, {
            method: "PUT",
            headers: {
                // 유저 정보를 JSON형태로 보내기 위한 request임을 짐작해주세요
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}` ,
                // "Cache-Control": "no-store", // 캐시 비활성화
            },
            body: JSON.stringify(passwordObj),
        });

        
        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        // 서버에서 반환된 데이터
        const data = await response.json();
        conole.log(data);
        return data; // 로그인 성공 시 전체 데이터를 반환
        
    } catch(error) {
        return false;
    }
}