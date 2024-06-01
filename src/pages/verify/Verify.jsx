import React, { useContext, useEffect } from "react";
import "./verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import MyContext from "../../context/MyContext";
import axios from "axios";

const Verify = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const context = useContext(MyContext);
  const { url } = context;

  const verifyPayment = async () => {
    const res = await axios.post(`${url}/api/order/verify`, {
      success,
      orderId,
    });
    if (res.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
