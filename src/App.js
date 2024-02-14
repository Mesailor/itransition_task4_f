import { Routes, Route } from "react-router-dom";
import AdminPage from "./components/pages/AdminPage";
import AuthPage from "./components/pages/AuthPage";
import RegistrationPage from "./components/pages/RegistrationPage";
import RequireAuth from "./components/RequireAuth";
import { AppProvider } from "./components/context/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <AdminPage />
              </RequireAuth>
            }
          />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/reg" element={<RegistrationPage />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
