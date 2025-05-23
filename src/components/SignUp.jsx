import { useState } from "react";
import Input from "./Input";

export default function Signup() {
    const [isMatchPassword, setIsMatchPassword] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        const fd = new FormData(e.target);
        const acquisitionChannel = fd.getAll("acquisition")
        const data = Object.fromEntries(fd.entries())  
        data.acquisition = acquisitionChannel;
        if(data.password !== data['comfirm-password']){
          setIsMatchPassword(true)
          return
        }
        e.target.reset();

    }
    
    return (
      <form onSubmit={handleSubmit}>
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>
  
        <div className="control">
          <Input label="email" id="email" type="email" name="email" required/>
        </div>
  
        <div className="control-row">
          <div className="control">
          <Input label="password" id="password" type="password" name="password" required/>
          </div>
  
          <div className="control">
            <Input label="confirm-password" 
            id="confirm-password" 
            type="password" 
            name="confirm-password" 
            required
            onChange={()=>{
              setIsMatchPassword(false)
            }}
            error={isMatchPassword}
            errMess={"Password is not match"}
            />
          </div>
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
            />
            <label htmlFor="google">Google</label>
          </div>
  
          <div className="control">
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
            />
            <label htmlFor="friend">Referred by friend</label>
          </div>
  
          <div className="control">
            <input type="checkbox" id="other" name="acquisition" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>
  
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" />I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </form>
    );
  }