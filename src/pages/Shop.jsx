import CardProduct from "../components/CardProduct";
import Star from "../assets/star.png";
import Product1 from "../assets/pr1.png";
import Product2 from "../assets/pr2.png";
import Product3 from "../assets/pr3.png";
import Product4 from "../assets/pr4.png";
import Product5 from "../assets/pr5.png";
import Product6 from "../assets/product6.png";
import Product7 from "../assets/Product7.png";
import Product8 from "../assets/Product8.png";
import Product9 from "../assets/Product9.png";
import Product10 from "../assets/Product10.png";
import Product11 from "../assets/Product11.png";
import Product12 from "../assets/Product12.png";
import Categorypage from "../components/Category";
import { Link } from 'react-router-dom';


function Shop() {

    const productList = [
        {
          id: 1,
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
        {
          name: 'JAGAD SERIES',
          image: Product7,
          description: 'BLACK - IDR 125.000',
          star: Star,
        },
        {
          name: 'CORAK SERIES',
          image: Product8,
          description: 'CORAK ACAK - IDR 125.000',
          star: Star,
        },
        {
          name: 'JAGAD SERIES',
          image: Product9,
          description: 'ARMY - IDR 125.000',
          star: Star,
        },
        {
          name: 'JAGAD SERIES',
          image: Product10,
          description: 'BRONZE - IDR 125.000',
          star: Star,
        },
        {
          name: 'JAGAD SERIES',
          image: Product11,
          description: 'BLACK - IDR 125.000',
          star: Star,
        },
        {
          name: 'JAGAD SERIES',
          image: Product12,
          description: 'GREY - IDR 125.000',
          star: Star,
        },
        
        
      ];

      

  return (
    <section className="shop px-[100px] smartphone:px-10 tablet:px-20 py-28">
    <h1 className="smartphone:text-[30px] text-center font-semibold text-[40px]">
      SHOP
    </h1>
    <div className="grid grid-cols-3 gap-4 p-4 smartphone:grid-cols-1 tablet:grid-cols-2">
      {productList.map((product, index) => (
      <Link to={`/jagadgrey`} key={index}> 
      <CardProduct product={product} />
    </Link>
  ))}
    </div>
    <div className="flex items-center justify-center gap-6 mt-[80px]">
      <p>1</p>
      <p className="text-[#D9D9D9]">2</p>
      <p className="text-[#D9D9D9]">3</p>
      <p className="text-[#D9D9D9]">4</p>
      <p className="text-[#D9D9D9]">5</p>
    </div>
    <div className="mt-[98px]">
        <Categorypage />
    </div>
    <div>

    </div>
    </section>
    
  )
}

export default Shop