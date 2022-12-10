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
import OrderPage from "./pages/OrderPage";
import YourOrderPage from "./pages/YourOrderPage";

function App() {
  const [authedUser, setAuthedUser] = useState(
    localStorage.getItem("auth") || null
  );
  const [initializing, setInitializing] = useState(false);

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
              <Route path="/" element={<HomePage logout={onLogout} />} />
              <Route path="/home" element={<HomePage logout={onLogout} />} />
              <Route path="/your-order" element={<YourOrderPage logout={onLogout} />} />
              <Route path="/worker/:id" element={<DetailPage logout={onLogout} />} />
              <Route path="/order/:id" element={<OrderPage logout={onLogout} />} />
              <Route path='*' element={<NotFoundPage logout={onLogout} />} />
            </Routes>
            : <Routes>
                <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
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
