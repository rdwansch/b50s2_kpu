import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function Admin() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Nav />

      <div className="bg-white px-10 py-20">
        <h1 className="text-4xl font-bold text-center uppercase">Dashboard</h1>

        <div className="flex items-center gap-20 mt-10 my-container">
          <div className="__card group">
            <div className="text-2xl w-16 h-16 flex items-center justify-center font-bold border-2 mx-auto rounded-full">
              1
            </div>
            <div className="group-hover:shadow-lg shadow rounded-lg p-5">
              <img src="/paslon.png" alt="" className=" mx-auto object-cover object-center w-80 h-80" />
              <h2 className="font-bold text-2xl text-center uppercase">Surya Surya</h2>
              <div className="text-gray-500  mt-5">
                <p>
                  Akumulasi: <span className="font-bold">45%</span>
                </p>
                <p>
                  Jumlah Vote: <span className="font-bold">177 voters</span>
                </p>
              </div>
            </div>
          </div>
          <div className="__card group">
            <div className="text-2xl w-16 h-16 flex items-center justify-center font-bold border-2 mx-auto rounded-full">
              2
            </div>
            <div className="group-hover:shadow-lg shadow rounded-lg p-5">
              <img src="/paslon.png" alt="" className=" mx-auto object-cover object-center w-80 h-80" />
              <h2 className="font-bold text-2xl text-center uppercase">Surya Surya</h2>
              <div className="text-gray-500  mt-5">
                <p>
                  Akumulasi: <span className="font-bold">45%</span>
                </p>
                <p>
                  Jumlah Vote: <span className="font-bold">177 voters</span>
                </p>
              </div>
            </div>
          </div>
          <div className="__card group">
            <div className="text-2xl w-16 h-16 flex items-center justify-center font-bold border-2 mx-auto rounded-full">
              3
            </div>
            <div className="group-hover:shadow-lg shadow rounded-lg p-5">
              <img src="/paslon.png" alt="" className=" mx-auto object-cover object-center w-80 h-80" />
              <h2 className="font-bold text-2xl text-center uppercase">Surya Surya</h2>
              <div className="text-gray-500  mt-5">
                <p>
                  Akumulasi: <span className="font-bold">45%</span>
                </p>
                <p>
                  Jumlah Vote: <span className="font-bold">177 voters</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-3xl uppercase font-bold text-center">List Votter</h2>
        <table className="my-container border border-gray-400 w-full mt-10">
          <thead className="bg-gray-600">
            <th className="text-lg text-white border border-gray-400 text-center">No</th>
            <th className="text-lg text-white border border-gray-400 text-center">Nama</th>
            <th className="text-lg text-white border border-gray-400 text-center">Alamat</th>
            <th className="text-lg text-white border border-gray-400 text-center">Jenis Kelamin</th>
            <th className="text-lg text-white border border-gray-400 text-center">Paslon</th>
          </thead>
          <tbody className="border border-gray-400">
            <tr>
              <td className="border border-gray-400 text-center">1</td>
              <td className="border border-gray-400 text-center">Ridhwan R. Siddiq</td>
              <td className="border border-gray-400 text-center">Jl. Kerang</td>
              <td className="border border-gray-400 text-center">Laki-Laki</td>
              <td className="border border-gray-400 text-center">Surya</td>
            </tr>
            <tr>
              <td className="border border-gray-400 text-center">2</td>
              <td className="border border-gray-400 text-center">Haris A</td>
              <td className="border border-gray-400 text-center">Jl. Pegangsaan Timur</td>
              <td className="border border-gray-400 text-center">Laki-Laki</td>
              <td className="border border-gray-400 text-center">Surya</td>
            </tr>
            <tr>
              <td className="border border-gray-400 text-center">3</td>
              <td className="border border-gray-400 text-center">Jaka Surya</td>
              <td className="border border-gray-400 text-center">Jl. Kenanga selatan</td>
              <td className="border border-gray-400 text-center">Laki-Laki</td>
              <td className="border border-gray-400 text-center">Paloh</td>
            </tr>
            <tr>
              <td className="border border-gray-400 text-center">4</td>
              <td className="border border-gray-400 text-center">Ahmad Razak</td>
              <td className="border border-gray-400 text-center">Jl. Jarwa</td>
              <td className="border border-gray-400 text-center">Laki-Laki</td>
              <td className="border border-gray-400 text-center">Paloh</td>
            </tr>
          </tbody>
        </table>

        <h5 className="text-xl font-bold my-container mt-7">TOTAL SUARA TERKUMPUL : 1000 Voters</h5>
      </div>
      <Footer />
    </div>
  );
}
