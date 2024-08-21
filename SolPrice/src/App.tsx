// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.tsx

import React, { useEffect, useState } from 'react';
import { getSolUsdcPrice } from './api/backpackExchange';

const App: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const fetchedPrice = await getSolUsdcPrice();
        setPrice(fetchedPrice);
      } catch (error) {
        setError('Failed to fetch price.');
      }
    };

    fetchPrice();
  }, []);

  return (
    <div>
      <h1>SOL/USDC Price</h1>
      {error && <p>{error}</p>}
      {price !== null ? <p>Current Price: ${price}</p> : <p>Loading...</p>}
    </div>
  );
};

export default App;

