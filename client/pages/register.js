import { Form, Formik } from 'formik';
import { FormInput } from "@/components/FormInput"
import { Heading, VStack, Button} from "@chakra-ui/react"
import { userSchema } from '@/utils/validationSchema';

const Register = () =>{
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  return <VStack spacing={5} mt={2}>
    <Heading size='lg'>Register</Heading>
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={values=>console.log(values)}
      >
      {(props) => (
        <Form>
          <FormInput 
            label='First Name'
            name='firstName'
            type='text'
            placeholder='Jane'
          />
          <FormInput 
            label='Last Name'
            name='lastName'
            type='text'
            placeholder='Doe'
          />
          <FormInput 
            label='Email'
            name='email'
            type='email'
            placeholder='example@example.com'
          />
          <FormInput 
            label='Password'
            name='password'
            type='password'
            placeholder='******'
          />
          <FormInput 
            label='Confirm Password'
            name='confirmPassword'
            type='password'
            placeholder='******'
          />

          <Button
            mt={3}
            color={'white'}
            backgroundColor={'teal.200'}
            // isLoading={props.isSubmitting}
            type='submit'
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  </VStack>
}

export default Register