import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function Detail() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Nav />

      <div className="my-container bg-white pt-10 pb-20">
        <div className="relative items-center">
          <Link to="/" className="flex items-center gap-3 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <span>Beranda</span>
          </Link>
          <p className="text-xl absolute top-0 bottom-0 left-0 right-0 w-fit mx-auto">BERITA HARI INI</p>
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold uppercase">KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK </h1>
          <p className="text-xl text-gray-500">Super Admin</p>
          <p className="text-xl text-gray-500">Senin, 03 Jan 2023</p>
        </div>

        <img src="/article-image.png" alt="" className="max-w-5xl h-[500px] mx-auto mt-10" />

        <p className="max-w-5xl mx-auto mt-10">
          Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. Curabitur
          eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. Sed non diam vel mi
          tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel
          ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti. Sed interdum, lacus ac ultrices
          facilisis, ligula enim pellentesque elit, vel varius nisi odio at purus. Sed suscipit purus quis tortor posuere, in
          varius est euismod. Mauris aliquam urna non elit faucibus, eu fermentum turpis mattis. Quisque vel nisl vitae
          sapien congue dapibus. Vivamus auctor, velit ut condimentum bibendum, purus lacus scelerisque ligula, nec gravida
          arcu velit id libero. In hac habitasse platea dictumst.
          <br />
          <br />
          Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet mi ut turpis malesuada aliquam a eu orci. Maecenas
          ut purus eu sapien vestibulum vulputate. Fusce tincidunt fringilla arcu, non efficitur sapien scelerisque et.
          Maecenas facilisis eros id enim tincidunt, ac vestibulum quam fringilla. Nullam vel malesuada mi, vitae convallis
          libero. In hac habitasse platea dictumst. Duis cursus nunc vel metus rhoncus, id cursus justo imperdiet. Integer
          vitae ex ac libero fermentum volutpat ut vitae sapien. Aliquam id luctus nisl. Curabitur et augue ut justo
          tincidunt varius vel sit amet nunc. Integer tincidunt risus sit amet odio euismod, a finibus ligula blandit.
          Integer euismod, purus ut malesuada varius, lectus orci feugiat massa, ut egestas enim massa vel urna.
          <br />
          <br />
          Vivamus id dictum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Nulla facilisi. Curabitur aliquet ligula eu nisl bibendum, vel tincidunt justo feugiat. Nam dapibus,
          ligula id dapibus fermentum, odio libero luctus nunc, et scelerisque sapien libero vel ante. Etiam id odio nec nunc
          rhoncus lacinia nec eu massa. Nullam fermentum, felis ac bibendum malesuada, lectus felis fermentum dolor, a
          fermentum sapien mauris vel dui. Fusce vel turpis eu purus fermentum tincidunt a vel elit. Phasellus efficitur
          sapien vel efficitur rhoncus. Integer vel risus ut neque elementum gravida. Morbi rhoncus, ligula nec posuere
          tristique, ligula lacus dapibus urna, a lacinia sem metus id libero. Suspendisse luctus ligula eu mauris auctor,
          non semper elit feugiat.
          <br />
          <br />
          Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. Curabitur
          eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. Sed non diam vel mi
          tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel
          ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti.
        </p>
      </div>

      <Footer />
    </div>
  );
}
