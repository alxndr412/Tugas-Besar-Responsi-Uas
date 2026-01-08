'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

// Pastikan API URL konsisten mengarah ke prefix backend Anda
const API = 'http://localhost:5000/api/registrations';

const categories = [
  { label: 'Marathon', value: 'Marathon (42K)', dist: '42K' },
  { label: 'Half Marathon', value: 'Half Marathon (21K)', dist: '21K' },
  { label: '10 Kilometer', value: '10 KM', dist: '10K' },
  { label: '5 Kilometer', value: '5 KM', dist: '5K' },
];

export default function RegistrationsPage() {
  const [role, setRole] = useState<'admin' | 'user'>('user');
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [popupCategory, setPopupCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
  });

  /* ================= INIT & FETCH ================= */
  useEffect(() => {
    setMounted(true);
    const r = localStorage.getItem('role') as 'admin' | 'user' | null;
    if (!r) return;
    setRole(r);

    if (r === 'admin') {
      fetchAdminData();
    }
  }, []);

  const fetchAdminData = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(API, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setRegistrations(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
    }
  };

  /* ================= ADMIN ACTION ================= */
  const updateStatus = async (id: number, status: string) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const res = await fetch(`${API}/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        setRegistrations(prev =>
          prev.map(r => (r.id === id ? { ...r, status } : r))
        );
      } else {
        throw new Error("Gagal update");
      }
    } catch (err) {
      console.error(err);
      alert("Gagal update status");
    }
  };

  const deleteRegistration = async (id: number) => {
    if (!confirm('Yakin hapus data ini?')) return;

    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const res = await fetch(`${API}/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setRegistrations(prev => prev.filter(r => r.id !== id));
      } else {
        throw new Error("Gagal hapus");
      }
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data");
    }
  };

  /* ================= USER FORM ================= */
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Silakan login terlebih dahulu');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          event_id: 1,
          category: popupCategory,
          ...form,
        }),
      });

      if (!res.ok) throw new Error('Gagal menyimpan data');

      alert('Pendaftaran Berhasil!');
      setForm({ full_name: '', email: '', phone: '' });
      setPopupCategory(null);
      
      if (role === 'admin') fetchAdminData();
      
    } catch (err) {
      alert('Pendaftaran gagal');
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOGIKA GROUPING ================= */
  const grouped = (registrations || []).reduce((acc: any, item: any) => {
    const key = item.category; 
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  if (!mounted) return null;

  return (
    <div className="bg-white min-h-screen text-black font-sans">
      {/* HERO */}
      <section className="relative h-[50vh]">
        <Image src="/images/registrasi.jpg" alt="Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">Registrasi Event</h1>
          <p className="mt-2 text-gray-300 tracking-widest uppercase text-sm font-bold">Jogja Marathon</p>
        </div>
      </section>

      {/* ================= ADMIN VIEW ================= */}
      {role === 'admin' && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter">Data Registrasi Peserta</h2>

          {categories.map(cat => (
            <div key={cat.value} className="mb-16 border-2 border-gray-100 rounded-[2rem] overflow-hidden shadow-sm bg-white">
              <div className="px-8 py-6 bg-gray-50 border-b flex justify-between items-center">
                <h3 className="text-2xl font-black uppercase tracking-tight text-gray-800">{cat.label}</h3>
                <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-black tracking-widest">{cat.dist}</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-100 text-[10px] uppercase font-black text-gray-400">
                    <tr>
                      <th className="p-6">Informasi Peserta</th>
                      <th className="p-6">Kontak</th>
                      <th className="p-6">WhatsApp</th>
                      <th className="p-6">Status</th>
                      <th className="p-6 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {(!grouped[cat.value] || grouped[cat.value].length === 0) ? (
                      <tr>
                        <td colSpan={5} className="p-16 text-center text-gray-400 font-bold uppercase tracking-widest text-xs">
                          Belum ada peserta di kategori ini
                        </td>
                      </tr>
                    ) : (
                      grouped[cat.value].map((r: any) => (
                        <tr key={r.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="p-6">
                            <p className="font-bold text-gray-900 leading-none">{r.full_name}</p>
                            <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold">ID: #{r.id}</p>
                          </td>
                          <td className="p-6 text-gray-500 font-medium text-sm">{r.email}</td>
                          <td className="p-6 text-gray-500 font-medium text-sm">{r.phone}</td>
                          <td className="p-6">
                            <div className="relative inline-block w-full min-w-[140px]">
                              <select 
                                value={r.status} 
                                onChange={(e) => updateStatus(r.id, e.target.value)}
                                className={`appearance-none w-full px-4 py-2 pr-10 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all cursor-pointer focus:outline-none
                                  ${r.status === 'approved' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 
                                    r.status === 'rejected' ? 'bg-rose-50 border-rose-100 text-rose-600' : 
                                    'bg-amber-50 border-amber-100 text-amber-600'}
                                `}
                              >
                                <option value="pending">🟡 Pending</option>
                                <option value="approved">🟢 Approved</option>
                                <option value="rejected">🔴 Rejected</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                              </div>
                            </div>
                          </td>
                          <td className="p-6 text-center">
                            <button 
                              onClick={() => deleteRegistration(r.id)}
                              className="group p-2 rounded-xl bg-gray-50 hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-all duration-300 shadow-sm"
                              title="Hapus Data"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ================= USER VIEW ================= */}
      {role === 'user' && (
        <section className="py-20 px-6">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(cat => (
              <div key={cat.value} className="bg-gray-500/10 backdrop-blur-md border border-gray-100 rounded-[2.5rem] p-10 h-80 flex flex-col justify-between transition-all hover:shadow-2xl hover:-translate-y-2">
                <div>
                  <h3 className="text-5xl font-black tracking-tighter">{cat.dist}</h3>
                  <p className="text-gray-500 font-bold uppercase text-xs mt-1">{cat.label}</p>
                </div>
                <button
                  onClick={() => setPopupCategory(cat.value)}
                  className="bg-black text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-colors"
                >
                  Daftar Sekarang
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= POPUP FORM ================= */}
      {popupCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setPopupCategory(null)} />
          <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] p-12 z-10 shadow-2xl">
            <h2 className="text-4xl font-black mb-2 uppercase tracking-tight">Formulir</h2>
            <p className="text-blue-600 font-black uppercase text-xs mb-8">Pendaftaran {popupCategory}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="full_name" value={form.full_name} placeholder="NAMA LENGKAP" className="w-full p-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-black outline-none font-bold transition-all placeholder:text-gray-300" onChange={handleChange} required />
              <input name="email" value={form.email} type="email" placeholder="ALAMAT EMAIL" className="w-full p-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-black outline-none font-bold transition-all placeholder:text-gray-300" onChange={handleChange} required />
              <input name="phone" value={form.phone} placeholder="NOMOR WHATSAPP" className="w-full p-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-black outline-none font-bold transition-all placeholder:text-gray-300" onChange={handleChange} required />
              <button type="submit" disabled={loading} className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 disabled:bg-gray-400 transition-colors">
                {loading ? 'MEMPROSES...' : 'KONFIRMASI PENDAFTARAN'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}