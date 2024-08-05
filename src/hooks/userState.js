import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

// recoilPersist 인스턴스 생성
const { persistAtom } = recoilPersist({
    key: 'userState', // 저장할 키
    storage: sessionStorage, // 세션 스토리지 사용
});

// userState atom 정의
export const userState = atom({
    key: 'userState', // 고유한 ID
    default: {
        username: '',
        email: '',
        name: '',
        gender: '',
        last_login: null,
        avatar: '',
        is_admin: false,
        accessToken: '',
        refreshToken: '',
    }, // 기본값
    effects_UNSTABLE: [persistAtom], // persistAtom 추가
});