// React
import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';

// API
import { register } from '../utils/apis';

// Components
import RegisterInput from '../components/signIn/RegisterInput';


function RegisterPage() {
  const navigate = useNavigate();

  // ketika dibuka maka class akan berubah
  const background = document.querySelector("body");
  background.classList.replace('body-color','body-yellow');

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
    } else {
      navigate('/');
    }
  }

  return (
    <section className='register-card shadow text-center card border-0 container rounded-5 position-relative'>
      <h1 id='background-text' className='input-title text-center'>Register</h1>
      <RegisterInput register={onRegisterHandler} />
      <p id='background-text' className='login-text text-center mt-3'>Sudah punya akun?</p>
      <button className='daftar-btn mx-auto border-0 rounded-pill'><Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>Masuk</Link></button>

      
    </section>
  )
}

export default RegisterPage;