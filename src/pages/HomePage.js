import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loading from '../images/Loading.gif';
import Swal from 'sweetalert2';
// API
import { getAllWorker, isTokenExpired } from '../utils/apis';

// Component
import WorkerList from '../components/home/workerList';

function HomePage({logout}) {
  const [data,setData] = useState(null)
  const [load, setLoad] = useState(true);

  useEffect(() => {
    let role = JSON.parse(localStorage.getItem('auth')).role;
    console.log(role);
    if (isPenyewa(role)) {
        getAllWorker().then(({data, error}) => {
          if (error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error,
            })
            if(isTokenExpired(error)) logout()  
          } 
          console.log(data);
          setData(data);
          setLoad(false)
           
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

          : <>
            <h1>Find Your Worker here</h1>
            <Link to={'/your-order'}><h2>Your Order</h2></Link>
              <WorkerList data = {data} />
            </>
      }
      {console.log(data)}
    </section>
  )
}

export default HomePage;