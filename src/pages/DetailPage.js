import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
// api
import { getUserById, isTokenExpired } from '../utils/apis';

// component and page
import WorkerDetail from '../components/detail/workerDetail';
import NotFoundPage from '../pages/NotFoundPage';

// assets
import loading from '../images/Loading.gif';

function DetailPage({logout}){
    const [worker,setWorker] = useState(null);
    const [load, setLoad] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
      getUserById(id).then(({error , data}) => {
        if (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
          if(isTokenExpired(error)) logout()  
        } 
        setWorker(data);
        setLoad(false)
      });
    }, [id]);
  
  
    if(load){
      return <img className='position-absolute top-50 start-50 translate-middle' src={loading} alt='loading'/>
    }
    else{
      if(worker){
        return (
          <section className='detail-page'>
            <WorkerDetail {...worker} />
          </section>
        );
      }
      else{
        return <NotFoundPage />
      }
    }
  }

export default DetailPage;
