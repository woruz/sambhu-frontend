import React, {useState} from 'react'
import { Link } from "react-router-dom"

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Here you can implement your signup logic
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        // You can make an API call or perform other actions here
    };
    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
                <p>Already signed up? <Link to={"/"}>Sign In</Link></p>
            </form>
        </div>
    )
}

export default Signup