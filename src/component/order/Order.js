import React, { useState } from "react";
import "./Order.scss";
function Order(props) {
  const [orderObject, setOrderObject] = useState({
    date: "22/4/2023",
    day: "الاحد",
    quantity: 20,
    priceToday: 15,
    allCosts: 300,
    costPaid: 200,
    contremaining: 100,
  });

  const { date, day, quantity, priceToday, allCosts, costPaid, contremaining } =
    orderObject;

  return (
    <div className="orderPage">
      <div className="order">
        <h2> طلبية رقم {props.num} </h2>
        <div className="fieldOrder">
          <span className="typeOf"> التاريخ </span>
          <span className="valueOf">{date}</span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> اليوم </span>
          <span className="valueOf">{day} </span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> الكمية </span>
          <span className="valueOf">{quantity} </span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> السعر اليوم </span>
          <span className="valueOf"> {priceToday} </span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> المبلغ كامل </span>
          <span className="valueOf"> {allCosts} </span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> المبلغ المدفوع </span>
          <span className="valueOf"> {costPaid} </span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> المبلغ المتبقي </span>
          <span className="valueOf"> {contremaining} </span>
        </div>
      </div>
    </div>
  );
}

export default Order;
