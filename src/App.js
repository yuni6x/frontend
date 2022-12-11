import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { putAccessToken } from "./utils/apis";
import loading from "./images/Loading.gif";

// pages
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RegisterWorkerPage from "./pages/RegisterWorkerPage";
import OrderPage from "./pages/OrderPage";
import YourOrderPage from "./pages/YourOrderPage";
import BantuanPage from "./pages/BantuanPage";
import LandingPage from "./pages/LandingPage";

// component
import Navigation from "./components/navigation/navigation";

function App() {
  const [authedUser, setAuthedUser] = useState(
    localStorage.getItem("auth") || null
  );
  const [initializing, setInitializing] = useState(false);
  const [hidden, setHidden] = useState(false)

  async function onLoginSuccess({ accessToken, id, fullName, role }) {
    setInitializing(true);
    putAccessToken(accessToken);
    setAuthedUser(() => {
      return { fullName, role };
    });
    localStorage.setItem("auth", JSON.stringify({ id, fullName, role }));
    setInitializing(false);
  }

  const onLogout = () => {
    setAuthedUser(() => {
      return null;
    });
    localStorage.clear();
  };

  const toggleHidden = () => {
    setHidden(!hidden)
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
      <header><Navigation auth={authedUser} logout={onLogout} hidden={hidden} toggleHidden={toggleHidden} /></header>
      <main>
       {authedUser ?
            <Routes>
              <Route path="/" element={<HomePage logout={onLogout} />} />
              <Route path="/about" element={<LandingPage />} />
              <Route path="/help" element={<BantuanPage />} />
              <Route path="/home" element={<HomePage logout={onLogout} />} />
              <Route path="/your-order" element={<YourOrderPage logout={onLogout} />} />
              <Route path="/worker/:id" element={<DetailPage logout={onLogout} />} />
              <Route path="/order/:id" element={<OrderPage logout={onLogout} />} />
              <Route path='*' element={<NotFoundPage logout={onLogout} />} />
            </Routes>
            : <Routes>
                <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/register-worker" element={<RegisterWorkerPage />} />
                <Route path="/about" element={<LandingPage />} />
                <Route path="/help" element={<BantuanPage />} />
              </Routes>
        }
      </main>
      { authedUser ? 
        <footer>C22-193. Hosting API by Niagahoster and DB by FreeSQLdatabase.com</footer> : ''
      }
      
    </div>
  );
}

export default App;
