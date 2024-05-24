import React from "react";
import "./orders.scss";
import Order from "../order/Order";
function Orders(props) {
  console.log("props.allorder", props.allorder);
  return (
    <div>
      {" "}
      <div className="">
        {props.allorder.map((item, index) => {
          console.log(props.dateselect, "ddddddddddddd", item.order_date_time);
          if (props.dateselect > item.order_date_time)
            return <Order dataOrder={item} index={index} />;
          else return <></>;
        })}
        <br />
      </div>
    </div>
  );
}

export default Orders;
