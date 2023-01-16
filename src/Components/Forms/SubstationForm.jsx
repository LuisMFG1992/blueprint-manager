import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import data from "../../../data/data";
import { useForm } from "react-hook-form";
import { getFileUrl } from "../../../utils";
import { getOptionsFromWatch, inputCreator } from "./utils";

const { Group } = Form;

function SubstationForm() {
  const { register, watch } = useForm();

  const lastSubstationSelected = watch("substation");
  const lastSectionSelected = watch("section");
  const lastEquipmentSelected = watch("equipment");

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

  // function download(url, filename) {
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.target = "_blank";
  //   link.download = url;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  const onSubmit = async (e) => {
    e.preventDefault();
    const filename = `${lastSubstationSelected}_${lastSectionSelected}_${lastEquipmentSelected}`;
    let fileUrl = await getFileUrl(`${filename}.pdf`);
    console.log(fileUrl);
    // download(fileUrl, filename);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Group className="mb-3">
        {inputsScheme.map((element) => {
          return inputCreator(element);
        })}
      </Group>

      <div className="d-flex justify-content-center ">
        <a
          download
          href="https://images.unsplash.com/photo-1591871937631-2f64059d234f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        >
          <Button type="submit" variant="primary">
            Descargar plano
          </Button>
        </a>
      </div>
    </Form>
  );
}

export default SubstationForm;
