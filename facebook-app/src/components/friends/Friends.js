import React from 'react';
import './Friends.css'

function Friends({user}) {
    return (
        <li className='sidebar-friend'>
            <img className='sidebar-friend-img' src={user.profilePicture} alt=""/>
            <span className='sidebar-friend-name'>{user.username}</span>
        </li>
    )
}

export default Friends
