import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apa itu penyakit jantung?",
    answer:
      "Penyakit jantung adalah kondisi yang mempengaruhi struktur atau fungsi jantung, seperti penyakit jantung koroner, aritmia, atau gagal jantung."
  },
  {
    question: "Bagaimana cara menurunkan risiko penyakit jantung?",
    answer:
      "Dengan menjaga pola makan sehat, berolahraga teratur, berhenti merokok, dan rutin cek kesehatan."
  },
  {
    question: "Siapa saja yang rentan terkena penyakit ini?",
    answer:
      "Orang dengan riwayat keluarga, usia lanjut, perokok, penderita diabetes, tekanan darah tinggi, dan kolesterol tinggi lebih rentan."
  },
  {
    question: "Apa saja gejala penyakit jantung?",
    answer:
      "Nyeri dada, sesak napas, detak jantung tidak teratur, lelah berlebihan, dan pusing."
  }
];

const Faktorresiko = () => {
  const [usia, setUsia] = useState("");
  const [merokok, setMerokok] = useState("");
  const [kolesterol, setKolesterol] = useState("");
  const [hasil, setHasil] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let skor = 0;

    if (parseInt(usia) > 50) skor++;
    if (merokok === "Ya") skor++;
    if (kolesterol === "Ya") skor++;

    let kategori = "Rendah";
    if (skor === 1) kategori = "Sedang";
    else if (skor >= 2) kategori = "Tinggi";

    setHasil(kategori);
  };

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-gray-200 py-28 text-center px-6">
        <div className="max-w-3xl mx-auto mb-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">
            Faktor Resiko Penyakit Jantung
          </h1>
          <p className="text-base sm:text-lg text-black mb-6">
            Faktor Resiko Penyakit jantung itu bisa membahayakan anda karena jantung salah satu penyakit yang harus di atasi sehingga tidak sampai ke komplikasi
            yang berbahaya bagi kesehatan jantung kita maka dari itu kita harus menjaga jantung kita 
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition">Cek Gejala</button>
            <button className="bg-white text-red-700 px-4 py-2 rounded-lg shadow-md hover:bg-red-700 hover:text-white transition">Pelajari Resiko</button>
          </div>
        </div>    
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto mb-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4 text-center">Cek Resiko Penyakit Jantung Anda</h1>
          <p className="text-base sm:text-lg font-black mb-6 text-center">
            Isi form singkat di samping untuk mengetahui potensi penyakit jantung anda yang masih belum bisa 
            mengatur keadaan jantung sehingga anda perlu mengisi form cek resiko jantung anda di bawah ini 
          </p>
        </div>

        <form className="p-8 max-w-4xl mx-auto" onSubmit={handleSubmit}>
          <div className="bg-white rounded shadow">
            <div className="bg-red-600 text-white p-4 rounded-t">
              <h2 className="font-bold">Form Faktor Resiko</h2>
              <p className="text-sm">Semua data yang anda berikan bersifat rahasia dan tidak disimpan tanpa izin anda</p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-black mb-6 text-lg">Informasi Pribadi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1">Usia</label>
                  <input
                    type="number"
                    placeholder="Masukin Usia Anda"
                    className="w-full border rounded px-4 py-2"
                    value={usia}
                    onChange={(e) => setUsia(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Jenis Kelamin</label>
                  <select className="w-full border rounded px-4 py-2">
                    <option>Pilih</option>
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Berat Badan</label>
                  <input type="number" className="w-full border rounded px-4 py-2" />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Tinggi Badan</label>
                  <input type="number" className="w-full border rounded px-4 py-2" />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Apakah Anda Merokok?</label>
                  <select
                    className="w-full border rounded px-4 py-2"
                    value={merokok}
                    onChange={(e) => setMerokok(e.target.value)}
                    required
                  >
                    <option value="">Pilih</option>
                    <option value="Ya">Ya</option>
                    <option value="Tidak">Tidak</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Apakah anda memiliki kolesterol?</label>
                  <select
                    className="w-full border rounded px-4 py-2"
                    value={kolesterol}
                    onChange={(e) => setKolesterol(e.target.value)}
                    required
                  >
                    <option value="">Pilih</option>
                    <option value="Ya">Ya</option>
                    <option value="Tidak">Tidak</option>
                  </select>
                </div>
              </div>

              <div className="text-center mt-6">
                <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
                  Analisis Resiko Saya
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>

      <section className=" bg-white flex justify-center">
              {hasil && (
                <div
                  className={`mt-8 p-8 rounded-xl shadow-lg text-white ${
                    hasil === "Tinggi"
                      ? "bg-red-100 text-red-800"
                      : hasil === "Sedang"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <FaHeart
                      className={`w-16 h-16 mb-4 ${
                        hasil === "Tinggi"
                          ? "text-red-600"
                          : hasil === "Sedang"
                          ? "text-yellow-500"
                          : "text-green-600"
                      }`}
                    />

                    <h3 className="text-2xl font-bold mb-2">
                      Ingat, Risiko Penyakit Jantung Anda {hasil.toLowerCase()}
                    </h3>
                    <p className="mb-4 max-w-xl">
                      {hasil === "Tinggi"
                        ? "Sepertinya Anda memiliki risiko tinggi terkena penyakit jantung. Penting untuk berkonsultasi dengan dokter Anda untuk evaluasi lebih lanjut dan tindakan pencegahan."
                        : hasil === "Sedang"
                        ? "Risiko Anda sedang. Jaga gaya hidup sehat dan lakukan pemeriksaan rutin untuk memastikan kondisi tetap terkendali."
                        : "Risiko Anda rendah. Terus jaga pola hidup sehat untuk mempertahankan kondisi ini."}
                    </p>

                    <div className="text-left">
                      <h4 className="font-semibold mb-2">Rekomendasi untuk Anda</h4>
                      <ul className="list-disc list-inside text-sm">
                        <li>Kontrol tekanan darah dan kadar kolesterol</li>
                        <li>Berhenti merokok dan hindari stres berlebih</li>
                        <li>Konsumsi makanan bergizi dan rutin berolahraga</li>
                      </ul>
                    </div>

                    <button
                      onClick={() => window.location.href = "/"} // atau sesuaikan dengan routing kamu
                      className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
                    >
                      Kembali ke Beranda
                    </button>
                  </div>
                </div>
              )}
      </section>

      <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-red-700 text-center">
          Pertanyaan yang Sering Diajukan
        </h1>
      </div>

      <div className="max-w-3xl mx-auto border rounded-lg divide-y">
        {faqs.map((faq, index) => (
          <div key={index} className="px-6 py-4 cursor-pointer" onClick={() => toggle(index)}>
            <div className="flex justify-between items-center">
              <p className="font-medium text-lg">{faq.question}</p>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Faktorresiko;
