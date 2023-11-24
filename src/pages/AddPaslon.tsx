import { FormEvent, useContext, useState } from 'react';
import Nav from '../components/Nav';
import { UserCtx } from '../libs/Context';

export default function AddPaslon() {
  const [state] = useContext(UserCtx);

  const [paslon, setPaslon] = useState({
    nama: '',
    nourut: '',
    visimisi: '',
    foto: '',
    partai: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/v1/addpaslon', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify(paslon),
    });
    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <Nav />

      <h1 className="text-4xl font-bold text-center my-10">ADD PASLON</h1>

      <form onSubmit={handleSubmit}>
        <div className="my-container flex gap-10">
          <img src="/paslon.png" alt="" className="w-[400px] h-[520px] object-cover object-center" />

          <div className="w-full h-5/6 flex flex-col justify-between">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-2xl font-semibold">
                Nama
              </label>
              <input
                type="text"
                id="name"
                onChange={e => setPaslon({ ...paslon, nama: e.target.value })}
                className=" border-2 rounded-lg focus:outline-none py-1 px-3 focus:shadow focus:border-gray-300"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="name" className="text-2xl font-semibold">
                Partai
              </label>
              <input
                type="text"
                id="name"
                onChange={e => setPaslon({ ...paslon, partai: e.target.value })}
                className=" border-2 rounded-lg focus:outline-none py-1 px-3 focus:shadow focus:border-gray-300"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="name" className="text-2xl font-semibold">
                No. Urut
              </label>
              <input
                type="text"
                id="name"
                onChange={e => setPaslon({ ...paslon, nourut: e.target.value })}
                className=" border-2 rounded-lg focus:outline-none py-1 px-3 focus:shadow focus:border-gray-300"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="name" className="text-2xl font-semibold">
                Visi Misi
              </label>
              <textarea
                id="name"
                cols={30}
                rows={10}
                onChange={e => setPaslon({ ...paslon, visimisi: e.target.value })}
                className=" border-2 rounded-lg focus:outline-none py-1 px-3 focus:shadow focus:border-gray-300 resize-none"
              />
            </div>
            <button className="bg-green-800 text-gray-200 hover:text-white hover:bg-green-900 p-2 text-xl font-bold mt-10 w-1/4 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
