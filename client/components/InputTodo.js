'use client'
import { Form, Formik } from 'formik';
import { Stack, Button} from '@chakra-ui/react'
import { TfiAgenda } from "react-icons/tfi";
import { Icon } from '@chakra-ui/react'
import { TodoSchema } from '@/utils/validationSchema';
import { FormInput, FormInputWithIcon, SelectInput } from './FormInput';

const InputTodo = () => {
  //missing state

  const onSubmitForm = async ({description, status}) =>{
    try{
      const body = {description, status}
      const response = await fetch('http://localhost:5000/api/todo',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      
      //window.location = '/'
      console.log(response)
    } catch (err){
      console.error(err.message)
    }
  }

  return <>
  <h1>Input Todo</h1>
  <Stack spacing={4}>
    <Formik
      initialValues={{
      description: '',
      status: ''
      }}
      validationSchema={TodoSchema}
      onSubmit={values=>console.log(values)}
      >
      {(props) => (
        <Form>
          <FormInputWithIcon 
            label=''
            name='description'
            type='text'
            placeholder='To do'
            icon={<Icon as={ TfiAgenda } color='gray.300'/>}
          />

          <SelectInput label='' name='status' placeholder='Select To Do Status'>
            <option>To Do</option>
            <option>Work in progress</option>
            <option>Done</option>
          </SelectInput>

          <Button
            mt={3}
            color={'white'}
            backgroundColor={'teal.200'}
            // isLoading={props.isSubmitting}
            type='submit'
          >
            Add
          </Button>
        </Form>
      )}
    </Formik>
  </Stack>
  </>
}

export default InputTodo;