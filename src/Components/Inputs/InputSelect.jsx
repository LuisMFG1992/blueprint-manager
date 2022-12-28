import React from "react";
import { Form } from "react-bootstrap";

const InputSelect = ({
  label,
  name,
  inputValueHandler = () => {},
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

export default InputSelect;
