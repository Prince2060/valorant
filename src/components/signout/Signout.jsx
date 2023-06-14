import React, { useState } from 'react'
import './Signout.css'
import { SiRiotgames, } from 'react-icons/si';
import {BsFacebook,BsXbox,BsArrowRight} from 'react-icons/bs';
import {FcGoogle } from 'react-icons/fc';
import {AiFillApple } from 'react-icons/ai';
import {FaUser } from 'react-icons/fa';
import back from '../images/back.png'
import { Link } from 'react-router-dom';
function Signout() {
 
  return (
    <div className='signout'>
      <div className="left">
        <div className='iconandriot'>
         <Link className='linkname tworiots1' to={"/"}> <SiRiotgames  className='rioticon' />
           <div className='tworiots'>
            <div className='teext'>RIOT</div>
            <div className='teext'>GAMES</div>
          </div>
          </Link>
        
        </div>
        <div className='signin'>Sign In</div>
        <input type="text"  placeholder='USERNAME' className='inputbox' />
        <input type="text" placeholder='PASSWORD' className='inputbox1' />
        <div className="fouricons">
          <div><button className='bluebut'>
            <BsFacebook  className='facebook'/>
          </button></div>
          <div><button className='bluebut1'>
            <FcGoogle  className='facebook'/>
          </button></div>
          <div><button className='bluebut2'>
            <AiFillApple  className='facebook'/>
          </button></div>
          <div><button className='bluebut3'>
            <BsXbox  className='facebook'/>
          </button></div>
        </div>
        <div className='checkboxandtext'>
        <div className='checkbox'></div>
        <div className='staysi'>Stay signed in</div>
        </div>
        <div className="nextbox">
          <BsArrowRight  className='arrow'/>
        </div>
        <div className="cantandversion">
        <div className="cant">CAN'T SIGN IN</div>
        <div className='version'>V66.0.1</div>
        </div>
      </div>
      <div className="right">
        <img src={back} className='backimage'/>
      </div>
    </div>
  )
}

export default Signout