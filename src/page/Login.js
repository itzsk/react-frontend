import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { BiShow, BiHide } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState({
    firstName: "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : "",
  });
  console.log(data);
  const handledShowPassword =()=>{
    setShowPassword(preve => !preve);
  };
  
  const handleOnChange =(e)=>{
    const {name,value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  };
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    const {email,password} = data
    if(email && password){
        alert("successfull")     
    }
    else{
      alert("Please Enter required fields")
    }
  }
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex flex-col p-4">
        {/* <h1 className="text-center text-2xl font-bold">sign up</h1> */}
        <div className="m-full m-auto overflow-hidden rounded-full drop-shadow-md shadow-xl">
          <FaUserAlt className="" />
        </div>
        <form className="w-full py-4 flex flex-col" onSubmit={handleSubmit}>
        
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex bg-slate-200 mt-1 mb-2 rounded focus-within:outline focus-within:outline-blue-500">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 px-2 py-1 outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex m-1.5 text-xl cursor-pointer"
              onClick={handledShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[120px] m-auto bg-red-400 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Login
          </button>
        </form>
        <p className="text-sm">
          Don't have account ?{" "}
          <Link to={"/SignUp"} className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login