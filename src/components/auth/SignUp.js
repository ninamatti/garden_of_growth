import React, { useState } from 'react';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    function handleChange(e) {
        if(e.target.id==="email") {
            setEmail(e.target.value);
            console.log('new email set!');
        } else if (e.target.id==="password"){
            setPassword(e.target.value);
            console.log('new password set!');
        } else if (e.target.id==="firstName"){
            setFirstName(e.target.value);
            console.log('new firstname set!');
        } else if (e.target.id==="lastName"){
            setLastName(e.target.value);
            console.log('new lastname set!');
        } else {
            console.log("error! id not set correctly")
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email, password, firstName, lastName);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn green lighten-1 z-depth-0">Log In</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
