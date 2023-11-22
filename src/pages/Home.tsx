import { BigCard, SmallCard } from '../components/Cards';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';

export default function Home() {
  const data = [
    {
      date: 'Senin, 03 Jan 2024',
      title: 'KPU TETAPKAN 3 MENTOR TERBAIK',
      author: 'SuperAdmin',
    },
    {
      date: 'Senin, 03 Jan 2024',
      title: 'KPU TETAPKAN 3 MENTOR TERBAIK',
      author: 'SuperAdmin',
    },
    {
      date: 'Senin, 03 Jan 2024',
      title: 'KPU TETAPKAN 3 MENTOR TERBAIK',
      author: 'SuperAdmin',
    },
    {
      date: 'Senin, 03 Jan 2024',
      title: 'KPU TETAPKAN 3 MENTOR TERBAIK',
      author: 'SuperAdmin',
    },
    {
      date: 'Senin, 03 Jan 2024',
      title: 'KPU TETAPKAN 3 MENTOR TERBAIK',
      author: 'SuperAdmin',
    },
  ];

  return (
    <div className="bg-gray-300 min-h-screen">
      <Nav />
      <Jumbotron />

      <div className="grid grid-cols-3 gap-6 my-container mt-20">
        {data.map((post, idx) => (idx == 0 ? <BigCard key={idx} /> : <SmallCard key={idx + 1} />))}
      </div>

      <div className="bg-white w-full py-20 mt-20">
        <p className="max-w-6xl mx-auto font-bold text-4xl text-center">
          PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK
          MELEGALKAN SLOT
        </p>
      </div>

      <Footer />
    </div>
  );
}
