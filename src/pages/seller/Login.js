import { render } from "@testing-library/react";
import React from "react";
import Signup from "./Signup";

function Login(){
    
    const renderSignup = ()=>{
        render(
            <Signup/>
        )
    }
    
    return(
        <div>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <p>Don't have an account</p>
            <button onClick={renderSignup}> Sign UP</button>
        </div>
    )
}

export default Login;