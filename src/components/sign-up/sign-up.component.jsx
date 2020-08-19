import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {

  const [userData, setUserData] = useState({  
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const {displayName, email, password, confirmPassword} = userData;

  const handleSubmit = async event => {
    event.preventDefault();    
    if(password !== confirmPassword) {
      alert("passwords do not match");
      return;
    };
    
    signUpStart({displayName, email, password});
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setUserData({...userData, [name]: value});
  };

 
  return (
    <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign Up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={handleChange}
              label='Display Name'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              label='email'
              required
            />
            <FormInput
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              label='Password'
              required
            />
            <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
              label='Confirm Password'
              required
            />
            <CustomButton type='submit' >Sign Up</CustomButton>
        </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userData => dispatch(signUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUp);