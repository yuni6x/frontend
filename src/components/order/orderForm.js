import React from 'react';
import State from '../../hooks/State';

function OrderForm({workerId, penyewaId, order}) {
    const [biayaHarian, onBiayaHarianChangeHandler] = State('');
    const [permintaan, onPermintaanChangeHandler] = State('');
    const [biayaPembangunan, onBiayaPembangunanChangeHandler] = State('');
    const [estimasiWaktu, onEstimasiWaktuChangeHandler] = State('');


    function onSubmitHandler(event){
        event.preventDefault();
        order({
            permintaan, biayaHarian, biayaPembangunan, estimasiWaktu, workerId
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
                    <label htmlFor="biaya-harian" className="form-label">Biaya Harian</label>
                    <input type="number" min={0} className="form-control" id="biaya-harian" value={biayaHarian} onChange={onBiayaHarianChangeHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="biaya-pembangunan" className="form-label">Biaya Pembangunan (bahan bahan)</label>
                    <input type="number" min="0" className="form-control" id="biaya-pembangunan" value={biayaPembangunan} onChange={onBiayaPembangunanChangeHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="estimasi-waktu" className="form-label">Estimasi Waktu (hari)</label>
                    <input type="number" min="0" className="form-control" id="estimasi-waktu" value={estimasiWaktu} onChange={onEstimasiWaktuChangeHandler}/>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
    </div>
    );
}

export default OrderForm;