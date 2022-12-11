import React from 'react';
import PropTypes from 'prop-types';
import State from '../hooks/State';

function LoginInput ({login}) {
  const [email, onEmailChangeHandler] = State('');
  const [password, onPasswordChangeHandler] = State('');


  function onSubmitHandler(event) {
    event.preventDefault();

    login({
      email: email,
      password: password,
    });
  }

  return (
    <form className='note-input' onSubmit={onSubmitHandler}>
      <div className='login-row mt-2'>
        <input className='form-control my-4 mx-auto shadow-none border-0 border-bottom border-dark rounded-0 rounded-top' type="email" placeholder='Email' value={email} onChange={onEmailChangeHandler} />
        <input className='form-control my-4 mx-auto shadow-none border-0 border-bottom border-dark rounded-0 rounded-top' type="password" placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
      </div>
      <button className='input-btn my-3 border-0 rounded-pill'>Masuk</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;