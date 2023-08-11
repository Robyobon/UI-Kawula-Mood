
import { Link } from 'react-router-dom';

const Creatacount = () => {
  return (
    <section className="creatacount px-[100px] smartphone:px-10 tablet:px-20 py-28">
     
     <h1 className="smartphone:text-[30px] text-center font-semibold text-[40px]">
     Create Acount
    </h1>
        <form>
          {/* Username and password fields */}
          <div className="mt-[86px] flex items-center justify-center">
            
            <input
              type="text"
              id="username"
              placeholder='First Name'
              className="w-[360px] bg-[#D9D9D9] p-2 border rounded-md"
            />
          </div>
          <div className="mt-[40px] flex items-center justify-center">
         
            <input
              type="password"
              id="password"
              placeholder='Last Name'
              className="w-[360px] bg-[#D9D9D9] p-2 border rounded-md"
            />
          </div>
          <div className="mt-[40px] flex items-center justify-center">
         
            <input
              type="password"
              id="password"
              placeholder='Email'
              className="w-[360px] bg-[#D9D9D9] p-2 border rounded-md"
            />
          </div>
          <div className="mt-[40px] flex items-center justify-center">
         
            <input
              type="password"
              id="password"
              placeholder='Password'
              className="w-[360px] bg-[#D9D9D9] p-2 border rounded-md"
            />
          </div>
          {/* Login button */}
        <Link to="/login"><button className="w-[360px] bg-black mt-[46px] mx-auto items-center justify-center flex">
    <p className="text-white font-normal text-[24px] text-center">
      Sign Up
    </p>
  </button></Link>  
        </form>
        {/* Create account and forgot password links */}
        <div className="mt-8 ">
          <Link to="/login" className="text-black px-[400px] tablet:px-[220px] smartphone:px-[28px] ">
            Back
          </Link>
    
      </div>
    </section>
  );
};

export default Creatacount;
