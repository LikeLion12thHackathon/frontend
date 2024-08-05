import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// recoilPersist 인스턴스 생성, 세션 스토리지 사용
const { persistAtom } = recoilPersist({
    key: 'recoilPersist', // 고유한 ID
    storage: sessionStorage, // 세션 스토리지에 저장
});

// 질문 상태를 저장하기 위한 Atom 정의
export const questionState = atom({
    key: 'questionState', // 고유한 ID
    default: null, // 초기 상태값
    effects_UNSTABLE: [persistAtom], // 상태를 세션 스토리지에 저장
});
