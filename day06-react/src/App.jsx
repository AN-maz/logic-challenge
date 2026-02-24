import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import Materi from './pages/Materi';
import Latihan from './pages/Latihan';
import Challenge from './pages/Challenge';

function App() {

  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='materi' element={<Materi />} />
        <Route path='latihan' element={<Latihan />} />
        <Route path='challenge' element={<Challenge />} />
      </Route>
    </Routes>
  )

}

export default App