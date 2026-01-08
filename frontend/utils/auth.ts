export const getUser = () => {
  if (typeof window === 'undefined') return null;

  const data = localStorage.getItem('user');

  if (!data || data === 'undefined') return null;

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const getToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
};

export const logout = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
