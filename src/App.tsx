import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Game from "./pages/Game";
import Credits from "./pages/Credits";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/game" element={<Game />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
