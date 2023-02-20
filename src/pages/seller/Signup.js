import React from "react";

function Signup(){
    return(
        <div>
            <form>
                <label>
                    Business Name
                    <input type='text' />
                </label>
                <label>
                    Registration Number
                    <input type='text' />
                </label>
                <label>
                    Location
                    <input type='text' />
                </label>
                <label>
                    <input type='text' />
                </label>
                <label>
                    Industry
                    <input type='text' />
                </label>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
};

export default Signup