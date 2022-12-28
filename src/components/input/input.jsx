import React from 'react';
import './input.scss';

const Input = (props) => {

    const {text, type, placeholder, name, onChange} = props;

    return (
        <div tabIndex="1" className='input_wrap'>
            <label className={`label ${type}`}>{text}
                <input name={name} id='input' type={type} onChange={onChange} className='input'/>
                <span className='default_label'>{placeholder}</span>
                <span className={`${type === 'number' ? 'number_show' : 'number_hid'}`}>{'+38 (XXX) XXX - XX - XX'}</span>
            </label>
        </div>
    );
};

export default Input;