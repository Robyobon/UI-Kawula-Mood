import { Link } from "react-router-dom";
import foto1 from "../assets/ft2.png";
import foto2 from "../assets/ft1.png";
import foto3 from "../assets/ft3.png";
import foto4 from "../assets/ft4.png";



function ProductDetail() {
  return (
    <section className="jagadgrey px-[100px] py-28 smartphone:px-[50px] tablet:px-[200px]">
      <div className="grid grid-cols-2 smartphone:grid-cols-1 smartphone:py-20 tablet:grid-cols-1">
        <div>
          <img src={foto1} alt="" />
          <div className="flex gap-[70px] mt-2 smartphone:gap-[10px]">
            <img src={foto2} alt="" />
            <img src={foto3} alt="" />
            <img src={foto4} alt="" />
          </div>
        </div>

      <div>
        <div><h2 className="tablet:mt-10 text-center text-[32px] font-normal smartphone:text-[24px] smartphone:mt-4">JGAGAD SERIES - GREY</h2>
        <p className="text-center mt-[40px]">125.000</p>
        <div className="border-b-2 border-black mt-[30px]"></div>
        <p className="mt-[40px] text-2xl font-normal">size</p>
        <div className="flex gap-28 mt-[66px] smartphone:gap-20">
          <div className="border-2 border-solid border-black">
            <p className="mx-2 ">
              S</p></div>
          <p>M</p>
          <p>L</p>
          <p>X</p>
          <p>XXL</p>
        </div>

    <div className="flex mt-[50px]">
<div className="flex gap-4">
 <div>
 <div className=" flex gap-20 smartphone:right-[130px] tablet:right-[200px] smartphone:gap-6">
    <form action="">
        <input 
        type="text"
        className="w-[80px] bg-[#D9D9D9] p-2 border smartphone:w-[30px] tablet:w-[60px]"
        placeholder="1" />
    </form>
   <Link to="/cart"><button className="w-[353px] bg-black mx-auto">
    <p className="text-white font-normal text-[24px] text-center">
    ADD TO CHART
    </p>
  </button></Link>
    </div>
 
 </div>
</div>
 </div>
        </div>
        <div>
 <button className=" w-[507px] border-2 border-black mx-auto mt-[72px] smartphone:w-[400px] smartphone:mt-[40px] ">
    <p className="text-black font-normal text-[24px] text-center">
    BUY NOW
    </p>
  </button>
 </div>
      </div>
      </div>
<div className="grid grid-cols-2 smartphone:grid-cols-1  tablet:grid-cols-2 tablet:gap-20">

<div className="mt-[146px] text-center text-4xl font-normal">
  <p>Description</p>
  <div className="border-b-2 border-black"></div>
  <div className="text-left mt-[75px] text-2xl smartphone:text-base smartphone:mt-10">
    <p>
    --- Jagad Series---- <br />
Spesifikasi outerMaterial : Toyobo Premium <br />
Size : S-M <br />
Warna : Grey <br />
IDR 125K <br />
Diskon 20% : IDR 103K <br />
Colour Ready 📍 <br />
* Brown <br />
* Black <br />
* Grey <br />
* Army <br />
Size chart S-M <br />
Panjang outer : 67cm <br />
Lingkar badan : 112cm <br />
Panjang lengan : 43cm <br />
Lingkar lengan : 38cm <br />
Size chart L-XL <br />
Panjang outer : 75cm <br />
Lingkar badan : 120cm <br />
Panjang lengan : 49cm <br />
Lingkar lengan : 44cm <br />
    </p>
  </div>
</div>


<div className="mt-[146px] text-center text-4xl font-normal smartphone:mb-28 smartphone:mt-10"><p>Customer Review</p></div>

</div>
    </section>
  )
}

export default ProductDetail
