import React, { useState, useMemo, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { putAccessToken } from "./utils/apis";
import loading from "./images/Loading.gif";

// pages
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [authedUser, setAuthedUser] = useState(
    localStorage.getItem("auth") || null
  );
  const [initializing, setInitializing] = useState(false);

  async function onLoginSuccess({ accessToken, fullName, role }) {
    setInitializing(true);
    putAccessToken(accessToken);
    setAuthedUser(() => {
      return { fullName, role };
    });
    localStorage.setItem("auth", JSON.stringify({ fullName, role }));
    setInitializing(false);
  }

  const onLogout = () => {
    setAuthedUser(() => {
      return null;
    });
    localStorage.removeItem("auth");
  };

  if (initializing) {
    return (
      <img
        className="position-absolute top-50 start-50 translate-middle"
        src={loading}
        alt="loading"
      />
    );
  }

  return (
    <div className="App">
      <header style={{ backgroundColor: "salmon" }}>Navigation</header>
      <main>
       {authedUser ?
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
            : <Routes>
                <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            }
      </main>
      
    </div>
  );
}

export default App;
