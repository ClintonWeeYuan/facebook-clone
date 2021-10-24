import React from 'react';
import './Online.css';


function Online({user}) {
    return (
        <li className='rightbar-friend'>
            <div className='rightbar-img-container'>
                <img src='' className='rightbar-img' src={user.profilePicture}></img>
                <span className='rightbar-online'></span>
            </div>
            <span className='rightbar-username'>{user.username}</span>
        </li>
    )
}

export default Online
