import React, { useState, useEffect, useRef, useContext } from "react";
import { Outlet } from "react-router-dom";
function AdminLayout() {
  return (
    <div className="flex bg-[#0A1623] min-h-screen text-white">
      {<pIe />}
      {<main className="flex-1 p-4 md:p-8 overflow-y-auto">{<Outlet />} </main>}
    </div>
  );
}
export default AdminLayout;
