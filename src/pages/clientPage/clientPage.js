import React, { useState, useEffect, useContext } from "react";
import FormInput from "../../component/form_input/formInupt";
import "./clientPage.scss";
import Order from "../../component/order/Order";
import SearchBox from "../../component/searchbox/SearchBox";
import axios from "axios";
import { NameUserContext } from "../../allcontext/allcontext";
import Orders from "../../component/orders/orders";
import DateP from "../../component/date/Date";
function ClientPage() {
  const [orders, setOrders] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loading1, setLoading1] = useState(true);
  const [error1, setError1] = useState(null);
  const [dateOrder, setDateOrder] = useState("");
  const [idCustomer, setIdCustomer] = useState(0);

  const names = useContext(NameUserContext);
  console.log("in client page", names.allName);

  const {
    customer_name,
    amountPaidSum,
    remainingAmountSum,
    totalCostSum,
    totalOrderSum,
  } = customerInfo;

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        console.log("startorderrequest");
        const response = await axios.get(
          `http://localhost:9999/admin/order?id=${idCustomer}`
        );
        console.log("endorderrequest");

        console.log("response", response.data.orders);
        const allOrder = response.data.orders;
        console.log("allOrder", allOrder);
        setOrders(allOrder);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const fetchCustomerInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9999/admin/customer-info?id=${idCustomer}`
        );
        console.log("customers", response.data.customers[0]);
        const customerInfov = response.data.customers[0];
        setCustomerInfo(customerInfov);
        setLoading1(false);
      } catch (error) {
        setError1(error.message);
        setLoading1(false);
      }
    };

    const fetchCustomerFromSelectedDate = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9999/admin/order-period?id=${idCustomer}&start_date=${dateOrder}`
        );
        console.log("customers", response.data.customers[0]);
        const customerInfov = response.data.customers[0];
        setCustomerInfo(customerInfov);
        setLoading1(false);
      } catch (error) {
        setError1(error.message);
        setLoading1(false);
      }
    };

    fetchCustomerInfo();
    fetchOrderDetails();
  }, [idCustomer]); // Empty dependency array means this effect runs once after the initial render

  // if (loading) {
  //   return <p>Loading Orders ...</p>;
  // }

  // if (error) {
  //   return <p>Error When Fetching Orders: {error}</p>;
  // }

  // if (loading1) {
  //   return <p>Loading Customer Information ...</p>;
  // }

  // if (error1) {
  //   return (
  //     <p>
  //       Error When Fetching
  //       <br />
  //       Customer Information: {error}
  //     </p>
  //   );
  // }

  const fetchCustomerFromSelectedDate = async () => {
    console.log(idCustomer, "-", dateOrder);
    try {
      console.log("sss");

      const response = await axios.get(
        `http://localhost:9999/admin/order-period?id=${idCustomer}&start_date=${dateOrder}`
      );
      console.log("customers with date", response.data.customers[0]);
      // const customerInfov = response.data.customers[0];
      // setCustomerInfo(customerInfov);
      // setLoading1(false);
    } catch (error) {
      // setError1(error.message);
      // setLoading1(false);
    }
  };

  const fetchCustomerFromSelectedDatejjjj = async () => {
    console.log(idCustomer, "-", dateOrder);
    try {
      console.log("sss");

      const response = await axios.get(
        `http://localhost:9999/admin/pdf?id=${idCustomer}`
      );
      console.log("customers with date]");
      // const customerInfov = response.data.customers[0];
      // setCustomerInfo(customerInfov);
      // setLoading1(false);
    } catch (error) {
      // setError1(error.message);
      // setLoading1(false);
    }
  };

  function setID(id) {
    console.log("ID", id);
    setIdCustomer(id);
    // setOrders([]);
  }

  function setDate(date) {
    console.log("ggggggggggggggggggggggggg", date);
    setDateOrder(date);
  }

  return (
    <div className="clientPage">
      <h1> معلومات الزبون </h1>

      <div className="searchbox">
        <SearchBox allCustomer={names} setID={setID} />
      </div>

      <DateP setDate={setDate} />

      <div className="clientInformation">
        <div className="fieldInformation">
          <span className="typeOf"> اسم الزبون </span>
          <span className="valueOf">{customer_name} </span>
        </div>

        <div className="fieldInformation">
          <span className="typeOf"> البضاعة المباعة </span>
          <span className="valueOf">
            <span>{totalOrderSum} </span> <span> كرتونة </span>
          </span>
        </div>

        <div className="fieldInformation">
          <span className="typeOf"> المبلغ الكامل </span>
          <span className="valueOf">
            <span>{totalCostSum} </span> <span> شيكل </span>
          </span>
        </div>

        <div className="fieldInformation">
          <span className="typeOf"> المبلغ المدفوع </span>
          <span className="valueOf">
            <span>{amountPaidSum} </span> <span> شيكل </span>
          </span>
        </div>

        <div className="fieldInformation">
          <span className="typeOf"> المبلغ المتبقي </span>
          <span className="valueOf">
            {" "}
            <span>{remainingAmountSum} </span> <span> شيكل </span>{" "}
          </span>
        </div>
      </div>
      {/* 
      <button onClick={fetchCustomerFromSelectedDatejjjj}>
        {" "}
        give with date
      </button> */}

      <div className="allOrder">
        {/* {orders.map((item, index) => {
          return <Order dataOrder={item} index={index} />;
        })}
        <br /> */}
        <Orders allorder={orders} dateselect={dateOrder} />
      </div>
    </div>
  );
}

export default ClientPage;
