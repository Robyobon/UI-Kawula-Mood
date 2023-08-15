import foto from "../assets/ft2.png"

function Cart() {
  return (
   <section className="cart">
     <h1 className="py-24 smartphone:text-[30px] text-center font-semibold text-[40px]">
     Your Cart
    </h1>
    <div className="border-t border-black absolute smartphone:inset-x-10 inset-x-[100px] top-[160px] h-0"></div>
    <div className="grid grid-cols-5 py-[70px]">
        <div><p className="px-[100px] smartphone:px-10 smartphone:top-[200px] smartphone:absolute tablet:top-[240px] tablet:absolute absolute top-[250px]">1</p></div>
        <div>
            <img src={foto} alt="foto" className="smartphone:w-[80px] smartphone:h-[82px] smartphone:left-[60px] w-[150px] h-[152px] absolute top-[175px] left-40" />
        </div>
        <div className=" smartphone:text-xs left-[330px] absolute top-[200px] smartphone:left-[160px] smartphone:-my-4">
            <p>JGAGAD SERIES - GREY</p>
            <p className="mt-4">M</p>
        </div>
        <div className=" absolute right-[500px] top-[200px] smartphone:right-[130px] tablet:right-[200px]">
    <form action="">
        <input 
        type="text"
        className="w-[80px] bg-[#D9D9D9] p-2 border smartphone:w-[30px] tablet:w-[60px] smartphone:my-4"
        placeholder="1" />
    </form>
    </div>
    <div className="right-[100px] absolute top-[200px] smartphone:text-xs smartphone:right-[40px] tablet:right-[100px] smartphone:my-4 ">
            <p>RP 125.000</p>
            <p className="text-right mt-4">Remove</p>
        </div>
    </div>
    <div className="border-t border-black absolute smartphone:inset-x-10 inset-x-[100px] bottom-[320px] h-0"></div>
<div className="flex justify-end smartphone:text-xs">
    <p className="text-right">Sub Total</p>
    <p className="text-right px-[100px]">RP 125.000</p>
</div>
<div className="flex justify-end mt-6 smartphone:text-xs ">
    <p className="text-right">Total</p>
    <p className="text-right px-[100px]">RP 125.000</p>
</div>
<button className="smartphone:w-[250px] w-[360px] bg-black mt-[46px] ml-auto flex justify-end mx-[100px] mb-40">
  <p className="text-white font-normal text-[24px] smartphone:text-lg smartphone:px-[80px] text-center px-[120px]">
    Check Out
  </p>
</button>


   </section>
  )
}

export default Cart