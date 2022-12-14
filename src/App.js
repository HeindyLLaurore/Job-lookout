import { Routes, Route } from "react-router-dom";
import { Dashboard, Landing, Register, Error } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
