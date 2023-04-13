import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <section className='base bg-color text-light row px-5 pt-5 pb-5'>
        <div className='col col-6 text-light'>
          <h1 className='mt-5'>Let’s Explore <br/> Your Handyman </h1>
          <p>We can help you building house, outlet and many more. <br/> Register for detail and enjoying benefit from us.</p>
          <Link to={'/login'}><button className='btn btn-warning'>Login Here</button></Link>
          <p className='my-3'>doesn't Have an Account ?</p>
          <Link to={'/register'}><button className='btn btn-primary'>Register Here</button></Link>
        </div>
        <div className='col col-6'>
          <img className='rounded mx-auto' src="https://www.kindpng.com/picc/m/47-475469_safeteyline-lone-worker-oil-and-gas-worker-png.png" alt="Safeteyline Lone Worker - Oil And Gas Worker Png, Transparent Png@kindpng.com"/>
        </div>
      </section>

      <main>

      <section className='base row px-5 pt-5 pb-5'>
        <div className='col col-6 my-auto'>
          <img className='rounded' alt='worker' src="https://www.kindpng.com/picc/m/47-475665_electrician-life-insurance-hero-hard-hat-hd-png.png"/>
        </div>
        <div className='col col-6 my-auto'>
          <h1>Visi dan Misi</h1>
          <p>
          1.  Bangunan yang kokoh dengan desain yang terbaik akan membuat kita merasa nyaman menempati tempat tersebut <br/>
          2.  Kami dirikan untuk memenuhi keinginan serta kebutuhan anda, dengan adanya layanan ini kami bisa membantu anda untuk memperbaiki kerusakan tempat anda dan kami bisa membuat tempat yang anda huni menjadi lebih nyaman <br/>
          3.  Karena kenyamanan dapat diperoleh dari desain yang diinginkan <br/>
          </p>
        </div>
      </section>

      <section className='base row bg-color text-light px-5 pt-5 pb-5'>
        <div className='col col-6 my-auto'>
          <h1>Kenapa Harus Kami?</h1>
          <div className='row row-cols-2 text-light text-center'>
            <h2 className='col rounded bg-danger fs'>Gratis <br/> pendaftaran</h2>
            <h2 className='col rounded bg-warning fs'>Harga <br/> terjangkau</h2>
            <h2 className='col rounded bg-primary fs'>Bebas <br/> konsultasi</h2>
            <h2 className='col rounded bg-success fs'>Banyak <br/> pilihan</h2>
          </div>
        </div>
        <div className='col col-6 my-auto'>
          <img className='rounded' alt='worker' src="https://www.kindpng.com/picc/m/159-1596327_construction-worker-hd-png-download.png"/>
        </div>
      </section>

      <section className='base row px-5 pt-5 pb-5'>
        <div className='col col-6 my-auto'>
          <img className='rounded' alt='worker' src="https://www.kindpng.com/picc/m/47-475801_industrail-engineer-png-image-engineer-png-transparent-png.png"/>
        </div>
        <div className='col col-6 my-auto'>
          <h1 className='mt-5'>Tertarik untuk bergabung bersama kami? </h1>
          <Link to={'/register-worker'}><button type="button" className="btn btn-outline-warning w-100"><h2 className='fs'>Daftar</h2></button></Link>
        </div>
      </section>
      </main>
    </div>
  )
}

export default LandingPage;