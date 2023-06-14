import React from 'react'
import './Settings.css'
import { SiValorant,SiRiotgames } from 'react-icons/si';
import { AiOutlineCloseSquare} from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Settings() {
  return (
    <div className='settings1'>
<div className='left1'>
<div className='settings2'>SETTINGS</div>
<div className='rcandicon'>
<SiRiotgames className='vicon'/>
<div className='rclient'>RIOT CLIENT</div>
</div>
<div className='rcandicon'>
< SiValorant  className='vicon'/>
<div className='rclient'>RIOT CLIENT</div>
</div>
<div className='tos1'>TERMS OF SERVICE</div>
<div className='tos'>THIRD PARTY</div>
<div className='tos'>PRIVACY NOTICE</div>
<div className='ver'>V66.0.1.5144330</div>
</div>
<div className='right1'>
<div className='rcandicon1'>
<SiRiotgames className='vicon1'/>
<div className='rclient'>RIOT CLIENT</div>
</div>
<div className='rcl'>RIOT CLIENT LANGUAGE</div>
<label>
    <select id='languages'>
        <option label='ENGLISH(US)'></option>
        <option label='SPANISH'></option>
        <option label='NEPALI'></option>
        <option label='HINDI'></option>
        <option label='CHINESE'></option>
        <option label='BRITISH'></option>
        <option label='TAPORI'></option>
        <option label='ARABIC'></option>
        <option label='BRITAIN'></option>
    </select>
</label>
<Link to='/close'><AiOutlineCloseSquare  className='close'/></Link>
</div>
    </div>
  )
}

export default Settings