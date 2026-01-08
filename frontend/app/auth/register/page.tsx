'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { register } from '@/services/authService';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register(name, username, password);
      // Jika berhasil, arahkan ke login dengan pesan sukses (opsional via alert/toast)
      router.push('/auth/login');
    } catch (err: any) {
      setError(err.message || 'Pendaftaran gagal, coba lagi nanti');
    } finally {
      setLoading(false);
    }
  };

  return (
    /* Background Full Layar mengikuti gaya Login */
    <div className="fixed inset-0 min-h-screen w-full flex items-center justify-center bg-[#020617] overflow-hidden">
      
      {/* Efek Cahaya Latar Belakang */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-900/20 blur-[150px] rounded-full animate-pulse transition-all duration-1000"></div>

      {/* Kontainer Form Register */}
      <div className={`relative z-10 w-full max-w-[440px] px-6 transition-all duration-1000 transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        
        <div className="relative group">
          {/* Efek Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          {/* Kartu Utama */}
          <div className="relative bg-[#0f172a]/80 backdrop-blur-2xl border border-white/10 rounded-[2.8rem] p-10 shadow-2xl">
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black uppercase italic tracking-tighter text-white leading-none">
                BUAT <span className="text-cyan-400">AKUN</span>
              </h1>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-3">
                Gabung di Jogja Marathon 2026
              </p>
              <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-[11px] py-3 px-4 rounded-2xl mb-6 text-center font-bold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group/input">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full bg-slate-950/50 border border-slate-800 p-4 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all font-medium text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="group/input">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full bg-slate-950/50 border border-slate-800 p-4 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all font-medium text-sm"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="group/input">
                <input
                  type="password"
                  placeholder="Password Baru"
                  className="w-full bg-slate-950/50 border border-slate-800 p-4 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all font-medium text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button 
                disabled={loading}
                className="w-full relative overflow-hidden group/btn bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white p-4 rounded-2xl font-black uppercase tracking-[0.15em] text-xs transition-all shadow-xl shadow-cyan-900/40 active:scale-95 disabled:opacity-50 mt-2"
              >
                <span className="relative z-10">{loading ? 'Mendaftarkan...' : 'Daftar Sekarang'}</span>
              </button>
            </form>

            <div className="mt-8 text-center border-t border-slate-800/50 pt-6">
              <p className="text-xs text-slate-500 font-medium">
                Sudah memiliki akun?{' '}
                <Link href="/auth/login" className="text-cyan-400 hover:text-cyan-300 font-black uppercase tracking-tighter transition-colors ml-1">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-600 text-[10px] font-bold mt-8 uppercase tracking-[0.4em] opacity-50">
          Official Registration v1.0
        </p>
      </div>
    </div>
  );
}