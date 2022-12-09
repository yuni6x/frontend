import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function WorkerItem({ id, fullName, img, kota, rating }) {
 return (
   <div className='worker-item card'>
    <div className='worker-item__img'>
        <img src={img} alt=''></img>
    </div>
    <div className='worker-item__body'>
        <Link to={`/worker/${id}`}><h3 className='worker-item__body__name'>{fullName}</h3></Link>
        <p className='worker-item__body__city'>{kota}</p>
        <p className='worker-item__body__rating'>Rating: {rating}</p>
    </div>
   </div>
 );
}

// WorkerItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   createdAt: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   archived: PropTypes.bool.isRequired,
//   unArchive: PropTypes.func,
//   onArchive: PropTypes.func,
//   onDelete: PropTypes.func.isRequired,
// };

export default WorkerItem;