import Header from "./Header";
import netflixbg from "../utils/netflixBg.jpg"
import { useState } from "react";

const  Login = () =>{

    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }
    return (
        <div className=" h-screen">
            <Header/>
            <div className=" w-full h-full">
                <img src={netflixbg} alt="background" className=" top-0 left-0 w-full h-full object-cover"/>
            </div>
            <form className="absolute inset-0 flex flex-col items-center justify-center my-auto bg-black bg-opacity-70 w-11/12 sm:w-96 mx-auto p-10 my- rounded-lg space-y-4 h-2/6 ">
                <h2 className="text-white text-3xl mb-2 item-left">{isSignIn ? "Sign In": "Sign Up"}</h2>
                <input
                    type="text"
                    placeholder="Email or mobile number" 
                    className="w-full p-2 rounded bg-inherit bg-opacity-90 text-white"
                />
                <input
                    type="password"
                    placeholder={isSignIn ? "Password" : "New password"}
                    className="w-full p-2 rounded bg-inherit bg-opacity-90  text-white"
                />
                <button className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700">
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