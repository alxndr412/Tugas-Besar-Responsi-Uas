'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { getUser, logout } from '@/utils/auth';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Tambahkan state untuk menangani sinkronisasi client-server
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Jalankan pengecekan user hanya setelah komponen menempel di browser
    setMounted(true);
    const currentUser = getUser();
    setUser(currentUser);
  }, [pathname]); // Cek ulang setiap pindah halaman

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  // 1. Jangan render apapun jika belum mounted (mencegah Hydration Error)
  if (!mounted) return null;

  // 2. Logika persembunyian tetap sama seperti keinginan Anda
  if (pathname.startsWith('/auth')) return null;
  if (!user) return null;

  return (
    <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <h1 className="font-bold text-xl text-gray-800">
        Jogja Marathon
      </h1>

      {/* Menu */}
      <div className="flex items-center gap-6 text-gray-700">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link href="/events" className="hover:text-blue-600">
          Events
        </Link>

        <Link href="/information" className="hover:text-blue-600">
          Information
        </Link>

        <Link href="/registrations" className="hover:text-blue-600">
          Registrations
        </Link>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-red-600 hover:underline ml-4"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}