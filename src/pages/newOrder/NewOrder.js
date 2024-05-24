import React, { useEffect, useState, useContext } from "react";
import "./NewOrder.scss";
import FormInput from "../../component/form_input/formInupt";
import SearchBox from "../../component/searchbox/SearchBox";
import Button from "../../component/buttontype/Button";
import { NameUserContext } from "../../allcontext/allcontext";
import axios from "axios";
const defaultObject = {
  order_quantity: "",
  cost_per_item: "",
  total_cost: "",
  amount_paid: "",
  remaining_amount: "",
};
function NewOrder() {
  const [stateShown, setStateShown] = useState(false);

  const names = useContext(NameUserContext);

  const [idCustomer, setIdCustomer] = useState(0);

  const [formData, setFormData] = useState({
    customer_id: idCustomer,
    order_quantity: "",
    cost_per_item: "",
    total_cost: "",
    amount_paid: "",
    remaining_amount: "",
  });

  function setDefault() {
    setFormData({
      ...formData,
      order_quantity: "",
      cost_per_item: "",
      total_cost: "",
      amount_paid: "",
      remaining_amount: "",
    });
    setStateShown(false);
  }
  useEffect(() => {
    setDefault();
  }, [idCustomer]);

  const {
    order_quantity,
    cost_per_item,
    total_cost,
    amount_paid,
    remaining_amount,
  } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleChangePaid(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  useEffect(() => {
    setFormData({ ...formData, remaining_amount: total_cost - amount_paid });
  }, [amount_paid]);

  useEffect(() => {
    setFormData({ ...formData, total_cost: cost_per_item * order_quantity });
  }, [cost_per_item, order_quantity]);

  function setID(id) {
    console.log("ID in neworder", id);
    setIdCustomer(id);
    setFormData({ ...formData, customer_id: id });
  }

  const handleFormSubmit = async () => {
    console.log("form", formData);
    // e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9999/admin/order",
        formData
      );
      console.log("Successfully submitted new order:", response);
      if (response.status === 200) {
        setStateShown(200);
      }

      console.log("Successfully submitted:", response.data);
    } catch (error) {
      setStateShown(4040);
      console.error("Error submitting form:", error.message);
    }
  };
  return (
    <div className="newOrder">
      <h1> اضافة طلبية جديدة </h1>

      <div className="searchbox">
        <SearchBox allCustomer={names} setID={setID} />
      </div>

      <div className="allInputs">
        <FormInput
          labelName=" الكمية "
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: order_quantity,
            name: "order_quantity",
          }}
        />

        <FormInput
          labelName="السعر اليوم"
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: cost_per_item,
            name: "cost_per_item",
          }}
        />

        <FormInput
          labelName="المبلغ كامل "
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: total_cost,
            name: "total_cost",
          }}
        />

        <FormInput
          labelName="المبلغ المدفوع"
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: amount_paid,
            name: "amount_paid",
          }}
        />

        <FormInput
          labelName="المبلغ المتبقي"
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: remaining_amount,
            name: "remaining_amount",
          }}
        />
      </div>
      {stateShown === 200 ? (
        <>
          <div className="popup trueReq">تمت اضافة طلبية جديدة</div>
        </>
      ) : stateShown === 4040 ? (
        <>
          <div className="popup falseReq">
            {" "}
            حدث خطأ ما تأكد من الاتصال بالانترنت{" "}
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="callApi">
        <Button onClick={handleFormSubmit}> اتمام الطلبية </Button>
      </div>
    </div>
  );
}

export default NewOrder;
