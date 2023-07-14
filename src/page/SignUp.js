import React, { useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { ImagetoBase64 } from '../Utility/ImagetoBase64';
import profile from '../image/profile.gif';

function Signup() {
      const navigate = useNavigate()
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    const [data,setData] = useState({
      firstName: "",
      lastName : "",
      email : "",
      password : "",
      confirmPassword : "",
      image : "",
    });
    console.log(data);
    const handledShowPassword =()=>{
      setShowPassword(preve => !preve);
    };
    const handledShowConfirmPassword =()=>{
      setShowConfirmPassword(preve => !preve);
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
    
    const handleUploadProfileImage = async (e)=> {
        const data = await ImagetoBase64(e.target.files[0])
        console.log(data);

        setData((preve)=>{
          return {
            ...preve,
            image : data
          }
        })
    }

    const handleSubmit =(e)=>{
      e.preventDefault()
      const {firstName,email,password,confirmPassword} = data
      if(firstName && email && password && confirmPassword){
        if(password === confirmPassword){
          alert("successfull")
          navigate("/Login")
        }
        else{
          alert("password and confirm password not equal")
        }
      }
      else{
        alert("Please Enter required fields")
      }
    }

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex flex-col p-4">
        {/* <h1 className="text-center text-2xl font-bold">sign up</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img src={ data.image ? data.image: profile } alt="upload" className="h-full w-full" />

          <label htmlFor="profileImage">
            <div className="absolate botton-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage} />
          </label>
        </div>

        <form className="w-full py-4 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500"
            value={data.lastName}
            onChange={handleOnChange}
          />

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

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex bg-slate-200 mt-1 mb-2 rounded focus-within:outline focus-within:outline-blue-500">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              className="w-full bg-slate-200 px-2 py-1 outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex m-1.5 text-xl cursor-pointer"
              onClick={handledShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[120px] m-auto bg-red-400 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign Up
          </button>
        </form>
        <p className="text-sm">
          Already have account ?{" "}
          <Link to={"/login"} className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup