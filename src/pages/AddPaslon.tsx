import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import Nav from '../components/Nav';
import { UserCtx } from '../libs/Context';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type Paslon = {
  nama: string;
  nomor_urut: string;
  visi_misi: string;
  image: File | string;
};

export default function AddPaslon() {
  const navigate = useNavigate();

  const [state] = useContext(UserCtx);
  const [isLoading, setIsLoading] = useState(false);

  const [previewImage, setPreviewImage] = useState('');
  const [paslon, setPaslon] = useState<Paslon>({
    nama: '',
    nomor_urut: '',
    visi_misi: '',
    image: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nama', paslon.nama);
    formData.append('nomor_urut', paslon.nomor_urut);
    formData.append('visi_misi', paslon.visi_misi);
    formData.append('image', paslon.image);

    setIsLoading(true);
    const res = await fetch('http://localhost:3000/api/v1/paslon/add', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
      body: formData,
    });
    setIsLoading(false);

    // failed post
    if (res.status != 200) {
      console.log('EROR', res);
      toast.error(`${res.statusText}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }

    toast.success(`Successfully added Paslon`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

    // const data = await res.json();
    navigate('/paslon');
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const blob = URL.createObjectURL(e.target.files[0]);
      setPreviewImage(blob);

      setPaslon(prev => ({ ...prev, image: e.target.files ? e.target.files[0] : e.target.value }));
    }
  };

  return (
    <>
      <Nav />

      <h1 className="text-4xl font-bold text-center my-10">ADD PASLON</h1>

      <form onSubmit={handleSubmit}>
        <div className="my-container flex gap-10">
          <label htmlFor="inputImage">
            <div className="w-[400px] h-[520px] bg-gray-200 flex items-center justify-center">
              {previewImage && <img src={previewImage} alt="" className="w-[400px] h-[520px] object-cover object-center" />}

              {!previewImage && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-10 w-10 stroke-gray-500"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"
                  />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
              )}
            </div>
          </label>

          <input type="file" id="inputImage" hidden onChange={handleImageChange} />

          <div className="w-full h-5/6 flex flex-col justify-between">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-2xl font-semibold">
                Nama
              </label>
              <input
                type="text"
                id="name"
                onChange={e => setPaslon(prev => ({ ...prev, nama: e.target.value }))}
                className=" border-2 rounded-lg focus:outline-none py-1 px-3 focus:shadow focus:border-gray-300"
              />
            </div>
            {/* <div className="flex flex-col mt-5">
              <label htmlFor="name" className="text-2xl font-semibold">
                Partai
              </label>
              <input
                type="text"
                id="name"
                onChange={e => setPaslon({ ...paslon, partai: e.target.value })}
                className=" border-2 rounded-lg focus:outline-none py-1 px-3 focus:shadow focus:border-gray-300"
              />
            </div> */}
            <div className="flex flex-col mt-5">
              <label htmlFor="name" className="text-2xl font-semibold">
                No. Urut
              </label>
              <input
                type="text"
                id="name"
                onChange={e => setPaslon(prev => ({ ...prev, nomor_urut: e.target.value }))}
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
                onChange={e => setPaslon(prev => ({ ...prev, visi_misi: e.target.value }))}
                className=" border-2 rounded-lg focus:outline-none py-1 px-3 focus:shadow focus:border-gray-300 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`${
                isLoading ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-green-700 hover:bg-green-900 text-gray-200'
              } p-2 text-xl font-bold mt-10 w-1/4 rounded-lg`}
            >
              {isLoading ? 'sending...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
