import './App.css';
import Form from './components/Form'
import React, { useState, useEffect } from 'react'
import axios from "axios";
import schema from "./components/formSchema";
import * as yup from "yup";
import Users from "./components/UserGroup";


  const initialFormValues = {
    first_name: '',
    last_name: '',
    email: '',
    tos: false
  }
  const initialFormErrors = {
    first_name: '',
    last_name: '',
    email: '',
    tos: ''
  }
  
const initialUsers = [];
const initialDisabled = true;

function App() {
  const [user, setUser] = useState();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUser = () =>{
    console.log("Hello from inside get user")
    axios.get("https://reqres.in/api/users")
    .then(res =>{
      console.log(res.data.data);
      setUser(res.data.data);
      
    }).catch(err => console.log(err))
  }
  
  const postNewUser = newUser =>{
    axios.post("https://reqres.in/api/users", newUser)
    .then(res =>{
      setUser([res.data, ...user]);
      setFormValues(initialFormValues);
    }).catch(err => console.log(err))
  }

  const validate= (name, value) =>{
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ""}))
    .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}));
  }

  const inputChange = (name, value) =>{
    validate(name, value);
    setFormValues({...formValues, [name]:value})
    }

    const formSubmit = () =>{
      const newUser = {
        first_name: formValues.first_name.trim(),
        last_name: formValues.last_name.trim(),
        email: formValues.email.trim(),
        tos: formValues.tos
      }
      postNewUser(newUser);
    }
useEffect(() =>{
  console.log("Hello from inside useeffect")
  getUser()
}, [])

useEffect(() =>{
  schema.isValid(formValues)
  .then(valid => setDisabled(!valid))
}, [formValues])

// console.log(user);
   return (
    <div className="container">
      <h1>New User Sign Up</h1>
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
      {
        user && user.map(item => {
          return (
            <Users key={item.email} details={item} />
          )
        })
      }
      
    </div>
  );
  
}

export default App;
