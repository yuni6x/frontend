import React from 'react';

function BantuanPage() {
  return (
    <main style={{ backgroundColor: 'white' }}>
      <section className='base row px-5'>
        <div className='col col-6 my-auto'>
          <h1>Tata Cara <br/> Pemesanan Tukang</h1>
          <p>
            1.  Buka Aplikasi FIW <br/>
            2.	Pada halaman utama terdapat profil tukang <br/>
            3.	Pilih tukang yang akan disewa, didalamnya terdapat identitas, alamat, histori, rating, pilih pesan dan akan otomatis masuk pada whattsApp <br/>
            4.	Berdiskusi melalui pesan whattsApp <br/>
            5.	Tukang datang dan memeriksa kerusakan <br/>
            6.	Pilih pesan tukang <br/>
            7.	Isi estimasi pengerjaan, dam terdapat format biaya harian <br/>
            8.	Bayar melalui aplikasi atau secara langsung atas kesepakatan dua belah pihak
          </p>
        </div>
        <div className='col col-6 my-auto'>
          <img className='rounded' src="https://www.kindpng.com/picc/m/47-475665_electrician-life-insurance-hero-hard-hat-hd-png.png" alt="Electrician Life Insurance Hero - Hard Hat, HD Png Download@kindpng.com"/>
        </div>
      </section>

      <section className='base contact row card mx-5 mt-3'>
        <h1>Kontak</h1>
        <p className='col'>Email: loremopsum@gmail.com</p>
        <p className='col'>No Telp: 08934238823</p>
      </section>
    </main>
  )
}

export default BantuanPage;