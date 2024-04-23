import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Button,
  Input,
} from "@nextui-org/react";

import CurrencyDropdown from "./CurrencyDropdown";

const Convertor = () => {
  return (
    <Card className="w-full mt-3 xl:mt-8">
      <CardHeader className="space-y-5 flex flex-col">
        <div className="w-full flex flex-col space-y-2">
          <CurrencyDropdown title="From" />
          <CurrencyDropdown title="To" />
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
