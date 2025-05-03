import React from 'react';
import heartImage from '../assets/tentang_kami.png';
import tim from '../assets/tim.png';
import iconcentangmerah from '../assets/iconcentangmerah.png';
import visimerah from '../assets/visimerah.png';
import nilaihati from '../assets/nilaihati.png';
import dokter from '../assets/dokter.png';
import konsultasi from '../assets/konsultasi.png';
import pencegahan from '../assets/pencegahan.png';
import edukasi from '../assets/edukasi.png'
import doktertim1 from '../assets/doktertim1.png';
import doktertim2 from '../assets/doktertim2.png';
import Gambarfasilitas1 from '../assets/Gambarfasilitas1.jpg';
import Gambarfasilitas2 from '../assets/Gambarfasilitas2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const TentangKami = () => {
  return (
    <>
    <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Kiri */}
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-4xl font-bold text-red-700 mb-6 leading-tight">
                Kenali Kami Lebih Dekat <br /> Lagi
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                    Penyakit jantung merupakan salah satu penyebab kematian tertinggi di dunia. 
                    Dengan mengenali faktor risikonya sejak dini, Anda dapat mencegah dampak yang lebih serius. Yuk, 
                    jaga kesehatan jantung Anda mulai sekarang!
              </p>
              <a href="#" className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded font-semibold shadow-md transition">
                Tentang HealtCare
              </a>
            </div>
            
            {/* kanan */}
            <div className="relative w-[300px] md:w-[400px] mt-10">
                <img src={heartImage} lt="Jantung" className="w-full z-10 relative" />
            </div>
        </div>
    </section>

        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {/* Misi */}
                <div className="bg-white rounded-lg shadow text-center p-2 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl text-red-700 mb-4">
                    <img src={iconcentangmerah} alt="Icon-Centang-Merah" className="h-10 mx-auto"/>
                  </div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">Misi</h3>
                  <p className="text-black ">Menyediakan edukasi dan dukungan untuk mencegah penyakit</p>
                </div>

                {/* Visi */}
                <div className="bg-white rounded-lg shadow text-center p-2 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl text-red-700 mb-4">
                    <img src={visimerah} alt="Visimerah" className="h-11 mx-auto "/>
                  </div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">Visi</h3>
                  <p className="text-black">Menjadi mitra terpercaya dalam menjaga kesehatan jantung masyarakat</p>
                </div>

                {/* Nilai */}
                <div className="bg-white rounded-lg shadow text-center p-2 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl text-red-700 mb-4">
                    <img src={nilaihati} alt="Nilaihati" className="h-11 mx-auto "/>
                  </div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">Nilai</h3>
                  <p className="text-black ">Menyutamakan kepedulian dan kualitas dalam setiap aspek layanan</p>
                </div>
              </div>
            </div>
        </section>

        <section className="bg-white py-16">
          <div className="text-3xl d:text-3xl font-bold text-center text-red-700 mb-10">
            <h2 className="font-bold text-red-700">Kenapa Memilih Kami</h2>
            <p className="text-base font-normal text-gray-600 mt-2">
              Kami berkomitmen untuk memberikan layanan kesehatan jantung <br />terbaik dengan pendekatan edukatif dan terpercaya.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow hover:shadow-md transition">
              <img src={dokter} alt="Icon-okter" className="h-14 mx-auto mb-4"/>
              <h3 className="text-red-700 font-bold mb-2">Tenaga Medis Berpengalaman</h3>
              <p className="text-sm text-gray-700">Tim dokter spesialis jantung yang berpengalaman</p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow hover:shadow-md transition">
              <img src={konsultasi} alt="Icon-Konsultasi" className="h-14 mx-auto mb-4"/>
              <h3 className="text-red-700 font-bold mb-2">Konsultasi Mudah Dan Cepat</h3>
              <p className="text-sm text-gray-700">Tim dokter spesialis jantung yang berpengalaman</p>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow hover:shadow-md transition">
              <img src={pencegahan} alt="Icon-Pencegahan" className="h-14 mx-auto mb-4"/>
              <h3 className="text-red-700 font-bold mb-2">Program Pencegahan Personal</h3>
              <p className="text-sm text-gray-700">Tim dokter spesialis jantung yang berpengalaman</p>
            </div>
            {/* Card 4 */}
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow hover:shadow-md transition">
              <img src={edukasi} alt="Icon-Edukasi" className="h-16 mx-auto mb-4"/>
              <h3 className="text-red-700 font-bold mb-2">Dukungan Edukasi Gratis</h3>
              <p className="text-sm text-gray-700">Tim dokter spesialis jantung yang berpengalaman</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
            
            {/* Kiri: Teks */}
            <div className="space-y-6 text-center lg:text-left transform lg:translate-x-24">
              <h2 className="text-3xl font-bold text-red-700 mb-4">Kenali Tim Ahli Kami</h2>
              <p className="text-gray-700 mb-6">
                Tim profesional kami siap membantu anda menjaga kesehatan jantung anda bla bla bla bla bla bla bla bla bla di sini bisa cek dan akan membantu untuk melanjutkan keahlian dan juga akan bisa berkembang
              </p>
              <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded shadow font-semibold transition">
                Jadwalkan Konsultasi
              </button>
            </div>

            {/* Kanan: Slider Dokter */}
            <div>
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="max-w-sm"
              >
                <SwiperSlide>
                  <div className="text-center bg-white shadow-xl rounded-2xl p-8">
                    <img src={doktertim1} alt="DR Andi-Setiawan" className="w-40 h-40 mx-auto object-contain" />
                    <h3 className="text-red-700 font-bold text-lg mt-4">Dr. Andi Setiawan</h3>
                    <p className="text-gray-600">Dokter Jantung</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center bg-white shadow-xl rounded-3xl p-8">
                    <img src={doktertim2} alt="Dr. Imam-Mubaraq" className="w-40 h-40 mx-auto object-contain" />
                    <h3 className="text-red-700 font-bold text-lg mt-4">Dr. Imam Mubaraq</h3>
                    <p className="text-gray-600">Dokter Jantung</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center bg-white shadow-xl rounded-3xl p-8">
                    <img src={tim} alt="Dr. Andi Setiawan" className="w-40 h-40 mx-auto object-contain" />
                    <h3 className="text-red-700 font-bold text-lg mt-4">Dr. Andi Setiawan</h3>
                    <p className="text-gray-600">Dokter Jantung</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center bg-white shadow-xl rounded-3xl p-8">
                    <img src={tim} alt="Dr. Andi Setiawan" className="w-40 h-40 mx-auto object-contain" />
                    <h3 className="text-red-700 font-bold text-lg mt-4">Dr. Andi Setiawan</h3>
                    <p className="text-gray-600">Dokter Jantung</p>
                  </div>
                </SwiperSlide>

                {/* Tambahkan SwiperSlide lain jika ada dokter tambahan */}
              </Swiper>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="text-3xl d:text-3xl font-bold text-center text-red-700 mb-10">
            <h2 className="font-bold text-red-700">Galeri Fasilitas</h2>
            <p className="text-base font-normal text-black mt-2">Berikut adalah foto-foto fasilitas layanan kami</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl mx-auto px-2">
            {/* Gambar 1 */}
            <div className="rounded-xl shadow-md overflow-hidden aspect-[4/3]">
              <img src={Gambarfasilitas1} alt="Fasilitas 1" className="w-full h-96" />
            </div>
            {/* Gambar 2 */}
            <div className="rounded-xl shadow-md overflow-hidden aspect-[4/3]">
              <img src={Gambarfasilitas2} alt="Fasilitas 2" className="w-full h-96" />
            </div>
            {/* Gambar 3 */}
            <div className="rounded-xl shadow-md overflow-hidden aspect-[4/3]">
              <img src="https://via.placeholder.com/400x300" alt="Fasilitas 3" className="w-full h-full object-cover" />
            </div>

            {/* Gambar 4 */}
            <div className="rounded-xl shadow-md overflow-hidden aspect-[4/3]">
              <img src="https://via.placeholder.com/400x300" alt="Fasilitas 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>



        
    </>
    
  );
};

export default TentangKami;
