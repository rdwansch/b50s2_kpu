import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

export default function Paslon() {
  return (
    <div className="min-h-screen">
      <Nav />

      <h1 className="text-4xl font-bold text-center mt-10">LIST PASLON</h1>

      <table className="my-container border border-gray-400 w-full mt-10">
        <thead className="bg-gray-600">
          <th className="text-lg text-white border border-gray-400 text-center">No. Urut</th>
          <th className="text-lg text-white border border-gray-400 text-center">Image</th>
          <th className="text-lg text-white border border-gray-400 text-center">Nama</th>
          <th className="text-lg text-white border border-gray-400 text-center">Visi & Misi</th>
          <th className="text-lg text-white border border-gray-400 text-center">Koalisi</th>
        </thead>
        <tbody className="border border-gray-400">
          <tr>
            <td className="py-2 border border-gray-400 text-center w-1/12">1</td>
            <td className="py-2 border border-gray-400 text-center w-2/12">
              <img src="paslon.png" className="w-20 h-24 object-center object-cover mx-auto" />
            </td>
            <td className="py-2 border border-gray-400 text-center w-3/12">Surya</td>
            <td className="py-2 border border-gray-400 text-center w-3/12">
              Memindahkan Indonesia ke Isekai. Nonton anime 3x sehari. Melakukan peresapan pada budaya jepang.
            </td>
            <td className="py-2 border border-gray-400 text-center w-3/12">
              Partai Persatuan Wiboo. Partai Redbull. Partai Black Magic.
            </td>
          </tr>
        </tbody>
      </table>

      <div className="my-container mt-7">
        <Link
          to="/paslon/add"
          className=" border-2 hover:bg-gray-300 transition border-gray-300 py-1 px-5 rounded-lg font-bold"
        >
          Add Paslon
        </Link>
      </div>
    </div>
  );
}
