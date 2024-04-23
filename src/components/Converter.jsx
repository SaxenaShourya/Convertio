import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Button,
  Input,
} from "@nextui-org/react";
import axios from "axios";
import { toast } from "react-toastify";

import CurrencyDropdown from "./CurrencyDropdown";

const Convertor = () => {
  // API route for fetching all currencies: api.frankfurter.app/currencies

  const [currencies, setCurrencies] = useState([]);

  const fetchAllCurrencies = async () => {
    await axios
      .get("https://api.frankfurter.app/currencies")
      .then((response) => {
        const data = Object.entries(response.data).map(([code, name]) => ({
          code,
          name,
        }));
        setCurrencies(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Unexpected Internal Server Error!");
      });
  };

  useEffect(() => {
    fetchAllCurrencies();
  }, []);

  return (
    <Card className="w-full mt-3 xl:mt-8">
      <CardHeader className="space-y-5 flex flex-col">
        <div className="w-full flex flex-col space-y-2">
          <CurrencyDropdown title="From" currencies={currencies} />
          <CurrencyDropdown title="To" currencies={currencies} />
        </div>

        <Input type="number" label="Amount" placeholder="0.00" isRequired />
      </CardHeader>
      <Divider />
      <CardBody>
        <Button
          color="primary"
          className="text-xl"
          startContent={<box-icon name="transfer-alt" color="#fff" />}
        >
          Convert
        </Button>
      </CardBody>
    </Card>
  );
};

export default Convertor;
