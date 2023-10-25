import React, { useState, useRef, useEffect } from 'react'
// import './App.css'

export default function App() {

  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  const prevCount = prevCountRef.current;

  return (
    <main>
      <h3 ref={prevCountRef}>Current Count: {count}</h3>
      <h4>Prevous Counter : {prevCount}</h4>
      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </main>
  )
}
