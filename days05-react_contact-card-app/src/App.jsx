import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Latihan1 from './pages/Latihan1/Latihan1'
import Latihan2 from './pages/Latihan2/Latihan2'
import Latihan3 from './pages/Latihan3/Latihan3'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Latihan1" element={<Latihan1 />} />
          <Route path="/Latihan2" element={<Latihan2 />} />
          <Route path="/Latihan3" element={<Latihan3 />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App