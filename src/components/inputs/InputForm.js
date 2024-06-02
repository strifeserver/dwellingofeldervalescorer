import React, { useState } from "react";
function InputForm({
  type = "text",
  name,
  id,
  classes,
  placeholder,
  value = "",
  label = "",
  onChange,
}) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 "
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={id}
        className={`rounded-md border-0 py-1.5 pl-7 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${classes}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
}

export default InputForm;
