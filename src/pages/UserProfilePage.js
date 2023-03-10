import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { changeUserImage, updateUserBiodata } from "../utils/apis";

// api
import { getUserById, isTokenExpired } from "../utils/apis";

// Component
import UserDetail from "../components/detail/UserDetail";
import NotFoundPage from "./NotFoundPage";

// assets
import loading from '../images/Loading.gif';

function UserProfilePage({ logout }) {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true);
  const [isUpdate, setIsUpdate ] = useState(false)
  const { id } = useParams();
  
  const gettingUserById = useCallback(() =>{
    getUserById(id).then(({error , data}) => {
      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        })
        if(isTokenExpired(error)) logout() 
         
      } else{
        setUser(data);
        console.log(data)
      }
      
      setLoad(false)
    });
  },[])

  

  useEffect(() => {
    gettingUserById()
  }, []);

  
  const toggleUpdate = (input) =>{
    setIsUpdate(input)
  }

  async function onChangeImage({image}){
    setLoad(true)
    console.log(image)
    
    let formData = new FormData();
    formData.append('image', image);

    const { error, feedback } = await changeUserImage(formData);

    setLoad(false)
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
      if(isTokenExpired(error)) logout() 
    }else{
      Swal.fire(
        'Good job!',
        `${feedback}`,
        'success'
      )
    }
    gettingUserById(id)
  }

  async function updateProfile(profile) {
    console.log(profile)
    const {error, feedback} = await updateUserBiodata(profile);

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
      if(isTokenExpired(error)) logout() 
    }else{
      Swal.fire(
        'Good job!',
        `${feedback}`,
        'success'
      )
    }
    toggleUpdate(false)
    gettingUserById(id)
  }



  if(load){
    return <img className='position-absolute top-50 start-50 translate-middle' src={loading} alt='loading'/>
  }
  
  else{
    if(user){
        return (
            <section className="userProfile-page">
              <UserDetail changeImage={onChangeImage} toggleUpdate={toggleUpdate} isUpdate={isUpdate} updateProfile={updateProfile} {...user} />
            </section>
          );
    }
    else{
        return <NotFoundPage />
      }
  }
  
}

export default UserProfilePage;
