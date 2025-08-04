import React from "react";
import Title from "../components/Title";
import { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Cart() {
  const { products, currency, cartItem, updateQuantity } =
    useContext(shopDataContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);
  return (
    <div className="w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]">
      <div className="h-[8%] w-[100%] text-center mt-[80px]">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div key={index} className="w-[100%] h-[10%] border-t border-b">
              <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative">
                <img
                  className="w-[100px] h-[100px] rounded-md"
                  src={productData.image1}
                  alt=""
                />
                <div className="flex items-start justify-center flex-col gap-[10px]">
                  <p className="md:text-[25px] text-[20px] text-[#f3f9fc]">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-[20px]">
                    <p className="text-[20px] text-[#aaf4e7]">
                      {currency} {productData.price}
                    </p>
                    <p className="w-[40px] h-[40px] text-[16px] text-[white] bg-[#518080b4] rounded-md mt-[5px] flex items-center justify-center border-[1px] border-[#9ff9f9]">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
