import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { useContext, useEffect, useState } from 'react';
import { UserCtx } from '../libs/Context';

type PartaiPengusung = {
  partai_data: {
    nama_partai: string;
  };
};

type ListPaslon = {
  id: number;
  nama: string;
  nomor_urut: string;
  visi_misi: string;
  image: string;
  partai_pengusung: PartaiPengusung[];
};

export default function Paslon() {
  const [listPaslon, setListPaslon] = useState<ListPaslon[]>([]);
  const [state] = useContext(UserCtx);

  const getListPaslon = async () => {
    const res = await fetch('http://localhost:3000/api/v1/paslon', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });

    if (res.status == 200) {
      const { data } = await res.json();

      setListPaslon(data);
    }
  };

  useEffect(() => {
    getListPaslon();

    // eslint-disable-next-line
  }, []);

  // console.log(listPaslon);

  return (
    <div className="min-h-screen">
      <Nav />

      <h1 className="text-4xl font-bold text-center mt-10">LIST PASLON</h1>

      <table className="my-container border border-gray-400 w-full mt-10">
        <thead className="bg-gray-600">
          <tr>
            {/* <td className="text-lg text-white border border-gray-400 text-center">No.</td> */}
            <td className="text-lg text-white border border-gray-400 text-center">No. Urut</td>
            <td className="text-lg text-white border border-gray-400 text-center">Image</td>
            <td className="text-lg text-white border border-gray-400 text-center">Nama</td>
            <td className="text-lg text-white border border-gray-400 text-center">Visi & Misi</td>
            <td className="text-lg text-white border border-gray-400 text-center">Koalisi</td>
          </tr>
        </thead>
        <tbody className="border border-gray-400">
          {listPaslon?.length !== 0 &&
            listPaslon.map((paslon, idx) => (
              <tr key={idx + 1}>
                {/* <td className="py-2 border border-gray-400 text-center w-1/12">{idx + 1}</td> */}
                <td className="py-2 border border-gray-400 text-center w-1/12">{paslon.nomor_urut}</td>
                <td className="py-2 border border-gray-400 text-center w-2/12">
                  <img src={paslon.image} className="w-20 h-24 object-center object-cover mx-auto" />
                </td>
                <td className="py-2 border border-gray-400 text-center w-3/12">{paslon.nama}</td>
                <td className="py-2 border border-gray-400 text-center w-3/12">{paslon.visi_misi}</td>
                <td className="py-2 border border-gray-400 text-center w-3/12">
                  {paslon.partai_pengusung.length != 0 &&
                    paslon.partai_pengusung.map(koalisi => koalisi.partai_data.nama_partai)}
                  {paslon.partai_pengusung.length == 0 ? 'Belum diusung Partai' : ''}
                </td>
              </tr>
            ))}
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
