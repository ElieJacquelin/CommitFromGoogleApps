export default {
  errors: {
    failedToComputeLatLon: (options) => `${options.field}의 주소 정보를 가져오는데 실패했습니다.`,
    invalidEmailFormat: '올바른 형식의 이메일 주소가 아닙니다.',
    invalidFields: '유효하지 않은 항목',
    invalidNumberFormat: '올바른 형식의 핸드폰 번호가 아닙니다.',
    invalidOrder: '필수 정보가 누락되었습니다, 다시 확인해주세요',
    invalidPhoneNumber: '유효하지 않은 핸드폰 번호입니다.',
    invalidUsernameOrPassword: '계정 혹은 비밀번호가 유효하지 않습니다.',
    missingField: '누락된 항목',
    passwordMismatch: '비밀번호가 일치하지 않습니다.',
  },
  fields: {
    address: '주소',
    contactName: '이름',
  },
  phoneRegexp: /^[0-9]{11}$/,
}