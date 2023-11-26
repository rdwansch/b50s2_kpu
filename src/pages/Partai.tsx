import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { useContext, useEffect, useState } from 'react';
import { UserCtx } from '../libs/Context';

type PartaiT = {
  id: number;
  nama: string;
  ketua_umum: string;
  visi_misi: 'Bensin akan murah';
  alamat: string;
  image: string;
  created_at: string;
  updated_at: string;
};

export default function Partai() {
  const [listPartai, setListPartai] = useState<PartaiT[]>([]);
  const [state] = useContext(UserCtx);

  const getListPartai = async () => {
    const res = await fetch('http://localhost:3000/api/v1/partai', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });

    const { data } = await res.json();
    setListPartai(data);
  };

  useEffect(() => {
    getListPartai();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen">
      <Nav />

      <h1 className="text-4xl font-bold text-center mt-10">LIST PARTAI</h1>

      <table className="my-container border border-gray-400 w-full mt-10">
        <thead className="bg-gray-600">
          <tr>
            <td className="text-lg text-white border border-gray-400 text-center">No.</td>
            <td className="text-lg text-white border border-gray-400 text-center">Nama</td>
            <td className="text-lg text-white border border-gray-400 text-center">Logo</td>
            <td className="text-lg text-white border border-gray-400 text-center">Ketua Umum</td>
            <td className="text-lg text-white border border-gray-400 text-center">Visi & Misi</td>
            <td className="text-lg text-white border border-gray-400 text-center">Alamat</td>
          </tr>
        </thead>
        <tbody className="border border-gray-400">
          {listPartai?.length !== 0 &&
            listPartai.map((partai, idx) => (
              <tr key={idx - 1}>
                <td className="py-2 border border-gray-400 text-center w-1/12">{idx + 1}</td>
                <td className="py-2 border border-gray-400 text-center w-2/12">{partai.nama}</td>
                <td className="py-2 border border-gray-400 text-center w-2/12">
                  <img src={partai.image} className="w-20 h-24 object-center object-cover mx-auto" />
                </td>
                <td className="py-2 border border-gray-400 text-center w-2/12">{partai.ketua_umum}</td>
                <td className="py-2 border border-gray-400 text-center w-3/12">{partai.visi_misi}</td>
                <td className="py-2 border border-gray-400 text-center w-2/12">{partai.alamat}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="my-container mt-7">
        <Link
          to="/partai/add"
          className=" border-2 hover:bg-gray-300 transition border-gray-300 py-1 px-5 rounded-lg font-bold"
        >
          Add Partai
        </Link>
      </div>
    </div>
  );
}
