import React from 'react';
import { Link } from 'react-router-dom';
import {FaStar} from "react-icons/fa";

function WorkerDetail({ id, fullName, phoneNumber, img, kecamatan, kelurahan, kota, provinsi, rating }) {
  return (
    <div className='worker-detail card'>
      <div className='card-header'>
        <img src={img ? img : 'https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png'} alt={fullName}></img>
        <h4 className='card-header__address'>{kecamatan}, {kelurahan}, </h4>
        <h4 className='card-header__address'>{kota}, {provinsi}</h4>
        <h4 className='card-header__phone'>{phoneNumber}</h4>
      </div>
      <div className='card-body'>
        <h1 className='card-body__title'>{fullName}</h1>
        <h2 className='card-body__rating'>Rating {rating} <FaStar style={{ color: "gold", marginBottom: "5px" }}/></h2>
        <div className='card-body__button'>
          <a href={`https://wa.me/${phoneNumber}`} target='blank'><button className='card-body__button__chat'>Chat me</button></a>
          <Link to={`/order/${id}`}><button className='card-body__button__order'>Order me</button></Link>
          
        </div>
        
      </div>
    </div>
  );
}

export default WorkerDetail;
