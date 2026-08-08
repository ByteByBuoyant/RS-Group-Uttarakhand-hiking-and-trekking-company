import React, { useState, useEffect, useRef, useContext } from "react";
function AdminTrekExclusions() {
  return (
    <dQ
      title="Trek Exclusions"
      fetchApi={CX}
      createApi={QTe}
      updateApi={eIe}
      deleteApi={tIe}
    />
  );
}
export default AdminTrekExclusions;
