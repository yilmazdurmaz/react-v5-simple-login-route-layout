import React from 'react'

export function Login() {
    const login=()=>{
        localStorage.setItem("user","loggedin");
        window.location.href="/"
    }

    return (
        <div>
            Login page
            <button onClick={login}>get login</button>
        </div>
    )
}

export default Login
