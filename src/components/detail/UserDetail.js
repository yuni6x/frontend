import React from 'react'
import {FaStar, FaEdit} from "react-icons/fa";


function UserDetail({ id, fullName, phoneNumber, 
                    img, kecamatan, kelurahan, kota, provinsi, rating,
                    priceRate, id_role }) 
{
  return (
    <div className='userProfile-detail card'>
        <div className='card-header'>
            <img src={img} alt={fullName}></img>
            <form>
              <input type="file" name='image-profile' accept="image/*"/>
              <button type='submit' className='btn btn-success' disabled>Change image</button>
            </form>
        </div>
        
        <div className='card-body'>
          <div className='biodata'>
            <div>
              <p>Nama Lengkap</p>
              <p>No HP</p>
              <p>Alamat</p>
              <p>Harga Harian</p>
            </div>
            <div>
              <p>{fullName}</p>
              <p>{phoneNumber}</p>
              <p>{kelurahan}, {kecamatan}, {kota}, {provinsi}</p>
              <p>{priceRate}</p>
            </div>
            <div><button className='btn'><FaEdit style={{ color: "black", width:"25", height:"25" }}/></button></div>
          </div>

          {
            id_role === 1 ?
            <h3>Rating {rating} <FaStar style={{ color: "gold", marginBottom: "5px" }}/></h3>
            : ''
          }
          
        </div>
    </div>
  )
}

export default UserDetail
