import React, { useState } from "react";
import FormInput from "../../component/form_input/formInupt";
import "./clientPage.scss";
import Order from "../../component/order/Order";
import SearchBox from "../../component/searchbox/SearchBox";
function ClientPage() {
  const [nameClient, setNameClient] = useState("");

  function handleChange(event) {
    setNameClient(event.target.value);
  }

  const [orderObject, setOrderObject] = useState({
    name: "   وليد زواتا  ",
    allQuantity: 20,
    allCosts: 30000,
    costPaid: 200,
    contremaining: 100,
  });

  const { name, allQuantity, allCosts, costPaid, contremaining } = orderObject;

  return (
    <div className="clientPage">
      <h1> معلومات الزبائن </h1>

      {/* <div className="forminput">
        <FormInput
          labelName="اسم الزبون"
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: nameClient,
            name: "nameClient",
          }}
        />
      </div> */}
      <div className="searchbox">
        <SearchBox />
      </div>

      <div className="clientInformation">
        <div className="fieldInformation">
          <span className="typeOf"> اسم الزبون </span>
          <span className="valueOf">{name} </span>
        </div>

        <div className="fieldInformation">
          <span className="typeOf"> البضاعة المباعة </span>
          <span className="valueOf">{allQuantity} </span>
        </div>

        <div className="fieldInformation">
          <span className="typeOf"> المبلغ الكامل </span>
          <span className="valueOf">{allCosts} </span>
        </div>

        <div className="fieldInformation">
          <span className="typeOf"> المبلغ المدفوع </span>
          <span className="valueOf">{costPaid} </span>
        </div>

        <div className="fieldInformation">
          <span className="typeOf"> المبلغ المتبقي </span>
          <span className="valueOf">{contremaining} </span>
        </div>
      </div>

      <div className="allOrder">
        <Order num={1} />
        <br />
        <Order num={2} />
      </div>
    </div>
  );
}

export default ClientPage;
