import React from 'react'

export function Logout() {
    const logout=()=>{
        localStorage.removeItem("user");
        window.location.href="/login"
    }

    return (
        <div>
            Logout page
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default Logout
