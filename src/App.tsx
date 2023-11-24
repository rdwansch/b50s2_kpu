import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import PrivateRoute from './util/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Vote from './pages/Vote';
import Paslon from './pages/Paslon';
import Partai from './pages/Partai';
import AddPartai from './pages/AddPartai';
import AddPaslon from './pages/AddPaslon';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />

      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/paslon" element={<Paslon />} />
        <Route path="/paslon/add" element={<AddPaslon />} />
        <Route path="/partai" element={<Partai />} />
        <Route path="/partai/add" element={<AddPartai />} />
      </Route>
      <Route path="/vote" element={<Vote />} />
    </Routes>
  );
}
