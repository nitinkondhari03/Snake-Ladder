/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { LockClosedIcon } from '@heroicons/react/20/solid'
import { url } from "inspector";
import {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup=()=> {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [name, setName] = useState<String>("");
    const navigation =useNavigate();

    interface user{
        name:String;
        email:String;
        password:String;
        }

    const handleRegister=async(e:any)=>{
        e.preventDefault();        
        const payload={
            username:name,email,password
        }
        console.log(payload)
        try {
            const user= await axios.post("https://snake-ladder.onrender.com/user/register",payload)
            console.log(user)
            alert("User Registered successfully");
            navigation("/login")

            // .then(()=>{
            //     alert("User Registered successfully");
            // }
            // ).catch(()=>{
            //     alert("something went wrong")
            // })
            
        } catch (err) {
            alert(err)
        }
    }
    return (
      <div className="fixed inset-0 bg bg-opacity-75 transition-opacity" style={{backgroundImage:"url(https://wallpapercave.com/wp/wp9142232.jpg)  ",height:"100vh",backgroundSize:"contain", backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#fca941"}} >
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8"  >   
          <div className="w-full max-w-md space-y-8">
            <div>
              {/* <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              /> */}
              <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-gray-900">
                Sign up to your account
              </h2>
              {/* <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  start your 14-day free trial
                </a>
              </p> */}
            </div>
            <div className="mt-8 space-y-6">
              {/* <input type="hidden" name="remember" defaultValue="true" /> */}

              <div className="-space-y-px rounded-md shadow-sm">
              <div>
                  <label htmlFor="password" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="relative block w-full p-2 rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full p-2 roundedmd border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full p-2 rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
  
              <div>
                <button
                // {!email && !name && !password? isDisabled:onClick={handleRegister}}
                style={{backgroundColor:"#949b03"}}
                onClick={(e)=>handleRegister(e)}
                //   type="button"
                  className="group relative flex w-full justify-center rounded-md  px-3 py-2 text-md font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                  </span>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Signup;

//   