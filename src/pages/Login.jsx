
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="login px-[100px] smartphone:px-10 tablet:px-20 py-28">
     
     <h1 className="smartphone:text-[30px] text-center font-semibold text-[40px]">
      Login
    </h1>
        <form>
          {/* Username and password fields */}
          <div className="mt-[86px] flex items-center justify-center">
            
            <input
              type="text"
              id="username"
              placeholder='Username'
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
          <button className="w-[360px] bg-black mt-[46px] mx-auto items-center justify-center flex smartphone:w-[200px]">
    <p className="text-white font-normal text-[24px] text-center">
      Sign In
    </p>
  </button>
        </form>
        {/* Create account and forgot password links */}
        <div className="mt-8 ">
          <Link to="/creatacount" className="text-black px-[400px] tablet:px-[220px] smartphone:px-[28px] ">
            Create Account
          </Link>
         <br />
         <br />
          <Link to="/login" className="text-black px-[400px] tablet:px-[220px] smartphone:px-[28px]">
            Forgot Password ?
          </Link>
        </div>
      
    </section>
  );
};

export default Login;
