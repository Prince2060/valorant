import React from 'react'
import './Play.css'
import valo1 from '../images/valo1.png'
import { AiFillPlayCircle} from 'react-icons/ai';
import patch from '../images/patch.png'
import patch1 from '../images/patch1.png'
import { Link } from 'react-router-dom';
export default function Play() {
    return (
        <div className='play'>
            <img src={valo1}  className='playimage'/>
            <div className='val'>VALORANT</div>
            <div className='marginshit'>
            <Link className='playshit' to='/browser'><div className='butandplay'>
                <AiFillPlayCircle  className='playcircle playcircle1'/>
                <div className='play1'>PLAY</div>
            </div>
            </Link>
            </div>
            <img src={patch1} className='patch'/>
            <img src={patch} className='patch1'/>
        </div>
    )
}
