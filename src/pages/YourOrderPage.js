import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// api
import { isTokenExpired, getOrderPenyewa, putRatingOrder, confirmOrderStatus } from '../utils/apis';

// component and page
import OrderPenyewa from '../components/order/orderPenyewa';

// assets
import loading from '../images/Loading.gif';

function YourOrderPage({logout}){
    const [orders,setOrder] = useState(null);
    const [load, setLoad] = useState(true);
    const navigate = useNavigate();

    const gettingOrder = useCallback(() => {
      getOrderPenyewa().then(({error, data}) => {
        if (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
          if(isTokenExpired(error)) logout() 

        } else{
            console.log(data)
            setOrder(data);
            setLoad(false)
        }
      })
    }, [])

    useEffect(() => {
      let role = JSON.parse(localStorage.getItem('auth')).role;

      if(!isPenyewa(role)) navigate('/');
      gettingOrder();
      
    }, []);

    const isPenyewa = (role) => {
      return role === 'Penyewa' ? true : false;
    }

    async function onConfirmed(event){
      console.log(event.target.id)
      setLoad(true)
      const {error} = await confirmOrderStatus({id: event.target.id, status: 'confirmed done'});
      setLoad(false)
      
      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        })
        // Check if token is expired
        if(isTokenExpired(error)) logout();   
      } else{
        gettingOrder()
      }
    }

    async function giveRating({rating, review, orderId}) {
      console.log('order id' + orderId)
      console.log(review)
      console.log(rating)
        const { error, feedback } = await putRatingOrder({id: orderId , rating, review})
        if (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
          if(isTokenExpired(error)) logout() 

        } else{
          Swal.fire({
            icon: 'success',
            title: 'Good Job',
            text: feedback,
          })
        }
      
      
      setLoad(false)
      gettingOrder()
    }
  
  
    if(load){
      return <img className='position-absolute top-50 start-50 translate-middle' src={loading} alt='loading'/>
    }
    else{
        return (
          <section className='your-order-page'>
            <OrderPenyewa orders={orders} giveRating={giveRating} confirm={onConfirmed}/>
          </section>
        );
    }
  }

export default YourOrderPage;
