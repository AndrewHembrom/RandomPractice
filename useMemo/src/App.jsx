import { useState , useEffect, useMemo} from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 0; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);

  // const [finalValue, setFinalValue] = useState(1);

  // useEffect(() => { 
  //   let count = 0;
  //   for (let i = 0; i <= inputValue; i++) { 
  //     count = count + i;
  //   }
  //   setFinalValue(count);
  // },[inputValue])

  // let count = 0;
  // for (let i = 0; i <= inputValue; i++) { 
  //   count = count + i;
  // }

  return (
    <div>
      <input onChange={function (e) { 
        setInputValue(e.target.value);
      }} placeholder='Find sum from 1 to n' />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={() => { 
        setCounter(counter+1)
      }}>Counter ({counter})</button>
    </div>
  )
}

export default App
