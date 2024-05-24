import React, { useEffect, useState } from "react";
import "./Order.scss";
function Order(props) {
  const [orderObject, setOrderObject] = useState({});
  const [idOrder, setIdOrder] = useState(props.dataOrder.order_id);

  // console.log("outside", props.dataOrder);
  // useEffect(() => {
  //   console.log("vvvvvvvvvvv", props.dataOrder);
  //   setOrderObject(props.dataOrder);
  // }, [idOrder]);

  const {
    order_date_time,
    day,
    order_quantity,
    cost_per_item,
    total_cost,
    amount_paid,
    remaining_amount,
  } = orderObject;

  return (
    <div className="orderPage">
      <div className="order">
        <h2> طلبية رقم {props.index + 1} </h2>
        <div className="fieldOrder">
          <span className="typeOf"> التاريخ </span>
          <span className="valueOf">{props.dataOrder?.order_date_time}</span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> اليوم </span>
          <span className="valueOf andoff">{props.dataOrder?.dayName} </span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> الكمية </span>
          <span className="valueOf">
            {" "}
            <div>كرتونة</div> <div>{props.dataOrder?.order_quantity}</div>
          </span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> السعر اليوم </span>
          <span className="valueOf">
            <div>شيكل</div>
            <div>{props.dataOrder?.cost_per_item}</div>
          </span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> المبلغ كامل </span>
          <span className="valueOf">
            <div>شيكل</div>
            <div> {props.dataOrder?.total_cost} </div>
          </span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> المبلغ المدفوع </span>
          <span className="valueOf">
            <div>شيكل</div>
            <div> {props.dataOrder?.amount_paid} </div>
          </span>
        </div>

        <div className="fieldOrder">
          <span className="typeOf"> المبلغ المتبقي </span>
          <span className="valueOf">
            <div>شيكل</div>
            <div> {props.dataOrder?.remaining_amount} </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Order;
