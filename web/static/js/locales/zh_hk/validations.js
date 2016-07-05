export default {
  errors: {
    failedToComputeLatLon: (options) => `無法計算${options.field}的經緯度`,
    invalidEmailFormat: '無效的電子郵件格式',
    invalidFields: '無效的輸入',
    invalidNumberFormat: '無效的號碼格式',
    invalidOrder: '無效的訂單，請檢查您所輸入的資料',
    invalidPhoneNumber: '無效的電話號碼格式',
    invalidUsernameOrPassword: '用戶名稱或密碼錯誤',
    missingField: '輸入錯誤',
    passwordMismatch: '密碼不一致',
  },
  fields: {
    address: '地址',
    contactName: '聯絡人姓名',
  },
  phoneRegexp: /^[0-9]{8}$/,
}