import { Form, Formik } from 'formik';
import { Button } from "@chakra-ui/react"
import { TfiAgenda } from "react-icons/tfi";
import { Icon } from '@chakra-ui/react'
import { FormInputWithIcon, SelectInput } from './FormInput';
import { TodoSchema } from '@/utils/validationSchema';

const AddForm = ({description, status, action, handleSubmit})=>{
  return(
    <Formik
    initialValues={{
    description: '',
    status: ''
    }}
    validationSchema={TodoSchema}
    onSubmit={values=>console.log(values)} //here replace the handleSubmit
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
          {action}
        </Button>
      </Form>
    )}
    </Formik>
  )
}

export default AddForm;