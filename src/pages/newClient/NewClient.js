import FormInput from "../../component/form_input/formInupt";
import React, { useState } from "react";
import "./NewClient.scss";
import Button from "../../component/buttontype/Button";
import axios from "axios";
function NewClient() {
  const [stateShown, setStateShown] = useState(0);

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_city: "نابلس",
    customer_location: "",
    primary_phone_number: "",
    secondary_phone_number: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async () => {
    // e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9999/admin/customer",
        formData
      );
      console.log("Successfully submitted:", response);
      if (response.status === 200) {
        setStateShown(200);
      }

      console.log("Successfully submitted:", response.data);
    } catch (error) {
      setStateShown(4040);
      console.error("Error submitting form:", error.message);
    }
  };

  const {
    secondary_phone_number,
    primary_phone_number,
    customer_location,
    customer_city,
    customer_name,
  } = formData;

  return (
    <div className="newClient">
      <h1> اضافة زبون جديد </h1>
      <div className="allInputs">
        <FormInput
          labelName="اسم الزبون"
          optionInput={{
            onChange: handleInputChange,
            type: "text",
            required: true,
            value: customer_name,
            name: "customer_name",
          }}
        />

        <FormInput
          labelName="المدينة "
          optionInput={{
            onChange: handleInputChange,
            type: "text",
            required: true,
            value: customer_city,
            name: "customer_city",
          }}
        />

        <FormInput
          labelName="عنوان المحل "
          optionInput={{
            onChange: handleInputChange,
            type: "text",
            required: true,
            value: customer_location,
            name: "customer_location",
          }}
        />

        <FormInput
          labelName="رقم الجوال "
          optionInput={{
            onChange: handleInputChange,
            type: "text",
            required: true,
            value: primary_phone_number,
            name: "primary_phone_number",
          }}
        />

        <FormInput
          labelName="رقم جوال احتياطي "
          optionInput={{
            onChange: handleInputChange,
            type: "text",
            required: false,
            value: secondary_phone_number,
            name: "secondary_phone_number",
          }}
        />
      </div>

      {stateShown === 200 ? (
        <>
          <div className="popup trueReq">تمت اضافة زبون جديد</div>
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
        <Button onClick={handleFormSubmit}> اتمام الاضافة </Button>
      </div>
    </div>
  );
}

export default NewClient;
