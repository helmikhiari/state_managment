import logo from './logo.svg';
import './App.css';
import {useEffect, useReducer, useRef, useState} from "react";
function App() {

  const a=useRef();


  const initialState={email:"",error:""};

  const reducer=(state,action)=>
  {
    switch(action.type)
    {
      case "UPDATE":
        return {...state,email:action.value}

        case "RESET":
          return {email:"",error:""};

        case "SET_ERROR":
          return {...state,error:action.ErrorMsg}
    }
    



  }

  const validate=(e)=>
  {
    e.preventDefault();
    if (state.email.length<=5)
      dispatch({type:"SET_ERROR",ErrorMsg:"Invalid Mail"})
  }

  const [state,dispatch]=useReducer(reducer,initialState);

  useEffect(()=>
    {
      console.log(JSON.stringify(state));
    },[state])

  const onChange=(e)=>
  {
    dispatch({type:"UPDATE",value:e.target.value})
  }

  const reset=()=>
  {
    dispatch({type:"RESET"})
  }


  useEffect(()=>
  {
   
      // a.current.focus();
    a.value="ABCD"
    console.log(a.value);
  },[])

  const changeInputValue=()=>
  {
    a.value="1234";
    console.log(a.value);
  }

  return (
    <div className="App">
    
      <label for="email">Email :</label>
      <input  type="text" name="email" id="email" onChange={onChange} />
      
      <button onClick={reset}>Reset</button>
      
      <button onClick={validate}>Envoyer</button>
      
      <button onClick={changeInputValue}>Change Ref</button>
      <p>{JSON.stringify(state)}</p>
        
        <p>{(a.current)}</p>
     
    </div>
  );
}

export default App;
