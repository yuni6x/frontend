import React from 'react';
import { FaStar } from 'react-icons/fa';
import { rupiah } from '../../utils/apis';

function OrderPenyewa({orders, giveRating}) {

    return (
        <div className='order-penyewa'>
            <h1>Your Order</h1>
            {
            orders.length > 0 
                ? orders.map((order) => (
                    <div className='order-penyewa__card card' key={order.id}>
                        <div className='order-penyewa__card__body'>
                            <h3>{order.permintaan}</h3>
                            <p>Pekerja : {order.Pekerja?.fullName}</p>
                            <p>Biaya Harian: {rupiah(order.biayaHarian)}</p>
                            <p>Biaya Pembangunan : {rupiah(order.biayaPembangunan)}</p>
                            <p>Estimasi Waktu : {order.estimasiWaktu} Hari</p>
                            <p>Biaya Total : {rupiah(order.biayaTotal)}</p>
                            <img src={`http://localhost:3005/` + order.image} alt='repair location' width={200}></img>
                        </div>
                        <div className='order-penyewa__card__footer'>
                            <h3 className='text-capitalize'>{order.status === null ? 'Menunggu Persetujuan' : order.status}</h3>
                            <div>{order.rating ? 
                                    <h3>Rating: {order.rating} {<FaStar style={{ color: "gold", marginBottom: "5px" }}/>}</h3>
                                    : 
                                    <div>{order.status === 'done' ? 
                                        <button id={order.id} className='btn btn-primary' onClick={giveRating}>Berikan Rating</button> 
                                        : ''}
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