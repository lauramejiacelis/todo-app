'use client'

export const onSubmitForm = async ({description, status}, id) =>{
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