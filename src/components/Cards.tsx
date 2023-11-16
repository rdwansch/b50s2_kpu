import { Link } from 'react-router-dom';

export function BigCard() {
  return (
    <div className="relative col-span-2" style={{ background: "url('/article-image.png')", backgroundSize: 'cover' }}>
      <div className="w-full h-full bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]"></div>
      <div className="absolute bottom-0 p-5 ">
        <h3 className="bg-red-600 w-fit font-semibold text-2xl text-white px-3 py-2 rounded-xl">Senin 04, Jan 2024</h3>
        <h1 className="text-white text-4xl font-semibold">
          <Link to={'/detail'}>KPU TETAPKAN 3 MENTOR TERBAIK</Link>
        </h1>
        <h3 className="text-white text-2xl">Super Admin</h3>
      </div>
    </div>
  );
}

export function SmallCard() {
  return (
    <div className="bg-white">
      <img src="/article-image.png" className="h-[240px]" alt="" />
      <div className="p-5">
        <h3 className="bg-red-600 w-fit font-semibold text-xl text-white px-1  rounded-xl ">Senin 04, Jan 2024</h3>
        <h1 className=" text-3xl font-semibold">
          <Link to={'/detail'}>KPU TETAPKAN 3 MENTOR TERBAIK</Link>
        </h1>
        <h3 className="text-xl">Super Admin</h3>
      </div>
    </div>
  );
}
