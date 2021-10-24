import React from 'react';
import './Sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import {Users} from '../../dummyData';
import Friends from '../friends/Friends';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-wrapper'>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <RssFeedIcon className='sidebar-icon'/>
                        <span className='sidebar-list-item-text'>Feed</span>
                    </li>
                    <li className='sidebar-list-item'>
                        <ChatIcon className='sidebar-icon'/>
                        <span className='sidebar-list-item-text'>Chat</span>
                    </li>
                    <li className='sidebar-list-item'>
                        <YouTubeIcon className='sidebar-icon'/>
                        <span className='sidebar-list-item-text'>Videos</span>
                    </li>
                    <li className='sidebar-list-item'>
                        <GroupsIcon className='sidebar-icon'/>
                        <span className='sidebar-list-item-text'>Groups</span>
                    </li>
                    <li className='sidebar-list-item'>
                        <EventIcon className='sidebar-icon'/>
                        <span className='sidebar-list-item-text'>Events</span>
                    </li>
                </ul>
                <button className='sidebar-button'>Show More</button>
                <hr className='sidebar-hr'/>

                <ul className='sidebar-friend-list'>
                    {Users.map(u => (
                        <Friends key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
