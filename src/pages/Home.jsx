import BannerSlider from "../components/Banner";
import Categorypage from "../components/Category";
import CardProduct from "../components/CardProduct";
import Magazine from "../components/Magazine";
import Star from "../assets/star.png";
import Product1 from "../assets/pr1.png";
import Product2 from "../assets/pr2.png";
import Product3 from "../assets/pr3.png";
import Product4 from "../assets/pr4.png";
import Product5 from "../assets/pr5.png";
import Product6 from "../assets/product6.png";
import Magazine1 from "../assets/n-1.png";

import { Link } from "react-router-dom"

function Home() {
  const productList = [
    {
      name: 'NYAWIJI SERIES',
      image: Product1,
      description: 'RUST - IDR 145.000',
      star: Star,
    },
    {
      name: 'CORAK SERIES',
      image: Product2,
      description: 'CORAK GHODONG - IDR 113.000',
      star: Star,
    },
    {
      name: 'CORAK SERIES',
      image: Product3,
      description: 'CORAK JUPUK - IDR 113.000',
      star: Star,
    },
    {
      name: 'NYAWIJI SERIES',
      image: Product4,
      description: 'COPPER LATTE - IDR 145.000',
      star: Star,
    },
    {
      name: 'CORAK SERIES',
      image: Product5,
      description: 'CORAK SALUR - IDR 113.000',
      star: Star,
    },
    {
      
     name: 'JAGAD SERIES',
      image: Product6,
      description: 'GREY - IDR 125.000',
      star: Star,
     
    },
   
  ];

  const listmagazine = [
    {
      image: Magazine1,
      article:
        '"Dan bagi tiap-tiap umat telah Kami syariatkan penyembelihan (kurban), supaya mereka menyebut nama Allah terhadap binatang ternak yang telah direzekikan Allah kepada mereka, maka Tuhanmu ialah Tuhan Yang Maha Esa, karena itu berserah dirilah kamu kepada-Nya. Dan berilah kabar gembira kepada orang-orang yang tunduk patuh (kepada Allah)." (Quran Surat Al-Hajj Ayat 34) Selamat hari raya idul adha. Semoga Allah selalu memberikan keberkahan dan kesehatan untuk kita semua ✨',
    },
  ];

  return (
    <section>
      <div>
        <BannerSlider />
      </div>
      <div className="px-[100px] smartphone:px-10 tablet:px-20">
        <h1 className="smartphone:text-[30px] text-center mt-[49px] font-semibold text-[40px] mb-[70px]">
          NEW ARRIVALS
        </h1>
        <div className="grid grid-cols-3 gap-4 p-4 smartphone:grid-cols-1 tablet:grid-cols-2">
          {productList.map((product, index) => (
           <Link to={`/jagadgrey`} key={index}> 
           <CardProduct product={product} />
         </Link>
          ))}
        </div>
        <div>
          <div>
            {listmagazine.map((listmgz, index) => (
              <Magazine key={index} listmgz={listmgz} />
            ))}
          </div>
          <div className="flex items-center justify-center smartphone:-mt-10">
  <button className="w-[239px] h-[52px] bg-black mt-[100px] mx-auto">
    <p className="text-white font-normal text-[32px] text-center">
      Read More...
    </p>
  </button>
        </div>
     </div>
     <div className="mt-[134px]">
      <Categorypage />
     </div>
    </div>
    </section>
  );
}

export default Home;
