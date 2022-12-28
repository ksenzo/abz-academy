import React from 'react';
import './button.scss';

const Button = (props) => {

    const {text, type, onClick, onUserLoad, url} = props;

    const handleClick = (e) => {
        e.preventDefault();
        onUserLoad && url && onUserLoad(url);
        onClick && onClick();
    }

    return (
        <div>
            <button onClick={handleClick} type='submit' className={`default_button ${type}`}>{text}</button>
        </div>
    );
};

export default Button;