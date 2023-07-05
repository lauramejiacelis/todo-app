import { Form, Formik } from 'formik';
import { VStack,  Button } from "@chakra-ui/react"
import { TfiAgenda } from "react-icons/tfi";
import { Icon } from '@chakra-ui/react'
import { FormInputWithIcon, SelectInput } from "@/components/FormInput";
import { TodoSchema } from "@/utils/validationSchema";
import ListTodos from "@/components/ListTodos";

import InputTodo from "@/components/InputTodo";

const Todos = () =>{
  return(
    <VStack py={5}>
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
      <ListTodos/>
    </VStack>
  )
}

export default Todos;