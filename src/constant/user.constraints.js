export const MinimumLength = (limit) => ({
    rule: new RegExp(`^.{${limit},}$`),
    message: `최소 ${limit}글자 이상입니다`
});

// . : 모든 문자열(숫자, 한글, 영어, 특수기호, 공백 모두)
// + : 최소 한개 or 여러개
export const isRequired = {
    rule: /.+/,
    message: '필수 입력 항목입니다',
};
// \s : space 공백
export const CantContainSpace = {
    rule: /^[^\s]+$/,
    message: '공백을 포함할 수 없습니다',
};
// ^문자열 : 특정 문자열로 시작 (시작점)
// \d : 숫자
export const CantStartWithNumber = {
    rule: /^\d/,
    message: '숫자로 시작할 수 없습니다',
};

export const EmailFormat = {
    rule: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    message: '이메일 형식이 아닙니다',
}

export const SpecialText = {
    rule: /[!?@#$%^&*():;+-=~{}<>\\[\]\|\\\"\'\,\.\/\`\₩]/g,
    message: '특수문자를 포함해주셔야 합니다',
}

export const UserRules = {
    id: {
        rule: /^[a-zA-Z0-9@./+/_-]{1,150}$/,
        message: '아이디는 150자 이하의 문자, 숫자 및 @/./+/-/_만 가능합니다.',
    },
    password: {
        similarToPersonalInfo: {
            rule: /^(?!.*(your_personal_info|another_similar_info)).*$/,
            message: '개인 정보와 유사한 비밀번호는 사용할 수 없습니다.',
        },
        length: {
            rule: /^.{8,}$/,
            message: '비밀번호는 최소 8자 이상이어야 합니다.',
        },
        commonPasswords: {
            rule: /^(?!.*(123456|password|qwerty)).*$/,
            message: '통상적으로 자주 사용되는 비밀번호는 사용할 수 없습니다.',
        },
        noNumericOnly: {
            rule: /^(?!\d+$).*$/,
            message: '숫자로만 이루어진 비밀번호는 사용할 수 없습니다.',
        },
    },
};
