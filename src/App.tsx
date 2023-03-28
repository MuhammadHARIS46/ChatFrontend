import "./App.css";
import Chat from "./pages/Chat";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        {" "}
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
