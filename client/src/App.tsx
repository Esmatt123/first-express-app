import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({})
  const [toys, setToys] = useState([])

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api")
    setPerson(response.data.person)
    setToys(response.data.toys)
    console.log(response)
  }

  useEffect(() => {
    fetchApi()
    
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <h3>Little boy</h3>
        {person && (
          <ul >
            <li>{person.name}</li>
            <li>{person.age}</li>
            <li>{person.gender}</li>
            <h3>Favourite toys</h3>
            {
              toys.map((toy, index) => (
                <li key={index}>{toy}</li>
              ))
            }
          </ul>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
