import React, { useState } from "react";

const Form = ({page,setPage}) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  function submitForm(e){
    e.preventDefault()
    const data ={age,username}
    console.log(data)
    console.log(`it works for me and other section`)
    e.target.reset()
    setPage((currentPage)=>currentPage + 1)
  }
  return (
    <div>
      <div className="form__container">
        <h2>Start Quiz</h2>
        <form onSubmit={submitForm}>
        
          <input
            type="text"
            name="user"
            placeholder="username"
            value={username}
            required
            onChange={(e)=>{setUsername(e.target.value)}}
          />
           <input
            type="text"
            name="age"
            placeholder="Age"
            value={age}
            required
            onChange={(e)=>{setAge(e.target.value)}}
          />
         <button className="btn">Start Quiz</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
