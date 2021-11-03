import React, { useState , useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from "./firebase"
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


const Feed = () => {
    const user = useSelector(selectUser)

    const [input , setInput] = useState('')
    const [posts , setPosts] = useState([''])


    useEffect( () => {
        db.collection("posts").orderBy('timetamp','desc').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map( (doc) => ({
            id : doc.id,
            data:doc.data()
        })
        ))
        })
        console.log(posts)

    } ,[posts])
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description : user.email,
            message: input,
            photoUrl : user.photoUrl,
            timetamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
         
    }
    return (
        <div className="Feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9"/>
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#e7a33e"/>
                    <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd"/>
                    <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7fc15e"/> 
                </div>
            </div>
            <FlipMove>
            {posts.length > 1  && posts.map( ({id ,data :  {name , description , message , photoUrl}}) => (
            
            <Post key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}/>))}
            </FlipMove>

            
        </div>
    );
};

export default Feed;