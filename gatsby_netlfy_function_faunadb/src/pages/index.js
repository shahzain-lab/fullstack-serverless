import React, { useState, useEffect } from "react"
import Form from "../components/Form";

export default function Home() {
const [state, setState] = useState({})

  useEffect(() => {
    async function getHello() {
      const hello = await ( await fetch('/.netlify/functions/hello')).json();
      console.log(hello);
      setState(hello)
    }
    getHello()
  },[])
  return (<div> <h1>{state.message}</h1>
            <Form />
  </div>)
}
