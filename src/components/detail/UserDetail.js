import React, {useState} from 'react'
import {FaStar, FaEdit} from "react-icons/fa";
import State from '../../hooks/State';

function UserDetail({ id, fullName, phoneNumber, 
                    img, kecamatan, kelurahan, kota, provinsi, rating,
                    priceRate, id_role, toggleUpdate, isUpdate, changeImage })         
{
  const [formFullName, setFullName] = State(fullName)
  const [image, setImage] = useState('')

  function handlerImage(e){
      console.log(e.target.files[0]);
      setImage(e.target.files[0]);
  }

  function submitImage(event){
    event.preventDefault();
    console.log(image)
    changeImage(
      {image}
    )

  }


  return (
    <div className='userProfile-detail card'>
        <div className='card-header'>
            <img src={img ? `http://localhost:3005/`+img : 'https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png'} alt={fullName}></img>
            <form onSubmit={submitImage}>
              <input type="file" name='image-profile' accept="image/*" onChange={handlerImage} />
              <button type='submit' className='btn btn-success'>Change image</button>
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
              {
                
                isUpdate === true ? 
                <form>
                  <input type='text' name='fullName' value={formFullName} onChange={setFullName}></input>
                </form>
                :
                <>
                  <p>{fullName}</p>
                  <p>{phoneNumber}</p>
                  <p>{kelurahan}, {kecamatan}, {kota}, {provinsi}</p>
                  <p>{priceRate}</p>
                </>
              }
              
            </div>
            <div style={{ display: isUpdate? 'none' : 'block' }}><button className='btn' onClick={() => toggleUpdate(true)}><FaEdit style={{ color: "black", width:"25", height:"25" }}/></button></div>
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
