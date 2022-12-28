import React from 'react';
import './user.scss';

const User = (props) => {

    const {name, email, phone, photo, position} = props.data;
    return (
        <div className='user_wrap'>
            <div className='user_photo'>
                <img src={photo}/>
            </div>
            <span className='us user_name'>{name}</span>
            <div className='us user_block'>
                <div className='us'>{position}</div>
                <div className='us'>{email}</div>
                <div className='us'>{phone}</div>
            </div>
        </div>
    );
};

export default User;