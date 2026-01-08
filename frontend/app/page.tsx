'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from '@/utils/auth';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const user = getUser();

    if (!user) {
      router.push('/auth/login');
      return;
    }

    // Redirect sesuai role
    if (user.role === 'admin') {
      router.push('/dashboard/admin');
    } else {
      router.push('/dashboard/user');
    }
  }, []);

  return null;
}
