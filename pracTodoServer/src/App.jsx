import { useState, useEffect } from 'react'

// https://gist.github.com/hkirat/e10da900663a6f7a155c8505daae894f

const url = "https://sum-server.100xdevs.com/todos";

function App() {

  const [todos, setTodos] = useState([]);

  /*

  useEffect without rerendering

  useEffect(()=> {
    fetch(url)
      .then( async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
  }, [])

  */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setTodos(json.todos);
      } catch (error) {
        res.status(500).json({
          msg: "Error fetching data",
          error: error.message
        })
        console.error('Error fetching data: ', error);
      }
    }

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [])

  return (
      <div>
      {todos.map(({ id, title, description }) => <ShowTodos key={ id } title={title} description={description} />)}
      </div>
  )
}
function ShowTodos({ title,description }) {
  return (
    <div>
      <h2>
        {title}
      </h2>
      <h5>
        {description}
      </h5>
    </div>
  )
}

export default App
