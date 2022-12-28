import React from 'react';
import './mainscreen.scss'
import Button from "../button/button";

const Mainscreen = (props) => {

    const {type} = props;

    const classForAdapt = type === 'mobile' ? 'mainscreen_mobile' : type === 'desktop' ? 'mainscreen_desktop' : false;

    return (
        <div className={`wrap ${classForAdapt}`}>
            <h1 className='title'>{'Test assignment for front-end developer'}</h1>
            <h4 className='subtitle'>{
                'What defines a good front-end developer is one that has skilled knowledge of HTML, ' +
                'CSS, JS with a vast understanding of User design thinking as they\'ll be building ' +
                'web interfaces with accessibility in mind. They should also be excited to learn, ' +
                'as the world of Front-End Development keeps evolving.'
            }</h4>
            <Button type='yellow' text='Sign up'/>
        </div>
    );
};

export default Mainscreen;