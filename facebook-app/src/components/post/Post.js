import React, {useState, useEffect, useContext} from 'react';
import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import {format} from 'timeago.js';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';



function Post({post}) {

    const [like, setLike] = useState(post.likes.length);
    const [isliked, setIsliked] = useState(false);
    const [user, setUser] = useState({});
    const {user:currentUser} = useContext(AuthContext);

    useEffect(() => {
        setIsliked(post.likes.includes(currentUser._id));
        setLike(post.likes.length);
    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId]);

    const likeHandler = () =>{
        try{
            axios.put('/posts/' + post._id + '/like',{ userId: currentUser._id});
            
        }catch(err){
            console.log(err);
        };

        setLike(isliked ? like - 1 : like + 1);
        setIsliked(!isliked);
    }

    return (
        <div className='post'>
            <div className='post-wrapper'>
                <div className='post-top'>
                    <div className='post-top-left'>
                        <Link to={`profile/${user.username}`}> 
                            <img className='post-profile-img' src={user.profilePicture || "../../assets/people/default.jpg"} alt=''/>
                        </Link>
                        <span className='post-username'>{user.username}</span>
                        <span className='post-date'>{format(post.createdAt)}</span>
                    </div>
                    <div className='post-top-right'>
                        <MoreVertIcon/>
                    </div>
                </div>

                <div className='post-center'>
                    <span className='post-text'>{post.desc}</span>
                    <img className='post-img' src={post.img} alt=''></img>
                </div>

                <div className='post-bottom'>
                    <div className='post-bottom-left'>
                        <img className='heart-icon' onClick={likeHandler} src='../../assets/post/heart.png' alt=''/>
                        <img onClick={likeHandler} className='like-icon' src='../../assets/post/like.png' alt=''/>
                        <span className='post-like-counter'>{like} people like this post</span>
                    </div>
                    <div className='post-bottom-right'>
                        <span className='post-comment-text'>{post.comment} people have commented</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
