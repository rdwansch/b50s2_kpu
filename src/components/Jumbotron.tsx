export default function Jumbotron() {
  return (
    <div className="bg-gradient-to-l from-[#5C0303] via-[#5c0303] to-[#5c0303bd] my-container mt-20 rounded-xl ">
      <img src="/brandred 1.png" className="absolute" alt="" width={400} />

      <div className="flex items-end justify-between">
        <h1 className="text-6xl text-white font-semibold p-10">
          SELAMAT DATANG{' '}
          <span className="text-2xl block w-[600px]">
            PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI NAMA
          </span>
        </h1>
        <img src="/kotak-suara.png" alt="" width={400} className="mr-52 mb-10" />
      </div>
    </div>
  );
}
