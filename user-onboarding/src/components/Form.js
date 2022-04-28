import React from 'react';


export default function Form(props){
const {values, submit, change, disabled, errors} = props;
    
const onSubmit = evt => {
    evt.preventDefault();
    submit();
}

const onChange = evt =>{
    const {name, value, checked, type} = evt.target;
    const valueToUse = type === "checkbox" ? checked: value; 
    change(name, valueToUse);
}

return (
    <form onSubmit={onSubmit}>
<h2>Add a New User</h2>
<button id="submitButton" disabled = {disabled}>Submit</button>
<div className="errors">
    <div>{errors.first_name}</div>
    <div>{errors.last_name}</div>
    <div>{errors.email}</div>
    <div>{errors.tos}</div>
</div>
<label>First Name</label>
    <input 
    value={values.first_name}
    onChange={onChange}
    name="first_name"
    type="text"
    />
<label>Last Name</label>
    <input 
    value={values.last_name}
    onChange={onChange}
    name="last_name"
    type="text"
    />
<label>Email</label>
    <input 
    value={values.email}
    onChange={onChange}
    name="email"
    type="text"
    />
<label>Did you read and accept the terms of service?</label>
    <input 
    value={values.tos}
    onChange={onChange}
    name="tos"
    type="checkbox"
    />
</form>
    )
}