import How from "../assets/how.png"

function Howtoorder() {
  return (
    <section className="howtoorder px-[100px] smartphone:px-10 tablet:px-20 py-28">
    <h1 className="smartphone:text-[30px] text-center font-semibold text-[40px]">
      How To Order
    </h1>
   <img src={How} alt="ganbar how" className="mt-10" />
    </section>
  )
}

export default Howtoorder