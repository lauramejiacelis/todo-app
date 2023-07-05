'use client'
import * as Yup from 'yup';

export const TodoSchema = Yup.object().shape({
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  status: Yup.string()
    .required('Required')
})

const isRequiredMessage = 'This field is required';
const tooShort = 'Too Short!';
const tooLong = 'Too Long!';

export const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, tooShort)
    .max(20, tooLong)
    .required(isRequiredMessage),
  lastName: Yup.string()
    .min(2, tooShort)
    .max(20, tooLong)
    .required(isRequiredMessage),
  email: Yup.string().email().required(isRequiredMessage),
  password: Yup.string()
    .min(6, tooShort)
    .max(10, tooLong)
    .required(isRequiredMessage),
  confirmPassword: Yup.string()
    .required(isRequiredMessage)
    .oneOf([Yup.ref('password')], "Passwords don't match"),
})
