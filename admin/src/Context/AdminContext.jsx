import React, { createContext, useState, useContext, useEffect } from "react";
import { authDataContext } from "./AuthContext.jsx";
import axios from "axios";

export const adminDataContext = createContext();

function AdminContext({ children }) {
  let [adminData, setAdminData] = useState(null);
  let { serverUrl } = useContext(authDataContext);

  const getAdmin = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/getadmin", {
        withCredentials: true,
      });
      setAdminData(result.data);
      console.log(result.data);
    } catch (error) {
      setAdminData(null);
      console.log(error);
    }
  };
  useEffect(() => {
    getAdmin();
  }, []);

  let value = {
    serverUrl,
    adminData,
    setAdminData,
    getAdmin,
  };
  return (
    <div>
      <adminDataContext.Provider value={value}>
        {children}
      </adminDataContext.Provider>
    </div>
  );
}

export default AdminContext;
