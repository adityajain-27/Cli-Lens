import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser]     = useState(null);
  const [token, setToken]   = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(!!localStorage.getItem('token')); // only load if token exists

  // On mount, if a token exists in localStorage, fetch the real user profile
  useEffect(() => {
    const fetchProfile = async () => {
      const storedToken = localStorage.getItem('token');
      if (!storedToken) { setLoading(false); return; }
      try {
        const res = await fetch('/api/auth/profile', {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
          setToken(storedToken);
        } else {
          // Token expired or invalid
          localStorage.removeItem('token');
          setToken(null);
          setUser(null);
        }
      } catch {
        // Backend unreachable — clear stale token
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const saveAuth = (userData) => {
    localStorage.setItem('token', userData.token);
    setToken(userData.token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const isResearcher = user?.role === 'researcher';
  const isPro        = user?.tier === 'pro';

  return (
    <AuthContext.Provider value={{ user, token, loading, saveAuth, logout, isResearcher, isPro }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
