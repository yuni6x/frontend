import React from 'react';
import PropTypes from 'prop-types';

class RegisterInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChange(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onEmailChange(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }

  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value
      };
    })
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form className='note-input text-center' onSubmit={this.onSubmitHandler}>

        <div className='login-row row row-cols-2 gap-3 mx-auto my-4 '>
          <input className='col my-auto ms-auto me-4 form-control shadow-none border-0 border-bottom border-dark rounded-0 rounded-top' type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange} />
          <button className='google-btn col text-light border-0 row me-5 rounded-pill row'>
            <p className='col-1 my-auto icon-btn'>G</p>
            <p className='col-10 my-auto'>Lanjutkan dengan Google</p>
          </button>
          <input className='col my-auto ms-auto me-4 form-control shadow-none border-0 border-bottom border-dark rounded-0 rounded-top' type="email" placeholder='Email' value={this.state.email} onChange={this.onEmailChange} />
          <div className='col'></div>
          <input className='col my-auto ms-auto me-4 form-control shadow-none border-0 border-bottom border-dark rounded-0 rounded-top' type="password" placeholder='Password' autoComplete='current-password' value={this.state.password} onChange={this.onPasswordChange} />
          <button className='facebook-btn col text-light border-0 row me-5 rounded-pill'>
            <p className='col-1 my-auto icon-btn'>f</p>
            <p className='col-10 my-auto'>Lanjutkan dengan Facebook</p>
          </button>
        </div>
        <button className='input-btn border-0 rounded-pill'>Daftar</button>
      </form>
    )
  }
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;