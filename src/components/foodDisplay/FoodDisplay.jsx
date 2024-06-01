import React, { useContext } from "react";
import "./foodDisplay.css";
import MyContext from "../../context/MyContext";
import FoodItem from "../foodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const context = useContext(MyContext);
  const { food_list } = context;
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {
          //eslint-disable-next-line
          food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })
        }
      </div>
    </div>
  );
};

export default FoodDisplay;
