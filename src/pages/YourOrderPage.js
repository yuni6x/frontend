import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
// api
import { isTokenExpired, getOrderPenyewa, putRatingOrder } from '../utils/apis';

// component and page
import OrderPenyewa from '../components/order/orderPenyewa';

// assets
import loading from '../images/Loading.gif';

function YourOrderPage({logout}){
    const [orders,setOrder] = useState(null);
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

        } else{
            console.log(data)
            setOrder(data);
            setLoad(false)
        }  
      });
    }, [logout]);

    async function giveRating(event) {
      const { value: text } = await Swal.fire({
        input: 'number',
        inputLabel: 'Rating',
        inputPlaceholder: 'Give Your Rating Here (1 - 5)',
        inputAttributes: {
          'min': 1,
          'max': 5,
          'aria-label': 'Give Your Rating Here'
        },
        showCancelButton: true
      })
      
      if (text) {
        const { error, feedback } = await putRatingOrder({id: event.target.id , rating: text})
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
      }
    }
  
  
    if(load){
      return <img className='position-absolute top-50 start-50 translate-middle' src={loading} alt='loading'/>
    }
    else{
        return (
          <section className='your-order-page'>
            <OrderPenyewa orders={orders} giveRating={giveRating}/>
          </section>
        );
    }
  }

export default YourOrderPage;
