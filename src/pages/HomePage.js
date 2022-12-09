import React, { useEffect, useState } from 'react';
import loading from '../images/Loading.gif';

// API
import { getAllWorker } from '../utils/apis';

// Component
import WorkerList from '../components/home/workerList';

function HomePage() {

  const [data,setData] = useState(null)
  const [load, setLoad] = useState(true);

  useEffect(() => {
    let role = JSON.parse(localStorage.getItem('auth')).role;
    console.log(role);
    if (isPenyewa(role)) {
        getAllWorker().then((data) => {
            console.log(data);
            setData(data);
            setLoad(false)
        })
    }
  }, []);

  const isPenyewa = (role) => {
    return role === 'Penyewa' ? true : false;
  }


  return (
    <section className='home-page'>
      {load
          ? <img className='position-absolute top-50 start-50 translate-middle' src={loading} alt='loading'/>

          : <>
            <h1>Find Your Worker here</h1>
            <WorkerList data = {data} />
          </>
          
      }
      {console.log(data)}
    </section>
  )
}

export default HomePage;