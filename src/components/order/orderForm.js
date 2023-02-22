import React, { useState } from 'react';
import State from '../../hooks/State';

function OrderForm({workerId, penyewaId, biayaHarian, order}) {
    const [permintaan, onPermintaanChangeHandler] = State('');
    const [biayaPembangunan, onBiayaPembangunanChangeHandler] = State('');
    const [estimasiWaktu, onEstimasiWaktuChangeHandler] = State('');
    const [image, setImage] = useState('')

    function handlerImage(e){
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }


    function onSubmitHandler(event){
        event.preventDefault();
        
        order({
            permintaan, biayaPembangunan, estimasiWaktu, workerId, biayaHarian, image
        })
    }


    return (
    <div className='order-form'>
            <h1>Order Form</h1>
            <form onSubmit={onSubmitHandler}>
                <input type={'hidden'} id='workerId' value={workerId} />
                <input type={'hidden'} id='penyewaId' value={penyewaId} />
                <div className="mb-3">
                    <label htmlFor="permintaan" className="form-label">Permintaan</label>
                    <input type="text" className="form-control" id="permintaan" value={permintaan} onChange={onPermintaanChangeHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="biaya-pembangunan" className="form-label">Biaya Pembangunan (bahan bahan)</label>
                    <input type="number" min="0" className="form-control" id="biaya-pembangunan" value={biayaPembangunan} onChange={onBiayaPembangunanChangeHandler}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="estimasi-waktu" className="form-label">Estimasi Waktu (hari)</label>
                    <input type="number" min="0" className="form-control" id="estimasi-waktu" value={estimasiWaktu} onChange={onEstimasiWaktuChangeHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label" >Gambar Lokasi sekitar</label>
                    <input className="form-control" type="file" id="formFile" onChange={handlerImage} />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
    </div>
    );
}

export default OrderForm;