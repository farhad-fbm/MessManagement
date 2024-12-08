import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from '../../ContextProviders/AuthContextProvider';

export const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
    // Check for minimum length
    if (password.length < 6) {
      return toast.error('Password length should be at-least 6 character ', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return toast.error('Password should be at-least one uppercase', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return toast.error('Password should be at-least one special character', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    createUser(email, password)
      .then(() => {

        formRef.current.reset();
        toast.success('🦄 Succesfully Register!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        updateProfile(auth.currentUser, { displayName: `${name}`, photoURL: `${photoURL}` })
          .then()
          .catch()

        setTimeout(() => {
          window.location = '/';
          // window.location.reload();
        }, 1300);

      })
      .catch((error) => {
        toast.error(error.code, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })

  }
  return (
    <div>
      <Helmet>
        <title>Mess | Register</title>
      </Helmet>
      <div className="w-full text-[#EAD8B1]">
        <div className="hero-content flex-col pt-16">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#001F3F]">

            <form ref={formRef} onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <span className="p-2">Name</span>
                <input
                  onChange={e => setName(e.target.value)}
                  type="text"
                  name='name'
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <span className="p-2">Image Url</span>
                <input
                  onChange={e => setPhotoURL(e.target.value)}
                  type="text"
                  name='image_url'
                  placeholder="image url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <span className="p-2">Email</span>
                <input
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <span className="p-2">Password</span>
                <input
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='px-6 pb-4'>Already have account ?
              <Link to='/login' className="p-2 text-blue-600 cursor-pointer" >Login</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}