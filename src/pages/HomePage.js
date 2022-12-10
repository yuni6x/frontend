import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loading from '../images/Loading.gif';
import Swal from 'sweetalert2';
// API
import { getAllWorker, isTokenExpired, getOrderWorker } from '../utils/apis';

// Component
import WorkerList from '../components/home/workerList';

function HomePage({logout}) {
  const [data,setData] = useState(null)
  const [load, setLoad] = useState(true);
  const [penyewa, setPenyewa] = useState(null);
  useEffect(() => {
    let role = JSON.parse(localStorage.getItem('auth')).role;
    console.log(role);
    if (isPenyewa(role)) {
      setPenyewa(true);
        getAllWorker().then(({data, error}) => {
          if (error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error,
            })
            // Check if token is expired
            if(isTokenExpired(error)) logout();   

          } else {
            console.log(data);
            setData(data);
            setLoad(false)
          } 
        })
    } else{
      setPenyewa(false);
      getOrderWorker().then(({data, error}) => {
        if (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
          // Check if token is expired
          if(isTokenExpired(error)) logout();   

        } else {
          console.log(data);
          setData(data);
          setLoad(false)
        } 
      })
    }
  }, [logout]);

  const isPenyewa = (role) => {
    return role === 'Penyewa' ? true : false;
  }


  return (
    <section className='home-page'>
      {load
          ? <img className='position-absolute top-50 start-50 translate-middle' src={loading} alt='loading'/>

          : penyewa ?
            <>
              <h1>Find Your Worker here</h1>
              <Link to={'/your-order'}><h2>Your Order</h2></Link>
              <WorkerList data = {data} />
            </>
            : <h1>Login dari Tukang</h1>
      }
      {console.log(data)}
    </section>
  )
}

export default HomePage;