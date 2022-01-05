import React, { useState, useEffect } from "react"

export default function Home() {
const [state, setState] = useState({})

  useEffect(() => {
    async function getHello() {
      const hello = await ( await fetch('/.netlify/functions/hello-world')).json();
      console.log(hello);
      setState(hello)
    }
    getHello()
  },[])
  return <div>{state.message}</div>
}
