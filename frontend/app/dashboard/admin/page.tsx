'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// URL API disesuaikan dengan prefix yang kita gunakan sebelumnya
const API = 'http://localhost:5000/api/registrations';

export default function AdminDashboard() {
  const [realStats, setRealStats] = useState([
    { label: 'Total Peserta', value: '0', color: 'bg-blue-500', key: 'total' },
    { label: 'Kategori Race', value: '4', color: 'bg-yellow-500', key: 'categories' },
    { label: 'Pendaftaran Pending', value: '0', color: 'bg-red-500', key: 'pending' },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await fetch(API, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        if (Array.isArray(data)) {
          // 1. Hitung Total Peserta
          const total = data.length;

          // 2. Hitung Peserta yang Pending (Status 'pending')
          const pending = data.filter((item: any) => item.status === 'pending').length;

          // 3. Update state statistik
          setRealStats(prev => prev.map(stat => {
            if (stat.key === 'total') return { ...stat, value: total.toLocaleString() };
            if (stat.key === 'pending') return { ...stat, value: pending.toLocaleString() };
            return stat;
          }));
        }
      } catch (err) {
        console.error("Gagal mengambil data statistik:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/images/prambanan.jpg')" }}
    >
      <div className="bg-black/50 min-h-screen p-6 md:p-12 text-white backdrop-blur-[3px]">
        
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter border-l-8 border-blue-500 pl-4">
            Dashboard Admin
          </h1>
          <p className="mt-2 text-gray-200 font-medium tracking-wide">
            Selamat datang kembali di sistem kendali <span className="text-blue-400">Jogja Marathon</span>.
          </p>
        </header>

        {/* Statistik Ringkasan - 3 Kolom (Data Riil) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {realStats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 group"
            >
              <div className={`w-12 h-1 mb-4 ${stat.color} rounded-full transition-all group-hover:w-full`} />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-300">{stat.label}</p>
              <p className="text-5xl font-black mt-2 tracking-tighter">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Menu Navigasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all">
            <h2 className="text-2xl font-black uppercase mb-4 italic tracking-tight">Manajemen Konten</h2>
            <p className="mb-8 text-gray-200 leading-relaxed">
              Atur kategori lari, rute jalan, dan unggah peta rute untuk setiap kategori race.
            </p>
            <Link 
              href="/events" 
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              Kelola Event
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all">
            <h2 className="text-2xl font-black uppercase mb-4 italic tracking-tight">Data Pendaftar</h2>
            <p className="mb-8 text-gray-200 leading-relaxed">
              Pantau pendaftar yang masuk, verifikasi berkas peserta, dan cek status pembayaran.
            </p>
            <Link 
              href="/registrations" 
              className="inline-block bg-white text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all shadow-lg text-center"
            >
              Lihat Peserta
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}