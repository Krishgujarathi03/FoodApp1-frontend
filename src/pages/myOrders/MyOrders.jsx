import React, { useContext, useEffect, useState } from "react";
import "./myOrders.css";
import MyContext from "../../context/MyContext";
import axios from "axios";
import { assets } from "../../assests/assets";

const MyOrders = () => {
  const context = useContext(MyContext);
  const { url, token } = context;

  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.post(
      `${url}/api/order/userorders`,
      {},
      { headers: { token } }
    );
    setData(res.data.data);
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
    // eslint-disable-next-line
  }, [token]);
  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    // last item don't need comma
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
