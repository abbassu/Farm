import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";
export const NameUserContext = createContext();

export const PopupCustomerProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [allName, setAllName] = useState(false);

  useEffect(() => {
    const fetchCustomerInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9999/admin/customers-names"
        );
        console.log("names customers", response.data.customers);
        const allCustomer = response.data.customers;
        const newArray = allCustomer.map(({ customer_id, customer_name }) => ({
          value: customer_id,
          label: customer_name,
        }));
        setAllName(newArray);
      } catch (error) {
        setError(true);
      }
    };

    fetchCustomerInfo();
    if (error) {
      return <p> هناك مشكلة تأكد من اتصالك بالانترنت</p>;
    }
  }, []);

  const value = { allName };

  return (
    <NameUserContext.Provider value={value}>
      {children}
    </NameUserContext.Provider>
  );
};
