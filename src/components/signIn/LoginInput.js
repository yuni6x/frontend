import React from 'react';
import PropTypes from 'prop-types';
import State from '../../hooks/State';

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
    <form className='note-input text-center' onSubmit={onSubmitHandler}>
      <div className='login-row row row-cols-2 gap-3 mx-auto my-4 '>
        <input className='col my-auto ms-auto me-4 form-control shadow-none border-0 border-bottom border-dark rounded-0 rounded-top' type="email" placeholder='Email' value={email} onChange={onEmailChangeHandler} />
        <button className='google-btn col text-light border-0 row me-5 rounded-pill row'>
          <p className='col-1 my-auto icon-btn'>G</p>
          <p className='col-10 my-auto'>Lanjutkan dengan Google</p>
        </button>
        <input className='col my-auto ms-auto me-4 form-control shadow-none border-0 border-bottom border-dark rounded-0 rounded-top' type="password" placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
        <button className='facebook-btn col text-light border-0 row me-5 rounded-pill'>
          <p className='col-1 my-auto icon-btn'>f</p>
          <p className='col-10 my-auto'>Lanjutkan dengan Facebook</p>
        </button>
      </div>
      <button className='input-btn border-0 rounded-pill'>Login</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;