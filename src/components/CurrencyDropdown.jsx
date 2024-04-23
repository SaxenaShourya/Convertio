import React from "react";

const CurrencyDropdown = ({ title, currencies, currency, setCurrency }) => {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Select a currency</option>
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CurrencyDropdown;
