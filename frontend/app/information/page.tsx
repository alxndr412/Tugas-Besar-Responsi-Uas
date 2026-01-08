import Image from 'next/image';

export default function InformationPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* HERO / WALLPAPER */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="/images/info.jpg"
          alt="Jogja Marathon Information"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            Informasi Lomba
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-2xl text-gray-200 font-light">
            
          </p>
        </div>
      </section>

      {/* KONTEN DETAIL ACARA (ABOUT) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-[45%]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/info_1.jpg"
                alt="Event Detail"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[55%]">
            <h2 className="text-4xl font-extrabold mb-8 uppercase tracking-tight inline-block border-b-4 border-black pb-2 leading-none">
              About
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Selama tujuh tahun, komitmen yang konsisten telah menghasilkan pencapaian luar biasa. 
                <span className="font-semibold text-black"> Jogja Marathon</span> membuktikan bahwa dampaknya terus dirasakan di kalangan pelari. 
                Yogyakarta, yang terkenal dengan kekayaan budaya dan keindahan alamnya, terus menarik 
                para pelari yang ingin menikmati keindahan kota ini.
              </p>
              <p>
                Jogja Marathon telah memperkuat posisinya sebagai acara lari utama di Indonesia. 
                Dengan rute yang menampilkan keindahan alam dan kekayaan budaya Yogyakarta, 
                serta menawarkan pengalaman lari yang unik bagi setiap peserta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKSI HADIAH (PRIZES) */}
      <section className="bg-[#E6E6E6] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-left tracking-tight uppercase">Prizes</h2>

          <div className="space-y-20">
            
            {/* MARATHON TABLE */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-widest">Marathon</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    {/* Garis Header Hitam Tebal */}
                    <tr className="border-b-2 border-black text-black text-sm uppercase">
                      <th className="py-4 font-bold">Kategori</th>
                      <th className="py-4 font-bold text-center">1st</th>
                      <th className="py-4 font-bold text-center">2nd</th>
                      <th className="py-4 font-bold text-center">3rd</th>
                      <th className="py-4 font-bold text-center">4th</th>
                      <th className="py-4 font-bold text-center">5th</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {["Open Male", "Open Female", "Closed Male", "Closed Female", "Master Male", "Master Female"].map((category, index) => (
                      /* Garis Baris Hitam Tipis */
                      <tr key={index} className="border-b border-black">
                        <td className="py-5 font-bold text-black">{category}</td>
                        <td className="py-5 text-center">
                          {category.includes("Open") ? "Rp 125.000.000" : "Rp 85.000.000"}
                        </td>
                        <td className="py-5 text-center">
                          {category.includes("Open") ? "Rp 95.000.000" : "Rp 50.000.000"}
                        </td>
                        <td className="py-5 text-center">
                          {category.includes("Open") ? "Rp 80.000.000" : "Rp 35.000.000"}
                        </td>
                        <td className="py-5 text-center">
                          {category.includes("Open") ? "-" : "Rp 28.000.000"}
                        </td>
                        <td className="py-5 text-center">
                          {category.includes("Open") ? "-" : "Rp 18.000.000"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* HALF MARATHON TABLE */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-widest">Half Marathon</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b-2 border-black text-black text-sm uppercase">
                      <th className="py-4 font-bold">Kategori</th>
                      <th className="py-4 font-bold text-center">1st</th>
                      <th className="py-4 font-bold text-center">2nd</th>
                      <th className="py-4 font-bold text-center">3rd</th>
                      <th className="py-4 font-bold text-center">4th</th>
                      <th className="py-4 font-bold text-center">5th</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {["Open Male", "Open Female", "Closed Male", "Closed Female", "Master Male", "Master Female"].map((cat, i) => (
                      <tr key={i} className="border-b border-black">
                        <td className="py-5 font-bold text-black">{cat}</td>
                        <td className="py-5 text-center">{cat.includes("Open") ? "Rp 75.000.000" : "Rp 45.000.000"}</td>
                        <td className="py-5 text-center">{cat.includes("Open") ? "Rp 40.000.000" : "Rp 27.000.000"}</td>
                        <td className="py-5 text-center">{cat.includes("Open") ? "Rp 30.000.000" : "Rp 22.000.000"}</td>
                        <td className="py-5 text-center">{cat.includes("Open") ? "-" : "Rp 15.000.000"}</td>
                        <td className="py-5 text-center">{cat.includes("Open") ? "-" : "Rp 10.000.000"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 10K TABLE - SEJAJAR & GARIS HITAM */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-widest">10K</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b-2 border-black text-black text-sm uppercase">
                      <th className="py-4 font-bold">Kategori</th>
                      <th className="py-4 font-bold text-center">1st</th>
                      <th className="py-4 font-bold text-center">2nd</th>
                      <th className="py-4 font-bold text-center">3rd</th>
                      <th className="py-4 font-bold text-center">4th</th>
                      <th className="py-4 font-bold text-center">5th</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {["Open Male", "Open Female", "Closed Male", "Closed Female", "Master Male", "Master Female"].map((cat, i) => (
                      <tr key={i} className="border-b border-black">
                        <td className="py-5 font-bold text-black">{cat}</td>
                        <td className="py-5 text-center">{cat.includes("Open") ? "Rp 25.000.000" : "Rp 15.000.000"}</td>
                        <td className="py-5 text-center">{cat.includes("Open") ? "Rp 20.000.000" : "Rp 12.500.000"}</td>
                        <td className="py-5 text-center">{cat.includes("Open") ? "Rp 15.000.000" : "Rp 10.000.000"}</td>
                        <td className="py-5 text-center">-</td>
                        <td className="py-5 text-center">-</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5K TABLE - SEJAJAR & GARIS HITAM */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-widest">5K</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b-2 border-black text-black text-sm uppercase">
                      <th className="py-4 font-bold">Kategori</th>
                      <th className="py-4 font-bold text-center">1st</th>
                      <th className="py-4 font-bold text-center">2nd</th>
                      <th className="py-4 font-bold text-center">3rd</th>
                      <th className="py-4 font-bold text-center">4th</th>
                      <th className="py-4 font-bold text-center">5th</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {["Open Male", "Open Female", "Closed Male", "Closed Female", "Master Male", "Master Female"].map((cat, i) => (
                      <tr key={i} className="border-b border-black">
                        <td className="py-5 font-bold text-black">{cat}</td>
                        <td className="py-5 text-center">{cat.includes("Open") ? "Rp 25.000.000" : "Rp 15.000.000"}</td>
                        <td className="py-5 text-center">{cat.includes("Open") ? "Rp 20.000.000" : "Rp 12.500.000"}</td>
                        <td className="py-5 text-center">{cat.includes("Open") ? "Rp 15.000.000" : "Rp 10.000.000"}</td>
                        <td className="py-5 text-center">-</td>
                        <td className="py-5 text-center">-</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}