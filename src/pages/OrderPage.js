import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

// api
import { getUserById, isTokenExpired, postOrder } from "../utils/apis";

// component and page
import NotFoundPage from "./NotFoundPage";
import OrderForm from "../components/order/orderForm";

// assets
import loading from "../images/Loading.gif";

function OrderPage({logout}) {
  const [userID, setUserID] = useState(null);
  const [worker,setWorker] = useState(null);
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    let penyewaId = JSON.parse(localStorage.getItem("auth")).id;
    setUserID({
        workerId: id, 
        penyewaId
    })
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
      setLoad(false);
    });
  }, [logout,id]);


  async function onOrder({biayaHarian, biayaPembangunan, estimasiWaktu, workerId}) {
    console.log(biayaPembangunan)
    setLoad(true)
    const { error, feedback } = await postOrder({ biayaHarian, biayaPembangunan, estimasiWaktu, workerId });
    setLoad(false)
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
      if(isTokenExpired(error)) logout() 
    }else{
      Swal.fire(
        'Good job!',
        `${feedback}`,
        'success'
      )
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
  } else {
    if (worker) {
      return (
        <section className="order-page">
          <OrderForm order={onOrder} {...userID} />
        </section>
      );
    } else {
      return <NotFoundPage />;
    }
  }
}

export default OrderPage;
