import { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const { Check, Text, Control, Label, Group, Select } = Form;

function SubstationForm() {
  const [substationInputValue, setSubstationInputValue] =
    useState("Subestación");
  const [sectionInputValue, setSectionInputValue] = useState("Sección");

  const [equipmentInputValue, setEquipmentInputValue] = useState("Equipo");

  const SelectedValues = {
    substation: substationInputValue,
    section: sectionInputValue,
    equipment: equipmentInputValue,
  };

  const substationInputHandler = (e) => {
    setSubstationInputValue(e.target.value);
  };

  const sectionInputHandler = (e) => {
    setSectionInputValue(e.target.value);
  };

  const equipmentInputHandler = (e) => {
    setEquipmentInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(SelectedValues);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Group className="mb-3" controlId="formBasicEmail">
        <Label>Substatión </Label>
        <Select value={substationInputValue} onChange={substationInputHandler}>
          <option value={"colegiales"}>Colegiales</option>
          <option value={"coghlan"}>Coghlan</option>
        </Select>
      </Group>
      <Group className="mb-3" controlId="formBasicEmail">
        <Label>Sección </Label>
        <Select value={sectionInputValue} onChange={sectionInputHandler}>
          <option value={"1"}>Secc. 1</option>
          <option value={"2"}>Secc. 2</option>
          <option value={"3"}>Secc. 3</option>
          <option value={"4"}>Secc. 4</option>
        </Select>
      </Group>
      <Group className="mb-3" controlId="formBasicEmail">
        <Label>Equipo </Label>
        <Select value={equipmentInputValue} onChange={equipmentInputHandler}>
          <option value={"transformador"}>Transformador</option>
          <option value={"interruptor"}>Interruptor</option>
          <option value={"acople"}>Acople</option>
          <option value={"medicion"}>Medición</option>
        </Select>
      </Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {substationInputValue} {sectionInputValue} {equipmentInputValue}
    </Form>
  );
}

export default SubstationForm;
