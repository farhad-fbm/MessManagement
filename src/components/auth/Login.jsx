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
        <title>Tech-Shop | Login</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen w-full md:bg-base-200 ">
          <div className="hero-content flex-col py-40">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

              <form ref={formRef} onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
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
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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
            <div className="py-4 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className='text-center'>or</div>
              <div onClick={handleGoogleLogin} className="cursor-pointer border rounded-lg w-72 mx-auto px-3 py-2 mt-2 flex items-center gap-2"><FcGoogle className='text-xl' /> Continue with Google</div>
            </div>
          </div>
          <ToastContainer />
        </div>

      </div>
    </div>
  )
}