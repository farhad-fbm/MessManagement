import { useContext, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../ContextProviders/AuthContextProvider';




export const Login = () => {

  const { logInUser, googleLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    logInUser(email, password)
      .then(() => {
        formRef.current.reset();
        toast.success('🦄 Succesfully LogIn!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : '/');
        }, 1500)

      })
      .catch((error) => {
        console.error(error);
        toast.error('🦄 Email and Password not matched !', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });

  }
  const handleGoogleLogin = () => {
    googleLogIn()
      .then(() => {
        toast.success('🦄 Succesfully LogIn!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : '/');
        }, 1500)

      })
      .catch()
  }
  return (
    <div>
      <Helmet>
        <title>Mess | Login</title>
      </Helmet>
      <div>
        <div className="w-full text-[#EAD8B1]">
          <div className="hero-content flex-col pt-16">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#001F3F]">
              <form ref={formRef} onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <p className="p-2">Email</p>
                  <input
                    onChange={e => setEmail(e.target.value)}
                    name='email'
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <p className="p-2">Password</p>
                  <input
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="">
                    <a href="#" className="mt-4 text-blue-600 cursor-pointer">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>

              </form>
              <p className='px-6 pb-4'>Do not have account ?
                <Link to='/register' className="p-2 text-blue-600 cursor-pointer" >Register</Link>
              </p>
            </div>
            <div className="py-4 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#001F3F]">
              <div className='text-center'>or</div>
              <div onClick={handleGoogleLogin} className="cursor-pointer border rounded-lg border-[#EAD8B1] w-72 mx-auto px-3 py-2 mt-2 flex items-center gap-2"><FcGoogle className='text-xl' /> Continue with Google</div>
            </div>
          </div>
          <ToastContainer />
        </div>

      </div>
    </div>
  )
}