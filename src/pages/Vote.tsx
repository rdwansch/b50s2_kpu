import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Nav from '../components/Nav';
import { useEffect, useState } from 'react';
import 'chart.js/auto';
import Footer from '../components/Footer';
import VoteModal from '../components/VoteModal';

export default function Vote() {
  const data: ChartData<'pie', number[], unknown> = {
    labels: ['Surya', 'Cintara', 'Ahmad'],
    datasets: [
      {
        label: 'votes',
        data: [51.1, 23.4, 10],
        backgroundColor: ['#ffc3c3', '#c8ffc3', '#c3e7ff'],
        borderColor: ['red', 'green', 'blue'],
      },
    ],
  };

  const [isOpenVoteModal, setIsOpenVoteModal] = useState(false);

  useEffect(() => {
    ChartJS.register(ArcElement, Tooltip, Legend);
  }, []);

  return (
    <div className="min-h-screen">
      <Nav />

      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center">INFO PEMILU TERUPDATE</h1>

        <section className="flex justify-between items-center my-container py-20">
          <div className="w-1/2">
            <h3 className="text-2xl font-bold">Hasil</h3>
            <div className="max-w-[500px] max-h-[500px]">
              <Pie data={data} />
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex flex-col gap-5">
              <div className="bg-[#ffb8b8] border border-white rounded-lg flex items-center gap-5">
                <div className="bg-red-800 w-fit text-center p-2 rounded-lg">
                  <h4 className="text-xl text-white">
                    No <span className="block">Paslon</span>
                    <span className="block text-3xl font-bold">3</span>
                  </h4>
                </div>
                <div className="text-3xl font-bold text-shadow text-red-800">
                  <h2>Surya</h2>
                  <h2>51.1%</h2>
                </div>
              </div>

              <div className="bg-[#c8ffc3] border border-white rounded-lg flex items-center gap-5">
                <div className="bg-green-800 w-fit text-center p-2 rounded-lg">
                  <h4 className="text-xl text-white">
                    No <span className="block">Paslon</span>
                    <span className="block text-3xl font-bold">3</span>
                  </h4>
                </div>
                <div className="text-3xl font-bold text-shadow text-green-800">
                  <h2>Cintara</h2>
                  <h2>23.4%</h2>
                </div>
              </div>

              <div className="bg-[#c3e7ff] border border-white rounded-lg flex items-center gap-5">
                <div className="bg-blue-800 w-fit text-center p-2 rounded-lg">
                  <h4 className="text-xl text-white">
                    No <span className="block">Paslon</span>
                    <span className="block text-3xl font-bold">3</span>
                  </h4>
                </div>
                <div className="text-3xl font-bold text-shadow text-blue-800">
                  <h2>Ahmad</h2>
                  <h2>10%</h2>
                </div>
              </div>
            </div>
            <h2 className="text-red-500 mt-5 text-2xl font-bold">Anda Sudah Memilih !!!</h2>
            <button
              onClick={() => setIsOpenVoteModal(true)}
              className="bg-green-800 text-gray-200 hover:text-white hover:bg-green-900 p-2 text-xl font-bold mt-10 w-2/4 rounded-lg"
            >
              Masukkan Suaramu
            </button>
            {isOpenVoteModal && <VoteModal isOpen={isOpenVoteModal} setIsOpen={setIsOpenVoteModal} />}
          </div>
        </section>

        <section className="bg-gray-300 py-20">
          <h2 className="font-bold text-4xl text-center">Info Paslon</h2>

          <div className="bg-white max-w-4xl rounded-lg p-10 flex items-center gap-5 mx-auto shadow mt-20">
            <img src="/paslon.png" alt="" className="rounded-lg h-[250px] w-[320px] object-cover object-center" />

            <div>
              <h3 className="text-xl font-bold">Nomor Urut: 1</h3>
              <h1 className="text-4xl font-bold text-red-600">Surya</h1>

              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quam reprehenderit illo, cum officiis magnam
                nulla nobis adipisci, soluta aspernatur maiores fugit ducimus hic animi deserunt recusandae sint rem
                molestiae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas aperiam nemo nostrum, quis amet
                odit illo dicta? Tempora eum amet, nihil illum accusamus distinctio odit iusto! Repudiandae repellat ea quas!
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white w-full py-20">
          <p className="max-w-6xl mx-auto font-bold text-4xl text-center text-red-600">
            PILIH BERDASARKAN GACHA TIDAK USAH SERIUS <span className="block">YANG PENTING TIDAK MELEGALKAN SLOT</span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
