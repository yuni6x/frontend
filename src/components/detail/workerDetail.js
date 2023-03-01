import React from 'react';
import { Link } from 'react-router-dom';
import {FaStar} from "react-icons/fa";

function WorkerDetail({ id, fullName, phoneNumber, img, kecamatan, kelurahan, kota, provinsi, keahlian, rating }) {
  return (
    <div className='worker-detail card'>
      <div className='card-header'>
        <img src={img ? `http://localhost:3005/`+img : 'https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png'} alt={fullName}></img>
        <h1 className='card-header__name'>{fullName}</h1>
        <p className='card-header__skill'>Skill: {keahlian}</p>
        <p className='card-header__address'>Address: <span className='fw-normal'>{kecamatan}, {kelurahan}, {kota}, {provinsi}</span></p>
        <p className='card-header__phone'>phoneNumber: <span className='fw-normal'>{phoneNumber}</span></p>
      </div>
      <div className='card-body'>
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
