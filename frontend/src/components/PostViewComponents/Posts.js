import React from 'react'
import '../../stylecss/card.css'
import like from '../../images/heart.png';
import share from '../../images/share.png';
import threedots from '../../images/more_icon.png';
const Posts = (props) => {
    const user = props.data;
  return (
    <div className='card'>
        <div className='header'>
            <div className='headerleft'>
                <div className='headerlefttop'><span className='headerlefttopspan'><b>{user.name}</b></span></div>
                <div className='headerleftbottom'><span className='headerleftbottomspan'>{user.location}</span></div>
            </div>
            <div className='headerright'>
                <img className='threedots' src={threedots} alt='threedots' />
            </div>
        </div>
        <div className='body'>
            <img className='postimage' src={user.PostImage} alt='postimage' />
        </div>
        <div className='footer'>
            <div className='footertop'>
                <img className='like' alt='like' src={like}/>
                <img className='share' alt='share' src={share}/> 
                <span className='date'>Date:{user.date} </span>           
            </div>
            <div className='footermiddle'><span className='spanlikes'>{user.likes} Likes</span></div>
            <div className='footerbottom'><span className='spandescription'><b>{user.description}</b></span></div>
        </div>
    </div>
  )
}
export default Posts
