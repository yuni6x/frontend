import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
// api
import { isTokenExpired, getOrderPenyewa } from '../utils/apis';

// component and page
import OrderPenyewa from '../components/order/orderPenyewa';
import NotFoundPage from '../pages/NotFoundPage';

// assets
import loading from '../images/Loading.gif';

function YourOrderPage({logout}){
    const [order,setOrder] = useState(null);
    const [load, setLoad] = useState(true);
  
    useEffect(() => {
      getOrderPenyewa().then(({error , data}) => {
        if (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
          if(isTokenExpired(error)) logout()  
        } 
        setOrder(data);
        setLoad(false)
      });
    }, [logout]);
  
  
    if(load){
      return <img className='position-absolute top-50 start-50 translate-middle' src={loading} alt='loading'/>
    }
    else{
        return (
          <section className='your-order-page'>
            <OrderPenyewa {...order} />
          </section>
        );
    }
  }

export default YourOrderPage;
