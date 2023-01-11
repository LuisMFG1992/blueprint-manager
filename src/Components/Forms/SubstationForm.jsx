import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import data from "../../../data/data";
import { useForm } from "react-hook-form";
import { getOptionsFromWatch, inputCreator } from "./utils";

const { Group } = Form;

function SubstationForm() {
  const { register, handleSubmit, watch } = useForm();

  const lastSubstationSelected = watch("substation");
  const lastSectionSelected = watch("section");

  const inputsScheme = [
    {
      register,
      label: "Substación",
      name: "substation",
      isRequired: true,
      placeholder: "Elige una subestación",
      options: getOptionsFromWatch(null, data, undefined),
    },
    {
      register,
      label: "Sección",
      name: "section",
      isRequired: true,
      placeholder: "Elige una sección",
      options: getOptionsFromWatch(lastSubstationSelected, data, "sections"),
    },
    {
      register,
      label: "Equipos",
      name: "equipment",
      isRequired: true,
      placeholder: "Elige un equipo",
      options: getOptionsFromWatch(lastSectionSelected, data, undefined),
    },
  ];

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>
      <Group className="mb-3">
        {inputsScheme.map((element) => {
          return inputCreator(element);
        })}
      </Group>

      <div className="d-flex justify-content-center ">
        <Button type="submit" variant="primary">
          Descargar plano
        </Button>
      </div>
    </Form>
  );
}

export default SubstationForm;
