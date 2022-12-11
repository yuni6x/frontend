import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loading from '../images/Loading.gif';
import Swal from 'sweetalert2';
// API
import { getAllWorker, isTokenExpired, getOrderWorker, changeOrderStatus } from '../utils/apis';

// Component
import WorkerList from '../components/home/workerList';
import OrderWaitingList from '../components/order/orderWaitingList';
import OrderOnProgress from '../components/order/orderOnProgress';
import OrderDone from '../components/order/orderDone';

function HomePage({logout}) {
  const [data,setData] = useState(null); // array of object type
  const [load, setLoad] = useState(true); // boolean type
  const [penyewa, setPenyewa] = useState(null); // boolean type
  const [waitingListOrder,setWaitingListOrder] = useState(null); // array of object type
  const [onProgressOrder,setOnProgressOrder] = useState(null); // array of object type
  const [doneOrder,setDoneOrder] = useState(null); // array of object type


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
          setData(data)
          console.log(data);
          setWaitingListOrder(data.filter((d) => d.status === ""));
          setOnProgressOrder(data.filter((d) => d.status === 'on progress'));
          setDoneOrder(data.filter((d) => d.status === 'done'))
          console.log(waitingListOrder);
          console.log(onProgressOrder);
          console.log(doneOrder);
          
          setLoad(false)
        } 
      })
    }
  }, [logout]);

  const isPenyewa = (role) => {
    return role === 'Penyewa' ? true : false;
  }

  async function onAccept(event){
    const {error} = await changeOrderStatus({id: event.target.id, status: 'on progress'});
    
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
      // Check if token is expired
      if(isTokenExpired(error)) logout();   
    }
  }

  async function onReject(event){
    const {error} = await changeOrderStatus({id: event.target.id, status: 'rejected'});

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
      // Check if token is expired
      if(isTokenExpired(error)) logout();   
    }
  }


  if(load){
    return <img className='position-absolute top-50 start-50 translate-middle' src={loading} alt='loading'/>
  }

  if (penyewa) {
    // render as role 'penyewa'
    return (
      <section className='home-page'>
        <h1>Find Your Worker here</h1>
        <Link to={'/your-order'}><h2>Your Order</h2></Link>
        <WorkerList data = {data} />
      </section>
    )
  } else { // Render as role 'tukang'
    if (data.length > 0) {
      return (
        <section className='home-page'>
          <OrderWaitingList accept={onAccept} reject={onReject} orders = {waitingListOrder} />
          <OrderOnProgress orders = {onProgressOrder} />  
          <OrderDone orders ={doneOrder} />
        </section>
      )
    } else {<h3>You doesnt received any order yet</h3>}
  }
}

export default HomePage;