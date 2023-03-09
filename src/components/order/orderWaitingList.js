import React from "react";

function OrderWaitingList({orders, accept, reject}){
    return (       
        orders.length > 0 ? 
        <>
            <h1>Waiting List Order</h1>
            <div className="waiting-list-order">
                {orders.map((order) => (
                    <div className="waiting-list-order__card card" key={order.id}>   
                        <div className="waiting-list-order__card__body">
                            <div className="col">
                                <h5>{order.permintaan}</h5>
                                <h6>Penyewa : {order.Penyewa.fullName}</h6>
                            </div>
                            <div className="col">
                                <p>biaya harian : Rp. {order.biayaHarian}</p>
                                <p>biaya pembangunan : Rp. {order.biayaPembangunan}</p>
                                <p>Estimasi waktu : Rp. {order.estimasiWaktu} hari</p>
                            </div>
                            <div className="col mb-3">
                                <img src={`http://localhost:3005/` + order.image} alt='location condition around' width={150}></img>
                            </div>
                            <div className="col">
                                <button id={order.id} onClick={accept} className="btn btn-success">Accept</button>
                                <button id={order.id} onClick={reject} className="btn btn-danger">Reject</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
        : ''  
    )
}

export default OrderWaitingList