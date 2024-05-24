// LiveSearchFilter.jsx
import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./SearchBox.scss";
import axios from "axios";
const options = [
  { value1: "111", label1: "سوندك" },
  { value2: "222", label2: "وليد زواتا" },
  { value3: "333", label3: "ابو عرفة" },
  { value4: "444", label4: "نزال مخيم العين" },
  { value5: "555", label5: "ابو صدام " },
];

const SearchBox = (props) => {
  const [customerData, setCustomerData] = useState([]);

  // State to store the transformed options for the Select component

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get("http://localhost:9999/admin/customers-names")
      .then((response) => {
        // Assuming the API response has a structure like { message, customers }
        const { customers } = response.data;

        // Update the state with the fetched data
        // setCustomerData(customers);

        // Transform data for the Select options
        const transformedOptions = customers.map((customer) => ({
          label: customer.customer_name,
          value: customer.customer_id.toString(), // Assuming you want the customer_id as a string
        }));

        console.log("transformedOptions", transformedOptions);
        // Update the state with the transformed options
        setCustomerData(transformedOptions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [selectedOption, setSelectedOption] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState(customerData);

  const handleInputChange = (inputValue) => {
    const filtered = customerData.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleChange = (selectedOption) => {
    props.setID(selectedOption.value);
    console.log("seelected poition", selectedOption);
    setSelectedOption(selectedOption);
  };

  return (
    <div className="live-search-filter">
      <h3>اختر اسم الزبون من القائمة </h3>
      <Select
        value={selectedOption}
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={customerData}
        isSearchable
        className="custom-select"
      />
      {/* <div>
        {selectedOption && (
          <div>
            <h4>الزبون الذي تم اختياره</h4>
            <p>{selectedOption.label}</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default SearchBox;
