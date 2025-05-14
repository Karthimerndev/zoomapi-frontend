import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './Accordian';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0)
  const [state,setState] = useState([])
  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then((res)=>setState(res))
  },[])

  const update = () => {
    const data:any = {title:"UPdateing"}
    fetch('https://jsonplaceholder.typicode.com/posts',{method:'post',body:data}).then(res=>console.log(res));
  }

  useEffect(()=>{
console.log(state)
  },[state])

  return (
    // <Navbar/>
    <Accordion/>
  )
}

export default App
