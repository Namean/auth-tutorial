import React, { useState } from "react";
import "./Logout.css";

async function logoutUser(url) {
  localStorage.clear();
  window.location.href = url;
}

export default function Logout() {
  return (
    <button onClick={() => logoutUser("http://localhost:3000/")}>
      log out
    </button>
  );
}
