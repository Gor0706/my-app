import React, {FC, useState, useEffect} from 'react';

import './App.css';
import BasicTable from "./components/table/table";



const App: FC = () => {
  const [type, setType] = useState<string>('users')
  const [data, setData] = useState<string[]>([])
  const [pos, setPos] = useState({
    x:0,
    y:0,
  })

  const mouseEventHandler = (event: { clientX: number; clientY: number; }) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    })
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`).then(response => response.json()).then(json => setData(json))
    console.log(data, type)
  },[type])

  useEffect(() => {
    window.addEventListener('mousemove', mouseEventHandler)

    return () => {
      window.removeEventListener("mousemove", mouseEventHandler)
    }
  }, [])


  return (
      <>
        {/*<Rating/>*/}
        {/*<div>*/}
        {/*  <h1>resurs: {type}</h1>*/}
        {/*  <button onClick={() => setType('users')}>users</button>*/}
        {/*  <button onClick={() => setType('todos')}>todo</button>*/}
        {/*  <button onClick={() => setType('posts')}>posts</button>*/}
        {/*  /!*<pre>{JSON.stringify(data, null, 2)}</pre>*!/*/}
        {/*  <pre>{JSON.stringify(pos, null, 2)}</pre>*/}
        {/*</div>*/}

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '80px'}}>
          <BasicTable />
        </div>

      </>

  );
}

export default App;
