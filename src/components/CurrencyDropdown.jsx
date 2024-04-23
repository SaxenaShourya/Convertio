import React from "react";

const CurrencyDropdown = ({ title }) => {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <select className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary">
        <option value="">Select a currency</option>
        {/* Currencies */}
      </select>
    </>
  );
};

export default CurrencyDropdown;
