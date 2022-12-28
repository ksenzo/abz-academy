import React, { useEffect, useState } from "react"
import logo from '../../assets/Logo.svg';
import Button from "../button/button";
import './navigation.scss';

const Navigation = (props) => {

    return (
        <div className={`header ${props.type}`}>
            <span className='logo'><img src={logo} alt='photo' /></span>
            <div className='header_wrap'>
                <Button type='yellow' text='Users'/>
                <Button type='yellow' text='Sign Up'/>
            </div>
        </div>
    )
}

export default Navigation;