import React from 'react';
import { FaStar } from 'react-icons/fa';
import { rupiah } from '../../utils/apis';
import StarRating from './starRating';

function OrderPenyewa({orders, giveRating, confirm, notConfirm}) {

    return (
        <div className='order-penyewa'>
            <h1>Your Order</h1>
            {
            orders.length > 0 
                ? orders.map((order) => (
                    <div className='order-penyewa__card card' key={order.id}>
                        <div className='order-penyewa__card__body'>
                            <h3>{order.permintaan}</h3>
                            <p>Worker : {order.Pekerja?.fullName}</p>
                            <p>Daily Price: {rupiah(order.biayaHarian)}</p>
                            <p>Development cost : {rupiah(order.biayaPembangunan)}</p>
                            <p>Estimate Time : {order.estimasiWaktu} Hari</p>
                            <p>Total Price : {rupiah(order.biayaTotal)}</p>
                            <img src={`http://localhost:3005/` + order.image} alt='repair location' width={200}></img>
                        </div>
                        <div className='order-penyewa__card__footer'>
                            <h3 className='text-capitalize'>{order.status === null ? 'Menunggu Persetujuan' : order.status}</h3>
                            <div>{order.rating ? 
                                    <h3>Rating: {order.rating} {<FaStar style={{ color: "gold", marginBottom: "5px" }}/>}</h3>
                                    : 
                                    <div>{order.status === 'done by worker' ? 
                                        <>
                                            <button id={order.id} className='btn btn-primary' onClick={confirm}>Confirm Done Order</button> 
                                            <button id={order.id} className='btn btn-danger' onClick={notConfirm}>Not Confirm Done Order</button> 
                                        </>
                                        

                                        : 
                                        order.status === 'confirmed done' ? 
                                            <StarRating giveRating={giveRating} orderId={order.id} />
                                            : ''
                                    }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                ))
            : ''
            
            }
        </div>
        );
}

export default OrderPenyewa;