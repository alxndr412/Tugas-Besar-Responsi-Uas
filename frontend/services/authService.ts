const API = 'http://localhost:5000';

export async function login(username: string, password: string) {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Login gagal');
  }

  return res.json();
}

export async function register(
  name: string,
  username: string,
  password: string
) {
  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, username, password }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Register gagal');
  }

  return res.json();
}
