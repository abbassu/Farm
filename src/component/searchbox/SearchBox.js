// LiveSearchFilter.jsx
import React, { useState } from "react";
import Select from "react-select";
import "./SearchBox.scss";

const options = [
  { value: "111", label: "سوندك" },
  { value: "222", label: "وليد زواتا" },
  { value: "333", label: "ابو عرفة" },
  { value: "444", label: "نزال مخيم العين" },
  { value: "555", label: "ابو صدام " },
];

const SearchBox = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleInputChange = (inputValue) => {
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="live-search-filter">
      <h3>اختر اسم الزبون من القائمة </h3>
      <Select
        value={selectedOption}
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={filteredOptions}
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
