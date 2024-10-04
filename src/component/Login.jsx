import Header from "./Header";
import netflixbg from "../utils/netflixBg.jpg"
import { useRef, useState } from "react";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom"


const  Login = () =>{

    const [isSignIn, setIsSignIn] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate();

    const email = useRef(null)

    const password = useRef(null)

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);

        if(message) return;

        if(!isSignIn){
            // Sin Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "_" + errorMessage);
            });

        }else{
            // Signed in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "_" + errorMessage);
            });
        }
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            navigate("/browse");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    
    }

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }
    return (
        <div className=" h-screen">
            <Header/>
            <div className=" w-full h-full">
                <img src={netflixbg} alt="background" className=" top-0 left-0 w-full h-full object-cover"/>
            </div>
            <form onSubmit={(e)=> e.preventDefault()} className="absolute inset-0 flex flex-col items-center justify-center my-auto bg-black bg-opacity-70 w-8/12 sm:w-96 mx-auto p-10 my- rounded-lg space-y-4 h-2/6 ">
                <h2 className="text-white text-3xl mb-2 item-left">{isSignIn ? "Sign In": "Sign Up"}</h2>
                <input
                     ref={email}
                    type="text"
                    placeholder="Email or mobile number" 
                    className="w-full p-2 rounded bg-inherit bg-opacity-90 text-white"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder={isSignIn ? "Password" : "New password"}
                    className="w-full p-2 rounded bg-inherit bg-opacity-90  text-white"
                />
                <p className="text-red-600">
                    {errorMessage}
                </p>
                <button className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700" onClick={handleButtonClick}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                <h2 className="text-white mb-6">
                    {isSignIn ? "New to Netflix?" : "Already exist?"} <span className="cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "Sign up now." : "Sign In"}</span>
                </h2>
            </form>
        </div>
    )
}

export default Login;