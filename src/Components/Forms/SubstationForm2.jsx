import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { equipmentsOptions, substationOptions } from "../../../utils";
import InputSelect from "../Inputs/InputSelect";
import { useForm } from "react-hook-form";

const { Group } = Form;

function SubstationForm2() {
  const { register, handleSubmit, watch } = useForm();

  const lastSubstationSelected = watch("substation");
  const lastSectionSelected = watch("section");

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>
      <Group className="mb-3">
        <InputSelect
          register={register}
          label="Substatión"
          name="substation"
          placeholder="Elige una subestación"
          dinamicOptions={substationOptions}
        />
      </Group>

      <Group className="mb-3">
        <InputSelect
          register={register}
          label="Sección"
          name="section"
          placeholder="Elige una sección"
          dinamicOptions={lastSubstationSelected}
        />
      </Group>

      <Group className="mb-3">
        <InputSelect
          register={register}
          label="Equipo"
          name="equipment"
          placeholder="Elige un equipo"
          conditional={lastSectionSelected}
          dinamicOptions={equipmentsOptions}
        />
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
