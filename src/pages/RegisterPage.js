// React
import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';

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
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className='register-card shadow text-center card border-0 container rounded-5 position-relative'>
      <h1 id='background-text' className='input-title text-center'>Register</h1>
      <RegisterInput register={onRegisterHandler} />
      <p id='background-text' className='login-text text-center mt-3'>Sudah punya akun?</p>
      <button className='daftar-btn mx-auto border-0 rounded-pill'><Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>Masuk</Link></button>

      <div className='mention fixed-bottom position-absolute mt-2 top-100 start-50 translate-middle'>
        <p>Dengan melanjutkan, Anda menyetujui <span>Persyaratan</span> <br/>
        <span>Layanan</span> Find Ideal Worker dan mengakui bahwa Anda telah membaca<br/>
        <span>Kebijakan Privasi</span> kami</p>
      </div>
    </section>
  )
}

export default RegisterPage;