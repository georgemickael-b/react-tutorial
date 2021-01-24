import axios from "axios"

const instance = axios.create({
  baseURL: "http://stark-brook-58201.herokuapp.com"
})

export const getTodos = () => {
  return instance.get("/todos")
}

export const saveTodo = (data) =>{
  return instance.post("/", data )
}


