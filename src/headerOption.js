import React from 'react';
import './HeaderOption.css'
import Avatar from '@mui/material/Avatar';

const headerOption = ({Icon , title , avatar , onClick}) => {
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption_icon"/>}
            {avatar && <Avatar className='headerOption_icon' src={avatar}/>}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    );
};

export default headerOption;