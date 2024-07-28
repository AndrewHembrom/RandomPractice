import { useState, useEffect } from 'react'
import axios from "axios"

// https://gist.github.com/hkirat/e10da900663a6f7a155c8505daae894f

const todosURL = "https://sum-server.100xdevs.com/todos";
const idTodoURL = "https://sum-server.100xdevs.com/todo?id=";

function App() {

  const [todos, setTodos] = useState([]);


  useEffect(()=> {
    axios.get(todosURL)
      .then((res) => {
        setTodos(res.data.todos);
      })
  }, [])


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(url);
  //       const json = await res.json();
  //       setTodos(json.todos);
  //     } catch (error) {
  //       res.status(500).json({
  //         msg: "Error fetching data",
  //         error: error.message
  //       })
  //       console.error('Error fetching data: ', error);
  //     }
  //   }

  //   fetchData();

  //   const interval = setInterval(fetchData, 5000);

  //   return () => clearInterval(interval);
  // }, [])

  const [Id, setId] = useState(1)

  return (
    <div>
      <button onClick={function () { setId(1) }}>1</button>
      <button onClick={function () { setId(2) }}>2</button>
      <button onClick={function () { setId(3) }}>3</button>
      <button onClick={function () { setId(4) }}>4</button>
      <Todo id={Id}/>
      {/* {todos.map(({ id, title, description }) => <ShowTodos key={ id } title={title} description={description} />)} */}
      </div>
  )
}

function Todo({ id }) {
  
  const [todoId, setTodoId] = useState({});

  useEffect(() => { 
    axios.get(idTodoURL + id)
      .then(function (res) { 
        setTodoId(res.data.todo);
      })
  },[id])

  return (
    <div>
      Id: {id}
      <h1>{ todoId.title }</h1>
      <h4>{ todoId.description }</h4>
    </div>
  )
}


export default App
