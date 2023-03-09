import React from "react"; 
import {FaStar} from "react-icons/fa";

function OrderDone({orders}) {
    return(
        orders.length > 0 ? 
        <>
            <h1>Done Order</h1>
            <div className="on-progress-order">
                {orders.map((order) => (
                    <div className="on-progress-order__card card" key={order.id}>
                        <div className="on-progress-order__card__body">
                            <div className="col">
                                <h5>{order.permintaan}</h5>
                                <h6>Penyewa : {order.Penyewa.fullName}</h6>
                            </div>
                            <div className="col">
                                <p>biaya harian : Rp. {order.biayaHarian}</p>
                                <p>biaya pembangunan : Rp. {order.biayaPembangunan}</p>
                                <p>Estimasi waktu : Rp. {order.estimasiWaktu} hari</p>
                            </div>
                            <div className="col">
                                <h1>DONE</h1>
                                {
                                    order.rating ?
                                    <h2>Rating: {order.rating} {<FaStar style={{ color: "gold", marginBottom: "5px" }}/>}</h2>
                                    : ''
                                }
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

export default OrderDone