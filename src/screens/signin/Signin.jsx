import React from 'react'
import './signin.css'
import { Link } from 'react-router-dom'


const Signin = () => {
    

    const handleSignUpClick = () => {
       
    }
    return (
        <div className="signin-container">
            <h1>Sign In</h1>
            <form>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Sign In</button>
            </form>
            <Link to={'/signup'}>Don't have an account? Sign Up</Link>
        </div>
    )
}

export default Signin