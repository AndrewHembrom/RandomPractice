import { useState } from 'react'

let counter = 4;

function App() {

  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to Gym",
    description: "put in the work"
  },{
    id: 2,
    title: "Drink water",
    description: "glug glug glug"
  },{
    id: 3,
    title: "Do Study",
    description: "padhle bhai mauka hai"
    }])
  
  function addTodo() { 
    // using spread syntax
    // setTodos(...todos, {
    //   id: counter++,
    //   title: Math.random(),
    //   description: Math.random()
    // })

    const newTodos = [];
    for (let i = 0; i < todos.length; i++) { 
      newTodos.push(todos[i]);
    }
    newTodos.push({
      id: counter++,
      title: Math.random(),
      description: Math.random()
    });
    setTodos(newTodos);
  }
  
  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(function (todo) { 
        return <Todo key={ todo.id } title={todo.title} description={todo.description} />
      })}
    </div>
  )
}

function Todo({ title, description }) { 
  return (
    <div>
      <h1>{title}</h1>
      <h3>{ description }</h3>
    </div>
  )
}

export default App
