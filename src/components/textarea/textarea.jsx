import React from 'react';
import './textarea.scss';

const Textarea = (props) => {

    const {handleFile} = props;

    return (
        <div className='text_area_wrap'>
            <label className='upload_btn' htmlFor='actual-btn'>{'Upload'}</label>
            <label className='upload_field' htmlFor='actual-btn'></label>
            <input onChange={handleFile} id='actual-btn' type={props.type} hidden/>
            <input onChange={handleFile} id='actual-btnq23' type='file' hidden/>
        </div>
    );
};

export default Textarea;