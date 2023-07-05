import { loading, listTodos, addTodo, getError } from "./actionCreators";

export const getTodosThunk = () =>(dispatch, getState) => {
  dispatch(loading());
  getTodosApi().then((todos)=>{
    dispatch(listTodos(todos))
  })
  .catch((err)=>{
    dispatch(getError(err))
  })
}

export const getTodosApi = () => {
  return fetch('http://localhost:5000/api/todo').then(
    (res) =>
      res.json().then((info) => {
        if (!res.ok) {
          console.log(info);
          throw info;
        }
        return info;
      })
  );
};

const addOrEdit = async ({description, status}, method, id) =>{
  try{
    const body = {description, status}
    const response = await fetch(`http://localhost:5000/api/todo/${id}`,{
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    //window.location = '/'
    console.log(response)
  } catch (err){
    console.error(err.message)
  }
}