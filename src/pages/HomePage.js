import React, { useCallback, useEffect, useState, useMemo } from 'react';
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

  const gettingAllWorker = useCallback(() => {
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
  }, [getAllWorker])

  const gettingOrderWorker = useCallback(() => {
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
        setWaitingListOrder(data.filter((d) => d.status === null));
        setOnProgressOrder(data.filter((d) => d.status === 'on progress'));
        setDoneOrder(data.filter((d) => d.status === 'done'))
        console.log(waitingListOrder);
        console.log(data);
        setLoad(false)
      } 
    })
  }, [getOrderWorker])


  useEffect(() => {
    let role = JSON.parse(localStorage.getItem('auth')).role;
    console.log(role);
    if (isPenyewa(role)) {
      setPenyewa(true);
      gettingAllWorker()
    } 

    else{
      setPenyewa(false);
      gettingOrderWorker()
    }
  }, [gettingOrderWorker, gettingAllWorker]);

  const isPenyewa = (role) => {
    return role === 'Penyewa' ? true : false;
  }

  async function onAccept(event){
    setLoad(true)
    const {error} = await changeOrderStatus({id: event.target.id, status: 'on progress'});
    setLoad(false)

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
      // Check if token is expired
      if(isTokenExpired(error)) logout();   
    } else {
       gettingOrderWorker()
    }
  }

  async function onReject(event){
    setLoad(true)
    const {error} = await changeOrderStatus({id: event.target.id, status: 'Rejected'});
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
      gettingOrderWorker()
    }
  }

  async function onDone(event){
    setLoad(true)
    const {error} = await changeOrderStatus({id: event.target.id, status: 'done'});
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
      gettingOrderWorker()
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
        <WorkerList data = {data} />
      </section>
    )
  } else { // Render as role 'tukang'
    console.log(waitingListOrder.length)
    console.log(onProgressOrder.length)
    console.log(doneOrder.length)
    if (waitingListOrder.length > 0 || onProgressOrder.length > 0 || doneOrder.length > 0) {
      return (
        <section className='home-page'>
          <OrderWaitingList accept={onAccept} reject={onReject} orders = {waitingListOrder} />
          <OrderOnProgress done={onDone} orders = {onProgressOrder} />  
          <OrderDone orders ={doneOrder} />
        </section>
      )
    } else {
      return (
      <section className='home-page'>
          <h1>You doesnt received any order yet</h1>
      </section>
      )
    }
  }
}

export default HomePage;