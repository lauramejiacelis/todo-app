'use client'
import { useDispatch, useSelector } from "react-redux";
import { getTodosSelector, errorSelector, isLoadingSelector, getTodosThunk } from "@/redux/todos";
import EditTodo from "./EditTodo";
import { Heading, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { useEffect} from "react";
import { Button , IconButton} from '@chakra-ui/react'
import { RiDeleteBin5Fill } from "react-icons/ri"
import EditModal from "./EditModal";

const ListTodos = () => {
  const todos = useSelector(getTodosSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  const dispatch = useDispatch()

  // const handleDelete = async (id)=>{
  //   try {
  //     const res = await fetch(`http://localhost:5000/api/todo/${id}`, {
  //       method: 'DELETE'
  //     })
  //     setTodos(todos.filter((todo)=>todo.id !== id))
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
  useEffect(()=>{
    dispatch(getTodosThunk())
    
  },[])

  console.log(todos)

  return <>
  
  <TableContainer borderTop='1px' borderColor='teal.200' py={4} >
    <Table size='sm'>
      <Thead>
        <Tr>
          <Th>Description</Th>
          <Th>Status</Th>
          <Th>Edit</Th>
          <Th>Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {todos.map((todo)=>
          <Tr key={todo.id}>
            <Td>{todo.description}</Td>
            <Td>{todo.status}</Td>
            <Td>
              <EditModal title={'Edit to do'}/>
              {/* <EditTodo todo={todo}/> */}
            </Td>
            <Td><IconButton bgColor={'pink.300'} icon={<RiDeleteBin5Fill />} onClick={()=>handleDelete(todo.id)}/></Td>
          </Tr>
        )}
      </Tbody>
      
    </Table>
  </TableContainer>
  </>
}

export default ListTodos;