import React from 'react';
import "./form.scss";
import Input from "../input/input";
import Positions from "../positions/positions";
import Textarea from "../textarea/textarea";
import Button from "../button/button";

const Form = (props) => {

    const {onChange, label, positions, formActive, handleFile, onSubmit, onCheck} = props;

    return (
        <div className='form_wrapper'>
            <form className='form_container'>
                <h4 className='userlist_title'>Working with POST request</h4>
                <div className='input_wrapper'>
                    <Input onChange={onChange} name={'name'} label={label} type='text' placeholder='Your name'/>
                    <Input name={'email'} label={label} onChange={onChange} type='text' placeholder='Email'/>
                    <Input name={'phone'}label={label} onChange={onChange} type='number' placeholder='Phone'/>
                </div>
                <Positions data={positions} onCheck={onCheck} />
                <Textarea type='file' handleFile={handleFile} />
                <Button onClick={onSubmit} type={`${formActive === true ? 'yellow' : 'gray'}`} text={'Sign Up'}/>
            </form>
        </div>
    );
};

export default Form;