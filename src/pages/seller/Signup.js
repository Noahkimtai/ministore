import React from "react";

function Signup(){
    return(
        <div className="p-6">
            <form className = 'border-solid'>
                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900">Business Name</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type='text' />
                </div>
                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900">Registration Number</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type='text' />
                </div>
                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900">Location</label>
                    <input className = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"type='text' />
                </div>
                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900">Email</label>
                    <input className ="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"type='text' />
                </div>
                <div>
                    <label className="block mb-2 text-md font-medium text-gray-900">Industry</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type='text' />
                </div>
                <div>
                    <button className = 'bg-slate-500 p-2 rounded-md hover:bg-slate-50' type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
};

export default Signup