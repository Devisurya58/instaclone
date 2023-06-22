import React from 'react'
import { Link } from 'react-router-dom'
import lens from '../images/lens.png'
import '../stylecss/landingpage.css'
const LandingPage = () => {
  return (
    <div>
      <center>
        <div className='container'>
          <div className='box'>
            <img alt='lensimage' height='100%' width='100%' src={lens} />
          </div>
          <div className='box'>
            <section className='box2'>
              <div className='centered-content'>
                <x className='tenxteamfour'>10x Team 4</x><br/>
                <Link to='/postview'>
                <button className='entertopostview'>Enter</button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </center>
    </div>
  )
}
export default LandingPage
