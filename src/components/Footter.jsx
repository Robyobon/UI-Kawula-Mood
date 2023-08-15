import Fotter1 from "../assets/foter.png"
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi"

const Footer = () => {
  return (
    <footer className="text-black py-10 px-[100px] relative smartphone:px-[40px] smartphone:text-xs">
      <div className="border-t border-black absolute smartphone:inset-x-10 inset-x-[100px] top-0 h-0"></div>
      <div className="grid grid-cols-4">
      
          <div>
            <p className="mb-2">Contact Us</p>
            <p className="mb-2">Size Guide</p>
            <p className="mb-2">How to Shop</p>
            <p className="mb-2">FAQ</p>
            <p className="mb-2">Return Policy</p>
          </div>
          <div className="ml-20 smartphone:ml-4 tablet:ml-2">
            <p className="mb-2">Terms & Conditions</p>
            <p className="mb-2">Term of Service</p>
            <p className="mb-2">Refund Policy</p>
            <p className="mb-2">Order Confirmation</p>
          </div>
          <div className="ml-40 smartphone:ml-4 tablet:ml-16">
            <p className="flex items-center mb-2"><BiLogoFacebook /> Facebook</p>
            <p className="flex items-center mb-2"><BiLogoTwitter /> Twitter</p>
            <p className="flex items-center mb-2"><BiLogoInstagram /> Instagram</p>
            <p className="flex items-center mb-2"><BiLogoYoutube /> YouTube</p>
          </div>
       
        <div className="text-center">
          <p className="smartphone:text-left text-right smartphone:ml-4 ">© 2023 ,KawulaMood</p>
          <img src={Fotter1} alt="logo" className="absolute right-[70px] smartphone:w-24 smartphone:right-4 tablet:w-40" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
