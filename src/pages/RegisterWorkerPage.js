// React
import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';

// API
import { register } from '../utils/apis';

// Components
import RegisterWorkerInput from '../components/signIn/RegisterWorkerInput';

function RegisterWorkerPage() {
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
      <h1 id='background-text' className='input-title text-center'>Register Worker</h1>
      <RegisterWorkerInput register={onRegisterHandler} />

      
    </section>
  )
}

export default RegisterWorkerPage;