import FormInput from "../../component/form_input/formInupt";
import React, { useState } from "react";
import "./NewClient.scss";
function NewClient() {
  const [formData, setFormData] = useState({
    nameClient: "",
    address: "",
    phone: "",
  });
  const { phone, nameClient, address } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="newClient">
      <h1> اضافة زبون جديد </h1>
      <div className="allInputs">
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

        <FormInput
          labelName="عنوان المحل "
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: address,
            name: "address",
          }}
        />

        <FormInput
          labelName="رقم الجوال "
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: true,
            value: phone,
            name: "phone",
          }}
        />

        <FormInput
          labelName="رقم جوال احتياطي "
          optionInput={{
            onChange: handleChange,
            type: "text",
            required: false,
            value: phone,
            name: "phone",
          }}
        />
      </div>
    </div>
  );
}

export default NewClient;
