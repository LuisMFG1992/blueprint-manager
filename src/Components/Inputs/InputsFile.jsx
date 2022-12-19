import React from "react";
import { uploadFiles } from "../../FireStore/config";

const Inputs = ({
  label,
  name,
  inputValueHandler,
  placeholder,
  dinamicOptions,
}) => {
  const { Label, Select } = Form;

  return (
    <>
      <Label>{label} </Label>
      <Select name={name} onChange={inputValueHandler} required={true}>
        <option value={""}>{placeholder}</option>
        {dinamicOptions}
      </Select>
    </>
  );
};

export default Inputs;
