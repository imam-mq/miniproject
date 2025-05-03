import heartImage from '../assets/jantung.png';
import gejala from "../assets/gejala.png";
import rokok from "../assets/rokok.png";
import kolesterol from "../assets/kolesterol.png";
import guldar from "../assets/guldar.png";
import kurangaktivitas from "../assets/kurangaktivitas.png";
import obesitas from "../assets/obesitas.png";
import keluarga from "../assets/keluarga.png";
import ibu1 from "../assets/ibu1.png";
import { HeartIcon } from '@heroicons/react/24/solid';


const Beranda = () => {
  return (
  <>
      <section className="bg-gray-200 py-16">
          <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Kiri */}
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-4xl font-bold text-red-700 mb-6 leading-tight">
                Cegah Penyakit Jantung <br /> Sejak Dini
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Penyakit jantung merupakan salah satu penyebab kematian tertinggi di dunia. Dengan mengenali faktor risikonya sejak dini, Anda dapat mencegah dampak yang lebih serius. Yuk, jaga kesehatan jantung Anda mulai sekarang!
              </p>
              <a href="#" className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded font-semibold shadow-md transition">
                Konsultasi Sekarang
              </a>
            </div>

            {/* Kanan */}
            <div className="relative w-[300px] md:w-[400px] mt-10">
              <img src={heartImage} alt="Jantung" className="w-full z-10 relative" />

              {/* Badge Atas di kanan */}
              <div className="absolute top-2 right-4 bg-white px-3 py-1 rounded-full shadow text-xs font-semibold">
                95% Tingkat Akurat
              </div>

              {/* Icon Love Bawah */}
              <div className="absolute bottom-0 right-1/2 -translate-x-1/2 bg-white p-1 rounded-full shadow">
                <HeartIcon className="h-5 w-5 text-red-500" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-11 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center text-red-600 font-bold w-64">
                <h4 className="text-2xl font-bold text-red-600 mb-1">16.9</h4>
                <p className="text-xs text-red-700 font-medium leading-tight">
                  Juta kematian akibat penyakit <br /> kardiovaskular per tahun
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center text-red-600 font-bold w-64">
                <h4 className="text-2xl font-bold text-red-600 mb-1">80%</h4>
                <p className="text-xs text-red-700 font-medium leading-tight">
                  Serangan jantung dapat dicegah <br /> dengan gaya hidup sehat
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center text-red-600 font-bold w-64">
                <h4 className="text-2xl font-bold text-red-600 mb-1">82%</h4>
                <p className="text-xs text-red-700 font-medium leading-tight">
                  Pengguna merasa lebih sadar <br /> akan faktor risiko
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center text-red-600 font-bold w-64">
                <h4 className="text-2xl font-bold text-red-600 mb-1">50%</h4>
                <p className="text-xs text-red-700 font-medium leading-tight">
                  Banyak yang masuk rumah <br /> sakit
                </p>
              </div>
            </div>
          </div>
        </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Kolom Kiri: Teks */}
          <div className="space-y-6 text-center lg:text-left transform lg:translate-x-24">
            <h3 className="text-2xl md:text-3xl font-bold text-red-700">
              Apakah Anda Sering Mengalami <br />Hal Ini?
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Gejala sakit jantung biasanya terjadi karena beberapa kebiasaan tidak sehat yang sering diabaikan.
            </p>

            <div className="space-y-4">
              {/* Gejala 1 */}
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <div className="bg-red-100 p-2 rounded-full">
                  <HeartIcon className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Nyeri Dada</p>
                  <p className="text-gray-600 text-sm">
                    Nyeri dada saat beraktivitas bisa menjadi tanda awal masalah jantung.
                  </p>
                </div>
              </div>

              {/* Gejala 2 */}
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 15a4 4 0 018 0M3 15v6M11 15v6M16 13a4 4 0 014 4v4M16 13v6M20 17v2" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Sesak Napas</p>
                  <p className="text-gray-600 text-sm">
                    Sulit bernapas tiba-tiba saat istirahat atau melakukan aktivitas ringan.
                  </p>
                </div>
              </div>

              {/* Gejala 3 */}
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <div className="bg-purple-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 12h16M12 4v16" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Detak Jantung Tidak Teratur</p>
                  <p className="text-gray-600 text-sm">
                    Jantung terasa berdebar cepat atau tidak beraturan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="space-y-8 text-center lg:text-left transform lg:translate-x-32">
            <img
              src={gejala}
              alt="Dokter"
              className="max-w-sm w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="text-2xl md:text-3xl font-bold text-center text-red-700 mb-10">
        <h2>Apa Saja Faktor Resiko Jantung <br />Yang Anda Waspadai ?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-10">
          {/* 1 */}
          <div className="bg-gray-50 p-5 rounded-lg shadow-md text-center">
            <img src={rokok} alt="rokok" className="w-20 h-20 mx-auto mb-2"/>
            <p className="text-red-600 font-semibold text-lg">Merokok</p>
          </div>
          {/* 2 */}
          <div className="bg-gray-50 p-5 rounded-lg shadow-md text-center">
            <img src={kolesterol} alt="kolesterol" className="w-20 h-20 mx-auto mb-2"/>
            <p className="text-red-600 font-semibold text-lg">Kolesterol Tinggi</p>
          </div>

          {/* 3 */}
          <div className="bg-gray-50 p-5 rounded-lg shadow-md text-center">
            <img src={guldar} alt="GulaDarah" className="w-20 h-20 mx-auto mb-2"/>
            <p className="text-red-600 font-semibold text-lg">Tekanan Darah Tinggi</p>
          </div>

          {/* 4 */}
          <div className="bg-gray-50 p-5 rounded-lg shadow-md text-center">
            <img src={kurangaktivitas} alt="Kurangaktivitas" className="w-20 h-20 mx-auto mb-2"/>
            <p className="text-red-600 font-semibold text-lg">Tekanan Darah Tinggi</p>
          </div>

          {/* 5 */}
          <div className="bg-gray-50 p-5 rounded-lg shadow-md text-center">
            <img src={obesitas} alt="Obesitas" className="w-20 h-20 mx-auto mb-2"/>
            <p className="text-red-600 font-semibold text-lg">Tekanan Darah Tinggi</p>
          </div>

          {/* 6 */}
          <div className="bg-gray-50 p-5 rounded-lg shadow-md text-center">
            <img src={keluarga} alt="Keluarga" className="w-20 h-20 mx-auto mb-2"/>
            <p className="text-red-600 font-semibold text-lg">Tekanan Darah Tinggi</p>
          </div>
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="text-2xl md:text-3xl font-bold text-center text-red-700 mb-10">
          <h2>Apa Kata Mereka Yang Sudah <br />Ngambil Langkah Bijak</h2>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* testi-1 */}
            <div className="bg-white text-red-600 p-6 space-y-4 rounded-xl shadow-md transition duration-300 hover:bg-red-600 hover:text-white cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <img src={ibu1} alt="Ibu1" className="w-10 h-10 rounded-full object-cover" />
                <div className="font-semibold">Bu Rina-49 Tahun</div>
              </div>
              <p className="text-sm mb-4">
                "Dulu saya sering sesak napas.....<br />
                Tapi setelah saya rutin periksa dan ubah gaya hidup saya merasa jauh lebih sehat."
              </p>
              <p className="text-xs italic">-- Ibu rumah tangga</p>
            </div>

            {/* testi-2 */}
            <div className="bg-white text-red-600 p-6 space-y-4 rounded-xl shadow-md transition duration-300 hover:bg-red-600 hover:text-white cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <img src={ibu1} alt="Ibu1" className="w-10 h-10 rounded-full object-cover" />
                <div className="font-semibold">Bu Rina-49 Tahun</div>
              </div>
              <p className="text-sm mb-4">
                "Dulu saya sering sesak napas..... bla bla bla bls bls blssdsadsdsdadsdad<br />
                Tapi setelah saya rutin periksa dan ubah gaya hidup saya merasa jauh lebih sehat."
              </p>
              <p className="text-xs italic">-- Ibu rumah tangga</p>
            </div>

            {/* testi-3 */}
            <div className="bg-white text-red-600 p-6 space-y-4 rounded-xl shadow-md transition duration-300 hover:bg-red-600 hover:text-white cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <img src={ibu1} alt="Ibu1" className="w-10 h-10 rounded-full object-cover" />
                <div className="font-semibold">Bu Rina-49 Tahun</div>
              </div>
              <p className="text-sm mb-4">
                "Dulu saya sering sesak napas.....<br />
                Tapi setelah saya rutin periksa dan ubah gaya hidup saya merasa jauh lebih sehat."
              </p>
              <p className="text-xs italic">-- Ibu rumah tangga</p>
            </div>

            {/* testi-4 */}
            <div className="bg-white text-red-600 p-6 space-y-4 rounded-xl shadow-md transition duration-300 hover:bg-red-600 hover:text-white cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <img src={ibu1} alt="Ibu1" className="w-10 h-10 rounded-full object-cover" />
                <div className="font-semibold">Bu Rina-49 Tahun</div>
              </div>
              <p className="text-sm mb-4">
                "Dulu saya sering sesak napas.....<br />
                Tapi setelah saya rutin periksa dan ubah gaya hidup saya merasa jauh lebih sehat."
              </p>
              <p className="text-xs italic">-- Ibu rumah tangga</p>
            </div>

            {/* testi-5 */}
            <div className="bg-white text-red-600 p-6 space-y-4 rounded-xl shadow-md transition duration-300 hover:bg-red-600 hover:text-white cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <img src={ibu1} alt="Ibu1" className="w-10 h-10 rounded-full object-cover" />
                <div className="font-semibold">Bu Rina-49 Tahun</div>
              </div>
              <p className="text-sm mb-4">
                "Dulu saya sering sesak napas.....<br />
                Tapi setelah saya rutin periksa dan ubah gaya hidup saya merasa jauh lebih sehat."
              </p>
              <p className="text-xs italic">-- Ibu rumah tangga</p>
            </div>

            {/* testi-3 */}
            <div className="bg-white text-red-600 p-6 space-y-4 rounded-xl shadow-md transition duration-300 hover:bg-red-600 hover:text-white cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <img src={ibu1} alt="Ibu1" className="w-10 h-10 rounded-full object-cover" />
                <div className="font-semibold">Bu Rina-49 Tahun</div>
              </div>
              <p className="text-sm mb-4">
                "Dulu saya sering sesak napas.....<br />
                Tapi setelah saya rutin periksa dan ubah gaya hidup saya merasa jauh lebih sehat."
              </p>
              <p className="text-xs italic">-- Ibu rumah tangga</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Kolom Kiri: Teks */}
          <div className="space-y-6 text-center lg:text-left transform lg:translate-x-24">
            <h3 className="text-2xl md:text-3xl font-bold text-red-700">
              Konsultasi Keluhan Jantung <br />Anda
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Jangan tunda berkonsultasi dengan dokter untuk <br />kesehatan jantung anda. Konsultasi dapat
              membantu <br />mendeteksi masalah sekecil mungkin dan mendapatkan <br /> perawatan yang tepat
            </p>

            <button className="bg-red-600 text-white px-6 py-2 rounded-sm font-semibold shadow hover:bg-red-700 transition duration-300">
              Konsultasi Sekarang
            </button>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="space-y-8 text-center lg:text-left transform lg:translate-x-32">
            <img
              src={gejala}
              alt="Dokter"
              className="max-w-sm w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
      
    </section>
  </>
  );
};

export default Beranda;
