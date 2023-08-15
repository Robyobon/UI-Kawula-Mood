import gambar1 from "../assets/ctgr1.png"
import gambar2 from "../assets/ktg2.png"
import gambar3 from "../assets/ktg3.png"

function Category() {
  return (
    <section className="grid grid-cols-2 gap-5 smartphone:grid-cols-1">
<div className="relative group">
  <img src={gambar1} alt="category" className="h-[710px]" />
  <div className="absolute inset-0 bg-[#1E1E1E] opacity-60 group-hover:opacity-0 transition-opacity duration-300 h-[710px] "></div>
  <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">
    JAGAD SERIES
  </p>
</div>



<div className="grid grid-rows-2 gap-6">
    
<div className="relative group">
  <img src={gambar2} alt="category"/>
  <div className="absolute inset-0 bg-[#1E1E1E] opacity-60 group-hover:opacity-0 transition-opacity duration-300 tablet:h-64 "></div>
  <p className="absolute inset-0 flex items-center justify-center tablet:bottom-16 text-white text-xl font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">
  NYAWIJI SERIES
  </p>
</div>


<div className="relative group">
  <img src={gambar3} alt="category"  />
  <div className="absolute inset-0 bg-[#1E1E1E] opacity-60 group-hover:opacity-0 transition-opacity duration-300 h-[304px] smartphone:h-[200px] tablet:h-[204px]"></div>
  <p className="absolute inset-0 text-center top-36 smartphone:top-24 tablet:top-24 text-white text-xl font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300">
  CORAK SERIES
  </p>
</div>

</div>

    </section>
  )
}

export default Category