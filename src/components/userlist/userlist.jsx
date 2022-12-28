import React, {useState} from 'react';
import User from "../user/user";
import './userlist.scss'
import Button from "../button/button";

let usersPack = [];
const Userlist = (props) => {

    const {handleUsers, url, data, type} = props;

    console.log(data);

    const classForAdapt = type === 'mobile' ? 'userlist_mobile' : type === 'desktop' ? 'userlist_desktop' : false;

    return (
        <div className='userlist_wrap'>
            <div className='userlist_container'>
                <h3 className='userlist_title'>{'Working with GET request'}</h3>
                <div className={`userlist ${classForAdapt}`}>
                    {
                        data?.map(item => (
                            <User key={item.id} data={item}/>
                        ))
                    }
                </div>
                <div className='btns_wrap'>
                    <Button onUserLoad={handleUsers} url={url} type={url != null ? 'yellow' : 'hid'} text='Show more'/>
                </div>
            </div>
        </div>
    );
};

export default Userlist;