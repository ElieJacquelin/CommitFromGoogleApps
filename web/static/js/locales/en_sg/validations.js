export default {
  errors: {
    failedToComputeLatLon: (options) => `Failed to compute the latitude/longitude of ${options.field}.`,
    invalidEmailFormat: 'Invalid email format.',
    invalidFields: 'Invalid fields.',
    invalidNumberFormat: 'Invalid number format.',
    invalidOrder: 'Invalid order. Please check your data.',
    invalidPhoneNumber: 'Invalid phone number.',
    invalidUsernameOrPassword: 'Username or password is invalid.',
    missingField: 'Missing field',
    passwordMismatch: 'Password mismatch.',
  },
  fields: {
    address: 'Address',
    contactName: 'Contact name',
  },
  phoneRegexp: /^([36][0-9]{7}|[78][1-9][0-9]{6}|[9][0-8][0-9]{6})$/,
}