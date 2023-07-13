import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventDetailPage from "./pages/EventDetailPage";

function App() {
  return (
    <Routes>
      <Route index={true} element={<HomePage />} />
      <Route path="event/:id" element={<EventDetailPage />} />
    </Routes>
  );
}

export default App;
