import { useAuth } from "@/lib/AuthContext";
import React, { useState, useEffect, useRef, useContext } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
function AdminAuthCheck() {
  const { admin: t } = useAuth(),
    e = useLocation();
  return t === void 0 ? null : t ? (
    <Outlet />
  ) : (
    <Navigate
      to="/admin-login"
      replace={!0}
      state={{
        from: e,
      }}
    />
  );
}
export default AdminAuthCheck;
