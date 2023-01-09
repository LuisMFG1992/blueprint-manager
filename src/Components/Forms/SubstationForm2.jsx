import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  dataBase,
  equipmentsOptions,
  inputCreator,
  getOptions,
  substationOptions,
} from "../../../utils";
import InputSelect from "../Inputs/InputSelect";
import { useForm } from "react-hook-form";

const { Group } = Form;

function SubstationForm2() {
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
      options: getOptions(null),
    },
    {
      register,
      label: "Sección",
      name: "section",
      isRequired: true,
      placeholder: "Elige una sección",
      options: getOptions(lastSubstationSelected),
    },
    {
      register,
      label: "Equipos",
      name: "equipment",
      isRequired: true,
      placeholder: "Elige un equipo",
      options: getOptions(lastSectionSelected),
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

export default SubstationForm2;
