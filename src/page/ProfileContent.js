import React, { useState } from "react";
import profile from "../image/profile.gif";
import { ImagetoBase64 } from "../Utility/ImagetoBase64";
import { BiShow, BiHide } from "react-icons/bi";

const ProfileContent = ({ active }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handledShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const [data, setData] = useState({
    image: "",
    fullName: "",
    email: "",
    mobileNumber: "",
    zipCode: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data);

  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmmit = (e) => {
    e.preventDefault()
    const {fullName,email,mobileNumber,zipCode,password,confirmPassword} = data
    if(fullName && email && mobileNumber && zipCode && password && confirmPassword){
      if(password === confirmPassword){
        alert("Upload Successfull")      //link to server
      }
      else {
        alert("Password not match")
      }
    }
    else {
      alert("Please enter require fields")
    }
  };

  return (
    <div className="w-full">
      {/* profile page */}
      {active === 1 && (
        <div className="flex flex-col">
          <div className="flex justify-center w-full">
            <div className="relative w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
              <img
                src={data.image ? data.image : profile}
                className="w-full h-full "
                alt=""
              />

              <label htmlFor="profileImage">
                <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
                  <p className="text-sm p-1 text-white">Upload</p>
                </div>
                <input
                  type={"file"}
                  id="profileImage"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUploadProfileImage}
                />
              </label>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-20">
            <form onSubmit={handleSubmmit} className="flex flex-col">
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-[90%]"
                    id="fullName"
                    name="fullName"
                    value={data.fullName}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className="w-[90%]"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Mobile Number</label>
                  <input
                    type="number"
                    className="w-[90%]"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={data.mobileNumber}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">Zip-code</label>
                  <input
                    type="number"
                    className="w-[90%]"
                    id="zipCode"
                    name="zipCode"
                    value={data.zipCode}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="w-full flex pb-3">
                <div className="w-[50%] ">
                  <label className="block pb-2">New Password</label>
                  <div className="flex ">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="w-[90%]"
                      value={data.password}
                      onChange={handleOnChange}
                    />
                    <span
                      className="flex text-xl cursor-pointer"
                      onClick={handledShowPassword}
                    >
                      {showPassword ? <BiShow /> : <BiHide />}
                    </span>
                  </div>
                </div>
                <div className="w-[50%] ">
                  <label className="block pb-2">Confirm Password</label>
                  <div className="flex ">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      className="w-[90%]"
                      value={data.confirmPassword}
                      onChange={handleOnChange}
                    />
                    <span
                      className="flex text-xl cursor-pointer"
                      onClick={handleShowConfirmPassword}
                    >
                      {showConfirmPassword ? <BiShow /> : <BiHide />}
                    </span>
                  </div>
                </div>
              </div>
          <button className="w-full m-auto py-1 max-w-[120px] bg-red-500 hover:bg-red-700 cursor-pointer text-white text-xl font-medium text-center rounded-full mt-4">
            Submit
          </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
