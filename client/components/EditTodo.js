'use client'

import {
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik';
import { FormControl,  FormErrorMessage, InputGroup, InputLeftElement, Input, Select } from '@chakra-ui/react'
import { TfiAgenda } from "react-icons/tfi";
import { Icon } from '@chakra-ui/react'
import { TodoSchema } from '@/utils/validationSchema';
import { BiEdit } from "react-icons/bi";

const EditTodo = ({todo}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmitEdit = async ({description, status}, id) =>{
    try{
      const body = {description, status}
      const response = await fetch(`http://localhost:5000/api/todo/${id}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      window.location = '/'
      console.log(response)
    } catch (err){
      console.error(err.message)
    }
  }

  return <>
  <IconButton bgColor={'purple.300'} icon={<BiEdit/>} onClick={onOpen}/>

  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Edit to do</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Formik
        initialValues={{
        description: `${todo.description}`,
        status: `${todo.status}`
        }}
        validationSchema={TodoSchema}
        onSubmit={values=>onSubmitEdit(values, todo.id)}
        >
        {(props) => (
          <Form>
            <Field name='description' >
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.description && form.touched.description}>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                    <Icon as={ TfiAgenda } color='gray.300'/>
                    </InputLeftElement>
                    <Input {...field} type='text' placeholder='To do' />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='status' >
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.status && form.touched.status}>
                  <Select {...field} placeholder='Select To Do Status' mt={2}>
                    <option>To Do</option>
                    <option>Work in progress</option>
                    <option>Done</option>
                  </Select>
                  <FormErrorMessage>{form.errors.status}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button mt={3} bgColor={'purple.300'} type='submit'>Edit</Button>
          </Form>
        )}
        </Formik>
      </ModalBody>

      <ModalFooter>
        
        <Button bgColor={'gray.400'}  onClick={onClose}>
          Close
        </Button>
        
      </ModalFooter>
    </ModalContent>
  </Modal>
  </>
}

export default EditTodo;