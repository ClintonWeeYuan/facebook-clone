import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Profile.css';
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar';
import {useParams} from 'react-router';

function Profile() {
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        };

        fetchUser();
    }, [username]);

    return (
        <>
        <Topbar/>
        <div className='profile'>
            <Sidebar/>
            <div className='profile-right'>
                <div className='profile-right-top'>
                    <div className='profile-cover'>
                        <img className='profile-cover-image' src={user.coverPicture || '../../assets/people/defaultcover.jpg'}/>
                        <img className='profile-user-image' src={user.profilePicture || '../../assets/people/default.jpg'}/>
                    </div>
                    <div className='profile-info'>
                        <h4 className='profile-info-name'>{user.username}</h4>
                        <p className='profile-info-desc'>{user.desc}</p>
                    </div>
                </div>

                <div className='profile-right-bottom'>
                    <Feed username= {username}/>
                    <Rightbar user={user}/>
                </div>

            </div>

        </div>
        
        </>

    )
}

export default Profile
