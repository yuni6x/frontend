import React, { useEffect, useState } from 'react';
import loading from '../images/Loading.gif';
import { getAllTukang } from '../utils/apis';

function HomePage() {

  const [data,setData] = useState(null)
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getAllTukang().then((data) => {
        console.log(data);
      setData(data);
      setLoad(false)
    });
  }, []);


  return (
    <section>
      {load
          ? <img className='position-absolute top-50 start-50 translate-middle' src={loading} alt='loading'/>

          : <p>Home Page</p>
      }
      {console.log(data)}
    </section>
  )
}

export default HomePage;