import React, { useState } from "react";
import profile from "../image/profile.gif";
import { ImagetoBase64 } from "../Utility/ImagetoBase64";
import { Link } from 'react-router-dom';
import { BiShow, BiHide } from "react-icons/bi";
import { AiOutlineArrowRight, AiOutlineDelete } from "react-icons/ai";
import { Button } from "@mui/material";
import { DataGrid } from "@material-ui/data-grid";
import "./Profile.css";

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
    e.preventDefault();
    const {
      fullName,
      email,
      mobileNumber,
      zipCode,
      password,
      confirmPassword,
    } = data;
    if (
      fullName &&
      email &&
      mobileNumber &&
      zipCode &&
      password &&
      confirmPassword
    ) {
      if (password === confirmPassword) {
        alert("Upload Successfull"); //link to server
      } else {
        alert("Password not match");
      }
    } else {
      alert("Please enter require fields");
    }
  };

  return (
    <div className="body_formContaint">
      {/* profile page */}
      {active === 1 && (
        <div className="body_formEditSection">
          <div className="form_profileImage">
            <img
              src={data.image ? data.image : profile}
              alt=""
            />

            <label htmlFor="profileImage">
              <div className="profileImage_upload">
                <p>Upload</p>
              </div>
              <input
                type={"file"}
                id="profileImage"
                accept="image/*"
                onChange={handleUploadProfileImage}
              />
            </label>
          </div>
          <br />
          <br />
          <div className="form_bodySection">
            <form onSubmit={handleSubmmit} >
              <div className="form_nameEmail">
                <div className="form_field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={data.fullName}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form_field">
                  <label>Email Address</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="form_numberZip">
                <div className="form_field">
                  <label>Mobile Number</label>
                  <input
                    type="number"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={data.mobileNumber}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form_field">
                  <label>Zip-code</label>
                  <input
                    type="number"
                    id="zipCode"
                    name="zipCode"
                    value={data.zipCode}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="form_passwordConfirm">
                <div className="form_field">
                  <label>New Password</label>
                  <div className="passwordConfirm">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={data.password}
                      onChange={handleOnChange}
                    />
                    <span
                      onClick={handledShowPassword}
                    >
                      {showPassword ? <BiShow /> : <BiHide />}
                    </span>
                  </div>
                </div>
                <div className="form_field">
                  <label>Confirm Password</label>
                  <div className="passwordConfirm">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={data.confirmPassword}
                      onChange={handleOnChange}
                    />
                    <span
                      onClick={handleShowConfirmPassword}
                    >
                      {showConfirmPassword ? <BiShow /> : <BiHide />}
                    </span>
                  </div>
                </div>
              </div>
              <button>
                Update
              </button>
            </form>
          </div>
        </div>
      )}

      {/* order  */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* refund  */}
      {active === 3 && (
        <div>
          <AllRrfundOrders />
        </div>
      )}

      {/* Payment  */}
      {active === 4 && (
        <div>
          <PaymentMethod />
        </div>
      )}

      {/* Address  */}
      {active === 5 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};


const AllOrders = () => {
  const orders = [          // static data for orders 
    {
      _id: "09458045803845gaa0495",
      orderItems: [
        {name: "iPhone 14 pro max",},
      ],
      totalPrice : 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", handleName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders && orders.forEach((item) => {
    row.push ({
      id: item._id,
      itemsQty: item.orderItems.length,
      total: "US$ " + item.totalPrice,
      status: item.orderStatus,
    });
  });

  return (
    <div className="pl-8 pt1">
      <DataGrid 
      rows={row}
      columns={columns}
      pageSize={10}
      disableSelectionOnclick
      authoHeight
      />
    </div>
  )
}

const AllRrfundOrders = () => {
  const orders = [          // static data for return
    {
      _id: "09458045803845gaa0495",
      orderItems: [
        {name: "iPhone 14 pro max",},
      ],
      totalPrice : 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "id", handleName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];
  
  orders &&
  orders.forEach((item) => {
    row.push({
      id: item._id,
      itemsQty: item.orderItems.length,
      total: "US$ " + item.totalPrice,
      status: item.orderStatus,
    });
  });
  return (
    <div className="">
      <DataGrid 
        rows={row}
        columns={columns}
        pageSize={10}
        authoHeight
        disableSelectionOnclick
        />
    </div>
  )
}

const PaymentMethod =() => {
  return (
  <div className="main_payment">
    <div className="payment_content">
      <h1>
        Payment Method
      </h1>
      <div className="add_button">
        <span>Add New</span>
      </div>
    </div>
    <br />
    <div className="main_cardUser">
      <div className="cardUser">
        <img src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg" alt="" />
        <h5 className="name">Shahriar Sajeeb</h5>
      </div>
      <div className="card_number">
        <h6>1234 **** **** ****</h6>
        <h5 className="pl-6">08/2025</h5>
      </div>
      <div className="delete_icon">
        <AiOutlineDelete size={25} className="icon" />
      </div>
    </div>
  </div>
  );
};

const Address = () => {
  return (
    <div className="main_address">
    <div className="address_content">
      <h1>
        My Addresses
      </h1>
      <div className="add_button">
        <span>Add New</span>
      </div>
    </div>
    <br />
    <div className="main_addUser">
      <div className="addUser">        
        <h5>Default</h5>
      </div>
      <div className="location">
        <h6>barasat dakbanglo, barasat, kolkata-700128</h6>      
      </div>
      <div className="delete_icon">
        <AiOutlineDelete size={25} className="icon" />
      </div>
    </div>
  </div>
  );
};

export default ProfileContent;
