import { Dispatch, SetStateAction, useState } from 'react';

export default function VoteModal({ isOpen, setIsOpen }: { isOpen: true; setIsOpen: Dispatch<SetStateAction<boolean>> }) {
  const [paslon] = useState([
    {
      img: '/paslon.png',
      name: 'Surya',
      visiMisi: 'Memindahkan Indonesia ke Isekai',
      partaiPengusung: ['Partai Pengusung Persatuan', 'Partai Pertanian Indonesia', 'Partai Bersatu Negri'],
    },
    {
      img: '/paslon.png',
      name: 'Ahmad',
      visiMisi: 'Ekonomi Maju',
      partaiPengusung: ['Partai Pembangkit Listrik', 'Partai Partij'],
    },
    {
      img: '/paslon.png',
      name: 'Cintara',
      visiMisi: 'Kesehatan Terjaga Indonesia Sehat',
      partaiPengusung: ['Partai Nakes'],
    },
  ]);

  const [selectedPaslon, setSelectedPaslon] = useState(-1);

  return (
    <div>
      <div
        className={`${isOpen ? 'block' : 'hidden'} bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 left-0 right-0 z-10`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`${
          isOpen ? 'block' : ' hidden'
        } bg-white fixed  w-fit p-10 top-32 left-0 right-0 mx-auto z-10 rounded-lg`}
      >
        <h2 className="text-3xl text-center font-semibold">Masukkan Pilihanmu</h2>
        <div className="flex gap-10">
          {paslon.map((p, idx) => (
            <div
              className={`mt-10 border w-fit p-5 rounded-lg shadow bg-gray-100 relative hover:cursor-pointer transition ${
                idx === selectedPaslon
                  ? 'bg-green-700 shadow-xl shadow-green-200'
                  : 'hover:bg-gray-200 group hover:shadow-lg'
              }`}
              key={p.name + idx}
              onClick={() => setSelectedPaslon(idx)}
            >
              <div
                className={`text-4xl font-semibold absolute -right-5 -top-5 border-4 text-white border-white  w-16 h-16 flex items-center justify-center rounded-full group-hover:bg-green-800 ${
                  idx === selectedPaslon ? 'bg-green-700' : 'bg-gray-400'
                }`}
              >
                {idx + 1}
              </div>

              <img src={p.img} alt="" className="w-[301px] h-[189px] object-cover object-center" />
              <h3 className={`text-2xl font-bold group-hover:underline ${idx === selectedPaslon && 'text-white'}`}>
                {p.name}
              </h3>
              <p className={`italic ${idx === selectedPaslon && 'text-white'}`}>{p.visiMisi}</p>
              <p className={`mt-2 font-semibold ${idx === selectedPaslon && 'text-white'}`}>Partai Pengusung:</p>
              <ul className={`list-disc ml-4 ${idx === selectedPaslon && 'text-white'}`}>
                {p.partaiPengusung.map(pengusung => (
                  <li key={pengusung}>{pengusung}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-10 mt-10 ">
          <button
            className="py-1 transition hover:bg-gray-300 hover:text-black hover:border-gray-800 border border-green-700 text-green-700 w-full text-2xl font-bold  rounded-lg"
            onClick={() => setSelectedPaslon(-1)}
          >
            Reset
          </button>
          <button className="py-1 transition hover:bg-green-800  border bg-green-600 w-full text-2xl font-bold text-white rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
