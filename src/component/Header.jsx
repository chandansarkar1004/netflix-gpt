import React from 'react';
import website_logo from "../utils/netflixLogo.jpg"

const Header = () => {
  return (
    <div className='absolute py-2 px-16 bg-gradient-to-b from-black w-full'>
        <img className='w-48' 
            src={website_logo} alt="Netflix" />
    </div>
  )
}

export default Header