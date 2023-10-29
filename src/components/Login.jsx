import React, { useState } from 'react'
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from '@firebase/firestore';

const Login = () => {
    const scoreCollectionRef = collection(db, "score");
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(scoreCollectionRef,{email:email,highscore:0});
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-neutral-800 h-screen flex items-center justify-center">
            <div className=" p-8 rounded-lg w-96">
                <h2 className="text-3xl text-amber-500 font-semibold mb-8 text-center ">GAMESGRABBER</h2>
                <div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-medium mb-2 text-amber-500">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-red-500 rounded-md focus:outline-none text-red-500 focus:border-red-500"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="mb-10">
                        <label htmlFor="password" className="block text-lg font-medium mb-2 text-amber-500">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-red-500 rounded-md text-red-500 focus:outline-none focus:border-red-500"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <button
                            onClick={handleSignUp}
                            className="text-lg mb-12 w-full bg-transparent hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
                        >
                            SignUp
                        </button>
                        <button
                            onClick={handleLogin}
                            className="text-lg mb-12 w-full bg-transparent hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login