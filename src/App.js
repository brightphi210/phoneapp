

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Components/Context/AuthContext";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>

            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
