import React from 'react';
import website_logo from "../utils/netflixLogo.jpg"
import user_icon from "../utils/netflix-user-icon.webp"
import { auth } from '../utils/firebase';
import {useNavigate} from "react-router-dom"
import { signOut } from "firebase/auth";
import {useSelector} from "react-redux";
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import {useDispatch} from "react-redux"; 
import GptSearch from './GPTSearch';
import { toggleGptSearchView } from '../utils/GptSlice';



const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user.uid;
          dispatch(addUser({
            uid: uid, email: email, displayName: displayName 
          }))
          
        } else {
            dispatch(removeUser());
            navigate("/")
          // User is signed out
          // ...
        }
    });
    
    return () => unsubscribe();
    
   }, [])

  return (
    <div className='absolute py-2 px-16 bg-gradient-to-b from-black w-full flex justify-between z-40'>
        
        <img className='w-48' src={website_logo} alt="Netflix" />

        { user && <div className='flex'>
        <button className="bg-blue-700 text-white font-semibold h-10 px-6 py-2 mt-5 mr-3 rounded-md shadow-lg hover:bg-blue-800 transition-all duration-200 ease-in-out transform hover:scale-105"
          onClick={handleGptSearchClick}>
          GPT Search
        </button>
          <img className='w-12 h-12 mt-4' src={user_icon} alt="user-icon" />
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign out)</button>
        </div>}

    </div>
  )
}

export default Header