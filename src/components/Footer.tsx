export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex gap-7 my-container py-10">
        <div className="bg-red-700 rounded-full w-20 h-20 flex items-center justify-center">
          <p className="text-4xl font-bold text-white">DU</p>
        </div>
        <div>
          <h2 className="text-2xl text-white font-semibold">DUMBWAYS.ID</h2>
          <p className="max-w-sm text-gray-400">
            Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413
          </p>
        </div>
      </div>

      <div>
        <hr className="border-gray-500" />
        <p className="text-white text-xl text-center py-5">Komisi Pemilihan Umum DumbWays.ID | yourname 2023</p>
      </div>
    </footer>
  );
}
