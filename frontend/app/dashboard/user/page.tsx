'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from '@/utils/auth';

export default function UserDashboard() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/prambanan.jpg')",
      }}
    >
      <div className="bg-black/50 min-h-screen p-10 text-white">
        <h1 className="text-3xl font-bold">
          Dashboard Peserta
        </h1>

        <p className="mt-4">
          Selamat datang & selamat berlari 🏃‍♂️
        </p>
      </div>
    </div>
  );
}

