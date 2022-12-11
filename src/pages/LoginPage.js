// React
import React , { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import loading from '../images/Loading.gif';
import Swal from 'sweetalert2';
// API
import { login } from '../utils/apis';

// Component
import LoginInput from '../components/signIn/LoginInput';


function LoginPage({ loginSuccess }) {

  // ketika dibuka maka class akan berubah
  const background = document.querySelector("body");
  background.classList.replace('body-color','body-yellow');

  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

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
      await loginSuccess(data);
      navigate('/');
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
      <p className='login-text text-center'>Belum punya akun?</p>
      <button className='daftar-btn mx-auto border-0 rounded-pill'><Link to="/register" style={{ color: '#FFF', textDecoration: 'none' }}>Buat Akun</Link></button>

      <div className='mention fixed-bottom mt-2 top-100 start-50 translate-middle'>
        <p>Dengan melanjutkan, Anda menyetujui <span>Persyaratan</span> <br/>
        <span>Layanan</span> Find Ideal Worker dan mengakui bahwa Anda telah membaca<br/>
        <span>Kebijakan Privasi</span> kami</p>
      </div>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;