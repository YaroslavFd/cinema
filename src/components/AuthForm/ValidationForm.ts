export const isValidPhoneNumber = (value: string) => {
  const phoneRegex =
    /^(8|\+7)?[\s-]?\(?(9|4[0-9]|3[0-9]|2[0-9]|8[0-9]|4[0-9])\)?[\s-]?\d{1,3}[\s-]?\d{2,3}[\s-]?\d{2}[\s-]?\d{2}$/
  return phoneRegex.test(value)
}

export const isValidOtpCode = (value: string) => {
  const otpCodeRegex = /^[0-9]{6}$/i
  return otpCodeRegex.test(value)
}
