import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const decodeJWT = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (err) {
    return null;
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(undefined);

  useEffect(() => {
    const token = localStorage.getItem('google_token');
    if (token) {
      setUser(decodeJWT(token));
    }
    const adminAuth = localStorage.getItem('admin_auth');
    setAdmin(adminAuth ? JSON.parse(adminAuth) : null);
  }, []);

  const login = (token) => {
    localStorage.setItem('google_token', token);
    setUser(decodeJWT(token));
  };

  const adminLogin = (authData) => {
    localStorage.setItem('admin_auth', JSON.stringify(authData));
    setAdmin(authData);
  };

  const logout = () => {
    localStorage.removeItem('google_token');
    localStorage.removeItem('admin_auth');
    setUser(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ user, admin, login, adminLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
