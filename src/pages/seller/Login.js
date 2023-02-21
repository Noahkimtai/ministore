import { render } from "@testing-library/react";
import React from "react";
import Signup from "./Signup";

function Login(){
    
    const renderSignulabel = ()=>{
        render(
            <Signup />
        )
    }
    
    return(
        <div className="p-6">
            <form className = 'border-solid'>
                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900">Username</label>
                    <input className = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="text" />
                </div>
                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900">Password</label>
                    <input className = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="labelassword" />
                </div>
                <div>
                    <button className= 'bg-slate-500 p-2 rounded-md hover:bg-slate-50' type="submit">Submit</button>
                </div>
            </form>
            <label className="block mb-2 text-md font-medium text-gray-900">Don't have an account</label>
            <button className = 'bg-slate-500 p-2 rounded-md hover:bg-slate-50'onClick={renderSignulabel}> Sign Ulabel</button>
        </div>
    )
}

export default Login;