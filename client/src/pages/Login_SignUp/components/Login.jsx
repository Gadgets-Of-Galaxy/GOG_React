import React from "react";

export const Login =() =>{
    return(
        <div className="login-container">
            <div className="login-left-container">
                <form>
                    <div>
                        <label>Email</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input></input>
                    </div>
                </form>
            </div>
            <div className="login-right-container">
                <img/>
            </div>
        </div>
    )
}