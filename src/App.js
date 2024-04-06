

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/login" element={<Register />}/>
            <Route path="/register" element={<Register />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
