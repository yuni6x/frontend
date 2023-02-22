import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

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
  const { id } = useParams();

  useEffect(() => {
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
  }, [id, logout]);



  if(load){
    return <img className='position-absolute top-50 start-50 translate-middle' src={loading} alt='loading'/>
  }
  
  else{
    if(user){
        return (
            <section className="userProfile-page">
              <UserDetail {...user} />
            </section>
          );
    }
    else{
        return <NotFoundPage />
      }
  }
  
}

export default UserProfilePage;
