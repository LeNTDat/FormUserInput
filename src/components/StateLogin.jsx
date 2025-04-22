import { useState } from "react";

export default function Login() {
  const [enteredValue, setEntereValue] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChangeValue = (identify, event)=>{
    setEntereValue(prev=>({
      ...prev,
      [identify]: event.target.value
    }))
  }

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            onChange={(event)=>{handleChangeValue('email', event)}}
            id="email"
            type="email"
            name="email"
            value={enteredValue.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            onChange={(event)=>{handleChangeValue('password', event)}}
            value={enteredValue.password}
            id="password"
            type="password"
            name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
