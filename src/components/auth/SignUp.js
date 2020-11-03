import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import app from '../../config/firebaseConfig'
import { db } from '../../config/firebaseConfig'

// const db = firebase;
console.log('db: ', db);

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);

    const history = useHistory();
    
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
        
        // const {email, username, password} = this.state;
        app
            .auth()
	        .createUserWithEmailAndPassword(email, password)
	        .then(() => {
                const user = app.auth().currentUser;
                console.log('new user: ', user);
	            user
	                .updateProfile({displayName: firstName})
		            .then(() => {
		                    history.push('/');
		                })
		            .catch(error => {
		                setError({error});
		            });
                })
                .catch(error => {
                    setError({error});
                });
            console.log('db: ', db);
            addUser();
    }

    function addUser() {
        db.collection("User").doc(firstName + ' ' + lastName).set({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
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
                    <button className="btn green lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
