import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import icon from './icons/download.png'
import HeaderOption from './headerOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { Logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(Logout());
        auth.signOut()
    }
    return (
        <div className="header">
            
            <div className="header_left">
                <img src={icon}  alt="" />

                <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder="Search"/>
                </div>

            </div>

            <div className="header_right">
            <HeaderOption title ='Home' Icon={HomeIcon}/>
            <HeaderOption title ='My Network' Icon={SupervisorAccountIcon}/>
            <HeaderOption title ='Jobs' Icon={BusinessCenterIcon}/>
            <HeaderOption title ='Messaging' Icon={MessageIcon}/>
            <HeaderOption title ='Notifications' Icon={NotificationsIcon}/>
            {user ? <HeaderOption onClick={signOut} title="Me" avatar={user.photoUrl}/> : <div></div> }
            

            </div>
        </div>
    );
};

export default Header;