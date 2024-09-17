import React, { useEffect, useReducer, useState } from "react";
import "./App.css";

export default function App() {
  
  // const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  // const [error, setError] = useState({});
  // useEffect(() => {
  //   console.log(inputs);
  // }, [inputs]);
  // const onChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const validate = () => {
  //   if (!inputs.name) {
  //     setError({ name: "Name is Required" });
  //   }
  //   if (!inputs.email) {
  //     setError((prev) => ({ ...prev, email: "Email is Required" }));
  //   }
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   validate();
  //   if (!(error.name || error.email)) {
  //     /////
  //   }
  // };

  // return (
  //   <div>
  //     <form onSubmit={onSubmit}>
  //       <div>
  //         <label for="name">Name</label>
  //         <input
  //           type="text"
  //           name="name"
  //           id="name"
  //           onChange={onChange}
  //           value={inputs.name}
  //         />
  //         {error.name && <span style={{ color: "red" }}>{error.name}</span>}
  //       </div>

  //       <div>
  //         <label for="email">Email</label>
  //         <input type="text" name="email" id="email" onChange={onChange} />
  //         {error.email && <span color="red">{error.email}</span>}
  //       </div>

  //       <div>
  //         <label for="Password">Password</label>
  //         <input
  //           type="password"
  //           name="password"
  //           id="password"
  //           onChange={onChange}
  //         />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //     <p>Email: {inputs.email}</p>
  //     <p>Password: {inputs.password}</p>
  //     <p>Name: {inputs.name}</p>
  //   </div>



  const initialState = {
    inputs: {
      name: "",
      email: "",
      password: "",
    },
    error: {},
  };

  const reducer = (state2, actions2) => {
    switch (actions2.type) {
      case "UPDATE":
        return {
          ...state2,
          inputs: { ...state2.inputs, [actions2.name]: actions2.value },
        };
      case "SET_ERROR":
        return { ...state2, error: { ...state2.error, ...actions2.payload } };
      case "CLEAN_ERROR":
        return { ...state2, error: {} };
    }
  };

  const validate = () => {
    if (!inputs.name) {
      dispatch({ type: "SET_ERROR", payload: { name: "Name is required" } });
    }
    if (!inputs.email) {
      dispatch({ type: "SET_ERROR", payload: { email: "Email is required" } });
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputs, error } = state;

  useEffect(() => {
    console.log(error);
  }, [error]);

  const UPDATE = (e) =>
    dispatch({ type: "UPDATE", name: e.target.name, value: e.target.value });

  const onSubmit = (e) => {
    dispatch({ type: "CLEAN_ERROR" });
    e.preventDefault();
    validate();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" onChange={UPDATE} />
          {error.name && <span style={{ color: "red" }}>{error.name}</span>}
        </div>

        <div>
          <label for="email">Email</label>
          <input type="text" name="email" id="email" onChange={UPDATE} />
          {error.email && <span color="red">{error.email}</span>}
        </div>

        <div>
          <label for="Password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={UPDATE}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Email: {inputs.email}</p>
      <p>Password: {inputs.password}</p>
      <p>Name: {inputs.name}</p>
    </div>
  );
}
