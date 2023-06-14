import React from 'react'
import './Body2.css'
import lol from '../images/img3.png'
import img2 from '../images/img2.png'
import img1 from '../images/img1.png'
import img4 from '../images/img4.png'
import valo1 from '../images/valo1.png'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import background from '../images/background.png'
import { SiValorant} from 'react-icons/si';
import { Link } from 'react-router-dom'

function Body2() {
  return (
    <div className='body2'>
      <div className='butsback2'>
      <div className='allgames'>All Games</div>
      <div className='allimages'>
        <div className='imglol'>
        <div>
         <Link to='https://www.leagueoflegends.com/en-gb/'><img src={lol} className='img1'/></Link>
        </div>
        <div className='lolandtext'>
       <img src={logo1}  className='logo'/>
        <div className='loltext'>League of Legends</div>
        </div>
        </div>

        <div className='imglol'>
        <div>
        <Link to='https://wildrift.leagueoflegends.com/en-us/'><img src={img2} className='img1'/></Link>
        </div>
        <div className='lolandtext'>
        <img src={logo2}  className='logo'/>
        <div className='loltext'>League of Legends:Wild Rift</div>
        </div>
        </div>

        <div className='imglol'>
        <div>
        <Link to='https://playruneterra.com/en-us/'><img src={img1} className='img1'/></Link>
        </div>
        <div className='lolandtext'>
        <img src={logo3}  className='logo'/>
        <div className='loltext'>Legends of Runeterra</div>
        </div>
        </div>

        <div className='imglol'>
        <div>
        <Link to='https://teamfighttactics.leagueoflegends.com/en-gb/'><img src={img4} className='img1'/></Link>
        </div>
        <div className='lolandtext'>
        <img src={logo4}  className='logo'/>
        <div className='loltext'>Teamfight Tactics</div>
        </div>
        </div>

        <div className='imglol'>
        <div>
        <Link to='https://playvalorant.com/en-gb/'><img src={valo1} className='img1'/></Link>
        </div>
        <div className='lolandtext'>
        <SiValorant  className='valologo'/>
        <div className='loltext'>Valorant</div>
        </div>
        </div>
        </div>
        <div className='allgames'>Special Events</div>
        <img src={background}  className='background'/>
        <div className='butandtext'>
          <div className='lamo'>
          <div className='textandtm'>
          <div>CONVERGENCE: A League Of Legend Story </div>
          <div className='tm'> TM</div>
          </div>
          <div className='convergencetext'>CONVERGENCE: A League Of Legends Story is a story-driven,single-player 2D action platformer featuring dynamic combat and unique exploration opporyunities thanks to Ekko's ability to travel through space and time.Rewind your actions to learn from your mistakes and outsmart each new enemy.Will it be enough to save Zaun's future?</div>
          </div>
          <div className='buttons'>
       <div><Link to='https://convrgencegame.com/purchase/'><button  className='buuts'>Purchase Now</button></Link></div>
       <div><Link to='https://convrgencegame.com/en-us/'><button className='buuts1'>Learn More</button></Link></div>
       </div>
        </div>
      </div>

    </div>
  )
}

export default Body2