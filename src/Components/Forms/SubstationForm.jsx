import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { inputCreator, getOptions } from "../../../utils";
import { useForm } from "react-hook-form";

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

export default SubstationForm;
