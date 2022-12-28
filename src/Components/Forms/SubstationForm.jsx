import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { dataBase, equipments } from "../../../utils";
import InputSelect from "../Inputs/InputSelect";
import { downLoadFirebaseStorage } from "../../../utils";

const { Group } = Form;

function SubstationForm() {
  const [formValues, setFormValues] = useState({
    substation: "",
    section: "",
    equipment: "",
  });

  const inputValueHandler = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    downLoadFirebaseStorage(
      `${formValues.substation}/${formValues.section}/${formValues.substation}_${formValues.section}_${formValues.equipment}.pdf`
    );
  };

  const isAnyInputNotSelected = () => {
    let anyInputNotSelected = true;

    if (
      formValues.substation !== "" &&
      formValues.section !== "" &&
      formValues.equipment !== ""
    ) {
      anyInputNotSelected = false;
    }
    return anyInputNotSelected;
  };

  const substationOptions = dataBase.map((element) => {
    return (
      <option key={element.id} value={element.id}>
        {element.id} - {element.substation}
      </option>
    );
  });

  const equipmentOptions =
    formValues.section &&
    equipments.map((element) => {
      return (
        <option key={element.value} value={element.value}>
          {element.name}
        </option>
      );
    });

  const sectionOptions =
    formValues.substation &&
    dataBase
      .find((element) => element.id === formValues.substation)
      .sections.map((element) => (
        <option key={element} value={element}>
          Secc. {element}
        </option>
      ));

  return (
    <Form onSubmit={submitHandler}>
      <Group className="mb-3">
        <InputSelect
          label="Substatión"
          name="substation"
          inputValueHandler={inputValueHandler}
          placeholder="Elige una subestación"
          dinamicOptions={substationOptions}
        />
      </Group>

      <Group className="mb-3">
        <InputSelect
          label="Sección"
          name="section"
          inputValueHandler={inputValueHandler}
          placeholder="Elige una subestación"
          dinamicOptions={sectionOptions}
        />
      </Group>

      <Group className="mb-3">
        <InputSelect
          label="Equipo"
          name="equipment"
          inputValueHandler={inputValueHandler}
          placeholder="Elige un equipo"
          dinamicOptions={equipmentOptions}
        />
      </Group>

      <div className="d-flex justify-content-center ">
        <Button
          type="submit"
          variant={isAnyInputNotSelected() ? "secondary" : "primary"}
          disabled={isAnyInputNotSelected()}
        >
          Descargar plano
        </Button>
      </div>
    </Form>
  );
}

export default SubstationForm;
