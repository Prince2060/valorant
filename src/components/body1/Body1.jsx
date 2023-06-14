import React, { useState } from 'react'
import './Body1.css'
import { BsMicrosoft } from 'react-icons/bs';
import { SiRiotgames,SiValorant } from 'react-icons/si';
import { FaUser } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import valo1 from '../images/valo1.png'
import { Link } from 'react-router-dom';
function Body1() {
  
  const[show,setShow]=useState(false)
  function clickHandler(){
    setShow(!show)

  }
 
  return (
    <div className='body1'>
        <div className='main'>
        <div>
      <BsMicrosoft  className='micro'/>
      </div>
      <div className='riotandname'>
     <SiRiotgames className='riot'/>
     <div className='riotgames'>
     <div className='rtext'><strong>RIOT</strong></div>
     <div className='rtext'><strong>GAMES</strong></div>
     </div>
     </div>
     {show &&  <div className='userbox'>
  <div className='name'>Prince2060#4158</div>
  <div className='line'></div>
  <div className='accountandup'>
  <div className='accountsetting'>ACCOUNT DETAILS</div>
  <FiArrowUpRight  className='uparrow'/>
  </div>
  <div className='accountandup1'>
  <div className='accountsetting'>ACCOUNT SECURITY</div>
  <FiArrowUpRight  className='uparrow1'/>
  </div>
  <div className='settings'> <Link to='/setting' className='settingss'>SETTINGS</Link> </div>
  <div className='settings'><Link className='manish' to='/signout'>SIGN OUT</Link></div>
  <div className='settings'><Link className='settingsss' to='/exit'>EXIT</Link>  </div>
 </div>}
     <FaUser onClick={clickHandler} className='micro1'/>
     </div>
     <div>
     <div className='mygames'>My Games</div>
    <Link to='/play'><img src={valo1} className='valoimage'/></Link>
    </div >
    <div className="logoandtext">
    <SiValorant  className='valologo'/>
    <div className='valotext'>VALORANT</div>
    </div>

    </div>
  )
}

export default Body1