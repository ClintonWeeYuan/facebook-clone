import React from 'react';
import './Rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';

function Rightbar({user}) {

    const HomeRightbar = () => {
        return (
            <>
            <div className='birthday-container'>
                    <img className='birthday-img' src='../../assets/post/birthday.png' alt=''/>
                    <span className='birthday-text'>
                        <b>Pola Foster</b> and <b> 3 other friends </b> have a birthday today
                    </span>
                </div>

                <img className='rightbar-ad' src='../../assets/post/ad.jpg' alt=''/>
                <h4 className='rightbar-title'>Online Friends</h4>
                <ul className='rightbar-friend-list'>
                    {Users.map(u => (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='profile-rightbar-title'>User Information</h4>
                <div className='rightbar-info'>
                    <div className='rightbar-info-item'>
                        <span className='rightbar-info-key'>City: </span>
                        <span className='rightbar-info-value'>{user.city} </span>
                    </div>

                    <div className='rightbar-info-item'>
                        <span className='rightbar-info-key'>From: </span>
                        <span className='rightbar-info-value'>{user.from} </span>
                    </div>

                    <div className='rightbar-info-item'>
                        <span className='rightbar-info-key'>Relationship: </span>
                        <span className='rightbar-info-value'>{user.relationship === 1 ? "Single" : user.relationship === 2 ? "In a relationship" : "Its complicated"}</span>
                    </div>
                </div>

                <h4 className='rightbar-title'>User Friends</h4>
                <div className='rightbar-followings'>
                    <div className='rightbar-following'>
                        <img src='../../assets/people/hector.jpg' alt='' className='rightbar-following-img'/>
                        <span className='rightbar-following-name'>Hector Zhou</span>
                    </div>

                    <div className='rightbar-following'>
                        <img src='../../assets/people/hector.jpg' alt='' className='rightbar-following-img'/>
                        <span className='rightbar-following-name'>Hector Zhou</span>
                    </div>

                    <div className='rightbar-following'>
                        <img src='../../assets/people/hector.jpg' alt='' className='rightbar-following-img'/>
                        <span className='rightbar-following-name'>Hector Zhou</span>
                    </div>

                    <div className='rightbar-following'>
                        <img src='../../assets/people/hector.jpg' alt='' className='rightbar-following-img'/>
                        <span className='rightbar-following-name'>Hector Zhou</span>
                    </div>

                    <div className='rightbar-following'>
                        <img src='../../assets/people/hector.jpg' alt='' className='rightbar-following-img'/>
                        <span className='rightbar-following-name'>Hector Zhou</span>
                    </div>

                    <div className='rightbar-following'>
                        <img src='../../assets/people/hector.jpg' alt='' className='rightbar-following-img'/>
                        <span className='rightbar-following-name'>Hector Zhou</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className='rightbar-wrapper'>
                {user ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}

export default Rightbar
