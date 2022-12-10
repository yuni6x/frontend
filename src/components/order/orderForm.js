import React from 'react';
import PropTypes from 'prop-types';
import State from '../../hooks/State';

function OrderForm({workerId, penyewaId, order}) {
    const [biayaHarian, onBiayaHarianChangeHandler] = State('');
    const [biayaPembangunan, onBiayaPembangunanChangeHandler] = State('');
    const [estimasiWaktu, onEstimasiWaktuChangeHandler] = State('');


    function onSubmitHandler(event){
        console.log(biayaHarian)
        console.log(estimasiWaktu)
        console.log(biayaPembangunan)
        event.preventDefault();
        order({
            biayaHarian, biayaPembangunan, estimasiWaktu, workerId
        })
    }


    return (
    <div className='order-form'>
            <h1>Order Form</h1>
            <form onSubmit={onSubmitHandler}>
                <input type={'hidden'} id='workerId' value={workerId} />
                <input type={'hidden'} id='penyewaId' value={penyewaId} />
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

// OrderForm.propTypes = {
//   title: PropTypes.string.isRequired,
//   createdAt: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   archived: PropTypes.bool.isRequired,
//   unArchive: PropTypes.func,
//   onArchive: PropTypes.func,
//   onDelete: PropTypes.func.isRequired,
// };

export default OrderForm;