import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";

export const shopDataContext = createContext();

function ShopContext({ children }) {
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState("");
  let [showSearch, setShowSearch] = useState(false);
  let { serverUrl } = useContext(authDataContext);
  let currency = "Rs.";
  let delivery_fee = 40;

  const getProducts = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/product/list");
      console.log(result.data);
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  let value = {
    search,
    setSearch,
    showSearch,
    setShowSearch,
    products,
    currency,
    delivery_fee,
    getProducts,
  };
  return (
    <shopDataContext.Provider value={value}>
      {children}
    </shopDataContext.Provider>
  );
}

export default ShopContext;
