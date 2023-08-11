import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage1 from '../assets/1.png';
import bannerImage2 from '../assets/2.png';
import bannerImage3 from '../assets/3.png';
import '../index.css'


const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
    
  };

  return (
    <div className='slide overflow-hidden' >
    <Slider {...settings}>
      <div className="relative">
        <img src={bannerImage1} alt="Banner 1" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-[64px] font-normal mb-2 smartphone:text-[30px]">Kawula Mood</h2>
            <p className="text-[48px] font-light smartphone:text-[20px]">Outwear Casual Formal Let’s Moodster !</p>
            <button className="mt-4 bg-white hover:bg-black text-black hover:text-white py-2 px-4 rounded">
            <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={bannerImage2} alt="Banner 2" />
      </div>
      <div className="relative">
        <img src={bannerImage3} alt="Banner 3" />
      </div>
    </Slider>
    </div>
  );
};

export default BannerSlider;
