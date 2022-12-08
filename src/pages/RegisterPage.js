// React
import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';

// API
import { register } from '../utils/apis';

// Components
import RegisterInput from '../components/signIn/RegisterInput';


function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className='login-card shadow text-center card border-0 container rounded-5 position-fixed top-50 start-50 translate-middle'>
      <h1 id='background-text' className='input-title text-center'>Register</h1>
      <RegisterInput register={onRegisterHandler} />
      <p id='background-text' className='login-text text-center mt-3'>have an account?</p>
      <button className='daftar-btn mx-auto border-0 rounded-pill'><Link to="/">Login</Link></button>

      <div className='mention fixed-bottom mt-4 top-100 start-50 translate-middle'>
        <p>Dengan melanjutkan, Anda menyetujui <span>Persyaratan</span></p>
        <p><span>Layanan</span> Find Ideal Worker dan mengakui bahwa Anda telah membaca</p> 
        <p><span>Kebijakan Privasi</span> kami</p>
      </div>

    </section>
  )
}

export default RegisterPage;