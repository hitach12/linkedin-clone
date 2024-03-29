import React from 'react';
import './Sidebar.css'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
const Sidebar = () => {

    const user = useSelector(selectUser)

const recentItemm = (topic) => {
    return(
    <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
    </div>
    )
}

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
                <Avatar  src={user.photoUrl} className="sidebar_avatar"/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
            <div className="sidebar_stat">
            <p>who view you</p>
            <p className="sidebar_statNumber">2,356</p>
            </div>
            <div className="sidebar_stat">
            <p>Views on posts</p>
            <p className="sidebar_statNumber">2,486</p>
            </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItemm("reactJs")}
                {recentItemm('programming')}
                {recentItemm('software')}
                {recentItemm('nodejs')}
                {recentItemm('angular')}
                {recentItemm('htmlcss')}

            </div>
        </div>
    );
};

export default Sidebar;