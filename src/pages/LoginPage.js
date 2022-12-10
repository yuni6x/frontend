// React
import React , { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import loading from '../images/Loading.gif';
import Swal from 'sweetalert2';
// API
import { login } from '../utils/apis';

// Component
import LoginInput from '../components/signIn/LoginInput';


function LoginPage({ loginSuccess }) {
  const [load, setLoad] = useState(false);

  async function onLogin({ email, password }) {
    setLoad(true)
    const { error, data } = await login({ email, password });
    setLoad(false)

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
    } else{
      loginSuccess(data);
    }
  }


  if (load) {
    return (
      <img
        className="position-absolute top-50 start-50 translate-middle"
        src={loading}
        alt="loading"
      />
    );
  }

  return (
    <section className='login-card shadow text-center card border-0 container rounded-5 position-fixed top-50 start-50 translate-middle'>
      <h1 className='input-title text-center'>Selamat Datang</h1>
      <LoginInput login={onLogin} />
      <p className='login-text text-center my-3'><Link to="/register">Lupa Passwor</Link></p>
      <p className='login-text text-center mt-2'>Belum punya akun ?</p>
      <button className='daftar-btn mx-auto border-0 rounded-pill'><Link to="/register">Buat Akun</Link></button>

      <div className='mention fixed-bottom mt-4 top-100 start-50 translate-middle'>
        <p>Dengan melanjutkan, Anda menyetujui <span>Persyaratan</span></p>
        <p><span>Layanan</span> Find Ideal Worker dan mengakui bahwa Anda telah membaca</p> 
        <p><span>Kebijakan Privasi</span> kami</p>
      </div>
      
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;