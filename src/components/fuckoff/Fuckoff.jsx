import React from 'react'
import './Fuckoff.css'

import f from '../images/f.png'
export default function Fuckoff() {
  return (
    <div className='fimg'>
      <img src={f} className='fimage'/>
      <div className='fckoff'>FUCK OFF</div>
      <img src={f} className='fimage'/>
    </div>
  )
}
