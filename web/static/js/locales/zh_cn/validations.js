export default {
  errors: {
    failedToComputeLatLon: (options) => `无法计算${options.field}的经/纬度`,
    invalidEmailFormat: '无效的电子邮件格式',
    invalidFields: '无效的字段',
    invalidNumberFormat: '无效的号码格式',
    invalidOrder: '无效的订单，请检查您所输入的资料',
    invalidPhoneNumber: '无效的电话号码',
    invalidUsernameOrPassword: '用户名或密码错误',
    missingField: '字段缺失',
    passwordMismatch: '密码不一致',
  },
  fields: {
    address: '地址',
    contactName: '联系人姓名',
  },
  phoneRegexp: /^[0-9]{11}$/,
}