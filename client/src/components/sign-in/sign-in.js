import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input';
import CustomButton from '../button/button';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';


import './sign-in.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };
    return (
      <div className="section has-text-centered signIn">
      <div className='container'>
        <span className="subtitle is-5 has-text-black">Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
         <CustomButton className="ct" type='submit'>Sign in </CustomButton>
        <div className="pb-3"></div>
         <CustomButton className="ctS" onClick={googleSignInStart}>
              Sign in with Google
          </CustomButton>
        </form>
        </div>
        <Link to="/signup">
          <div className="subtitle is-5 has-text-black pt-5 accHover">I do not have an account</div>
        </Link>
        </div>
    );
  }

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);