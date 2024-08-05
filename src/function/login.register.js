import { serverEndPoint } from "../constant/common.constant";
import { getAccesstoken, setAccesstoken, setRefreshToken } from "./common";

// 회원가입 함수
export const postRegisterDataWith = async (userObj, url) => {
    const BACK_API = `${serverEndPoint}${url}`;

    try {
        const response = await fetch(BACK_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj),
        });

        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if (!response.ok) {
            const errorData = await response.json();
            console.log('Error data:', errorData);
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        const responseData = await response.json();
        console.log(responseData); // 응답 데이터 출력

        // 응답 구조에 따라 데이터 접근
        if (responseData && responseData.data && responseData.data.token) {
            setAccesstoken(responseData.data.token.accessToken);
            setRefreshToken(responseData.data.token.refreshToken);
            return responseData; // 성공적으로 토큰을 저장한 후 응답 데이터 반환
        } else {
            throw new Error('토큰 정보가 응답에 없습니다.');
        }

    } catch (error) {
        console.log('Error: ', error.message);
        return false; // 오류 발생 시 false 반환
    }
}


// 로그인 함수
export const postLoginDataWith = async (userObj,url) => {
    const BACK_API = `${serverEndPoint}${url}`;
    const token = getAccesstoken();

    try {
        const response = await fetch(BACK_API, {
            method: "POST",
            headers: {
                // 유저 정보를 JSON형태로 보내기 위한 request임을 짐작해주세요
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}` ,
                // "Cache-Control": "no-store", // 캐시 비활성화
            },
            body: JSON.stringify(userObj),
            // // 캐시 방지
            // cache: 'no-store',
            // // 쿠키 방지
            // credentials: 'omit'
        });

        
        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        // 서버에서 반환된 데이터
        const data = await response.json();
        return data; // 로그인 성공 시 전체 데이터를 반환
        
    } catch(error) {
        return false;
    }
}

// 로그아웃 함수
export const postLogoutData = async (url) => {
    const BACK_API = `${serverEndPoint}${url}`;
    const token = getAccesstoken();

    try {
        const response = await fetch(BACK_API, {
            method: "POST",
            headers: {
                // 유저 정보를 JSON형태로 보내기 위한 request임을 짐작해주세요
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}` ,
                // "Cache-Control": "no-store", // 캐시 비활성화
            },
            body: {
                
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
        return data; // 로그인 성공 시 전체 데이터를 반환
        
    } catch(error) {
        return false;
    }
}

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