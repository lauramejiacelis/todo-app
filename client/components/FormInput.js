'use client'
import { useField } from 'formik';
import { FormControl,  FormLabel,  FormErrorMessage, Input,InputGroup, InputLeftElement, Select } from '@chakra-ui/react'

export const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.touched && meta.error} mt={2}>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      <Input {...field} {...props}/>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export const FormInputWithIcon = ({ label, icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.touched && meta.error} mt={2}>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
        {icon}
        </InputLeftElement>
        <Input {...field} {...props}/>
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      <Select {...field} {...props}/>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}