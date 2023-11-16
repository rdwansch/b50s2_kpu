import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import PrivateRoute from './util/PrivateRoute';
import Admin from './pages/Admin';

const auth = {
  isLogin: true,
  role: 'user',
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />

      <Route element={<PrivateRoute auth={auth} />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}
