import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import logo from "../assets/jh 1.png";
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import "../index.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbar = document.getElementById("navbar");

      if (currentScrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className="navbar flex items-center h-16 max-w-full desktop:px-[46px] tablet:px-[100px] z-40">
      <div className="flex items-center space-x-4 pr-8">
        <Link to="/"> 
          <img src={logo} alt="Logo" className="h-8 mt-2 tablet:px-0 smartphone:px-6" />
        </Link>
        <ul className="smartphone:hidden flex mt-2 tablet:hidden">
          <li className="p-4 text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 text-black">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="p-4 text-black">
            <Link to="/howtoorder">How To Order</Link>
          </li>
          <li className="p-4 text-black">
            <Link to="/magazine">Magazine</Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto flex items-center space-x-4 pr-8 mt-2 smartphone:mr-16">
        <BsSearch className="text-black" size={20} />
        <Link to="/login"><BiUser className="text-black" size={20} /></Link>
        <Link to="/cart"><AiOutlineShoppingCart className="text-black" size={20} /></Link>
      </div>
      <div
        onClick={handleNav}
        className="block desktop:hidden z-50 fixed mt-0 right-12 tablet:right-14"
      >
        {!nav ? <AiOutlineMenu size={20} color="black" /> : <AiOutlineClose size={20} color="black" />}
      </div>
      <div
        className="fixed left-0 top-0 w-full h-full bg-white opacity-90 transition-all duration-500 z-40"
        style={{ transform: nav ? "translateX(0)" : "translateX(-100%)" }}
        
      >
        <img src={logo} alt="Logo" className="h-8 m-0 px-6 mt-5  " />
        <ul className="w-full h-full flex flex-col items-center justify-center text-center  uppercase ">
          <li className="p-4 text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 text-black">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="p-4 text-black">
            <Link to="/howtoorder">How to Order</Link>
          </li>
          <li className="p-4 text-black">
            <Link to="/magazine">Magazine</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
