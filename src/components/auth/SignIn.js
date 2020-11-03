import React, { useState } from 'react';
import firebase from '../../config/firebaseConfig'
import { useHistory } from 'react-router-dom'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const history = useHistory();


    function handleChange(e) {
        if(e.target.id==="email") {
            setEmail(e.target.value);
            console.log('new email set!');
        } else if (e.target.id==="password"){
            setPassword(e.target.value);
            console.log('new password set!');
        } else {
            console.log("error! id not set correctly")
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                history.push('/');
            })
            .catch(error => {
                setError({error});
            });
    }

    return (
        <div className="container form-container">
            <form onSubmit={handleSubmit} className="form white">
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
                    <button className="btn green lighten-1 z-depth-0">Log In</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;




