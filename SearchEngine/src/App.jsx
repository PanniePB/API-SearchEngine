import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { useState } from "react";

const App = () => {
const handleSubmit=()=>{
  console.log("button clicked")
}


  return (
  <>
    <Header/>
    <Form onSubmit={handleSubmit}/>
    
    </>
  )
}

export default App