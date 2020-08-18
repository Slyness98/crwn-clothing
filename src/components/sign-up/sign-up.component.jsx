import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

class SignUp extends React.Component {
 constructor() {
    super();
    this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
  }



  handleSubmit = async event => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    const { signUpStart } = this.props;

    if(password !== confirmPassword) {
      alert("passwords do not match");
      return;
    };
    signUpStart({displayName, email, password, confirmPassword});
  };

  handleChange = event => {
      const {name, value} = event.target;
      this.setState({[name]: value});
  };

  render() {
      const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
          <h2 className='title'>I do not have an account</h2>
          <span>Sign Up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
              <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label='Display Name'
                required
              />
              <FormInput
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                label='email'
                required
              />
              <FormInput
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label='Password'
                required
              />
              <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                label='Confirm Password'
                required
              />
              <CustomButton type='submit' >Sign Up</CustomButton>
          </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userData => dispatch(signUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUp);