import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

function WorkerItem({ id, fullName, img, kota, rating }) {
 return (
   <div className='worker-item card'>
    <div className='worker-item__img'>
        <img src={img} alt=''></img>
    </div>
    <div className='worker-item__body'>
        <Link to={`/worker/${id}`}><h3 className='worker-item__body__name'>{fullName}</h3></Link>
        <p className='worker-item__body__city'>{kota}</p>
        <p className='worker-item__body__rating'>Rating: {rating} <FaStar style={{ color: "gold", marginBottom: "5px" }}/></p>
    </div>
   </div>
 );
}

export default WorkerItem;