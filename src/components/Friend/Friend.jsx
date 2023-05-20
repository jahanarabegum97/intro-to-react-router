import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    console.log(friend);
    const {email,phone,id,name} = friend;
    return (
        <div className='friend'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>phone:{phone}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Friend;