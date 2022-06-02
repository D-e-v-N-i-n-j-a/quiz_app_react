import { React, useState } from "react";
function App() {
  const [viewPassword, setViewPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  function view_Password() {
    setViewPassword(true);
  }
  function securePassword() {
    setViewPassword(false);
  }
  // HANDLE SUBMIT FORM HERE
  const [error,setError] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")
  function handleFormSubmit(e) {
    
    e.preventDefault();
    // VALIDATE USER INPUTS
    if (username === "" || password === "") {
      setError(true)
      setErrorMessage("field must not be empty")
    }else if(username !== '' && password !== ''){
      setError(true);
      setErrorMessage("You have successfully login to your accounts")
    }
  }
  return (
    <div className="App">
      <div className={!error  && "error_message" || "hide_error"}>
        <i className="fa fa-info error_icon"></i>
        <span>{error && errorMessage || errorMessage}</span>
        <i onClick={()=>{setError(false)}} className="fa fa-times close_btn"></i>
      </div>
      <span className="header">DOCTOR LOGIN HERE</span>
      <form onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <div className="input-data">
            <input
              type="text"
              placeholder="Enter user name"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <i className="fa fa-user icon_font"></i>
          </div>
        </div>
        {/* PASSWORD SECTION */}
        <div className="wrapper">
          <div className="input-data">
            <input
              type={(!viewPassword && "password") || "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <i className="fa fa-lock icon_font"></i>
            {(viewPassword && (
              <i onClick={securePassword} className="fa fa-eye view"></i>
            )) || (
              <i onClick={view_Password} className="fa fa-eye-slash view"></i>
            )}
          </div>
        </div>
        <button className="login_btn">LOGIN</button>
      </form>
    </div>
  );
}

export default App;
