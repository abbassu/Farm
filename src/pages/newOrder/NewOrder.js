import React, { useEffect, useState } from "react";
import "./NewOrder.scss";
import FormInput from "../../component/form_input/formInupt";
import SearchBox from "../../component/searchbox/SearchBox";
import Button from "../../component/buttontype/Button";
function NewOrder() {
  const [formData, setFormData] = useState({
    date: "",
    day: "",
    quantity: "",
    priceToday: "",
    allCosts: "",
    costPaid: "",
    contremaining: "",
  });
  const { quantity, priceToday, allCosts, costPaid, contremaining } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleChangePaid(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  useEffect(() => {
    setFormData({ ...formData, contremaining: allCosts - costPaid });
  }, [costPaid]);

  useEffect(() => {
    setFormData({ ...formData, allCosts: priceToday * quantity });
  }, [priceToday, quantity]);

  return (
    <div className="newOrder">
      <h1> اضافة طلبية جديدة </h1>

      <div className="searchbox">
        <SearchBox />
      </div>

      <div className="allInputs">
        <FormInput
          labelName=" الكمية "
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: quantity,
            name: "quantity",
          }}
        />

        <FormInput
          labelName="السعر اليوم"
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: priceToday,
            name: "priceToday",
          }}
        />

        <FormInput
          labelName="المبلغ كامل "
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: allCosts,
            name: "allCosts",
          }}
        />

        <FormInput
          labelName="المبلغ المدفوع"
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: costPaid,
            name: "costPaid",
          }}
        />

        <FormInput
          labelName="المبلغ المتبقي"
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: contremaining,
            name: "contremaining",
          }}
        />
      </div>
      <div className="callApi">
        <Button> اتمام الطلبية </Button>
      </div>
    </div>
  );
}

export default NewOrder;
