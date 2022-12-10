import React from 'react';

function OrderPenyewa({orders}) {

    return (
    <div className='order-penyewa'>
        <h1>Your Order</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col">Permintaan</th>
                    <th scope="col">Biaya Harian</th>
                    <th scope="col">Biaya Pembangunan (bahan)</th>
                    <th scope="col">Estimasi Waktu</th>
                    <th scope='col'>Pekerja</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Rating</th>
                </tr>
            </thead>
            <tbody>
        {
            orders.length > 0 
            ? orders.map((order) => ( 
                    <tr key={order.id}>
                        <td>{order.permintaan}</td>
                        <td>Rp {order.biayaHarian}</td>
                        <td>Rp {order.biayaPembangunan}</td>
                        <td>{order.estimasiWaktu} hari</td>
                        <td>{order.Pekerja.fullName}</td>
                        <th>{order.status === '' ? 
                        'menunggu persetujuan' : order.status
                        }</th>
                        <th>{order.rating}</th>
                    </tr>
                ))
            : ''
        }
            </tbody>
        </table>
    </div>
    );
}

export default OrderPenyewa;