import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Inputs from "../Inputs/Inputs";

const dataBase = [
  { id: "041", substation: "041 -  Libertador", sections: [1, 2], acoples: 1 },
  { id: "044", substation: "044 - P. Nuevo", sections: [1, 2], acoples: 1 },
  {
    id: "046",
    substation: "046 -  Colegiales",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "047",
    substation: "047 -  Agronomía",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "050", substation: "050 -  V. López", sections: [1, 2], acoples: 1 },
  {
    id: "051",
    substation: "051 - Matheu",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "052",
    substation: "052 -  Aniversario",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "053",
    substation: "053 - Victoria",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "054",
    substation: "054 -  Migueletes",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "055", substation: "055 - Munro", sections: [1, 2, 3, 4], acoples: 2 },
  { id: "056", substation: "056 -  Boulogne", sections: [1, 2], acoples: 1 },
  {
    id: "057",
    substation: "057 -  Edison",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "058",
    substation: "058 -  Talar",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "059",
    substation: "059 - Benavídez",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "061",
    substation: "061 -  Castelar",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "062", substation: "062 - Merlo", sections: [1, 2, 3, 4], acoples: 2 },
  {
    id: "063",
    substation: "063 - Casanova",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "064",
    substation: "064 - Luzuriaga",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "065", substation: "065 - Matanza", sections: [1, 2], acoples: 1 },
  {
    id: "066",
    substation: "066 - R. Mejía",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "067",
    substation: "067 -  Morón",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "068",
    substation: "068 - Malaver",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "069", substation: "069 - Caseros", sections: [1, 2], acoples: 1 },
  { id: "110", substation: "110 - Coghlan", sections: [1, 2], acoples: 1 },
  {
    id: "111",
    substation: "111 - Güemes",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "114", substation: "114 - Vidal", sections: [1, 2, 3, 4], acoples: 2 },
  { id: "129", substation: "129 - Aguas", sections: [1, 2, 3], acoples: 1 },
  {
    id: "133",
    substation: "133 -  Austria",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "136",
    substation: "136 - Urquiza",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "137",
    substation: "137 -  Saavedra",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "151", substation: "151 -  Ford", sections: [1, 2, 3, 4], acoples: 2 },
  { id: "152", substation: "152 -  San Isidro", sections: [1, 2], acoples: 1 },
  { id: "153", substation: "153 - Tigre", sections: [1, 2], acoples: 1 },
  {
    id: "154",
    substation: "154 -  Maschwitz",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "155", substation: "155 -  V. Adelina", sections: [1, 2], acoples: 1 },
  { id: "156", substation: "156 - Nordelta", sections: [1, 2], acoples: 1 },
  { id: "157", substation: "157 - Bancalari", sections: [1, 2], acoples: 1 },
  { id: "158", substation: "158 - Pilar", sections: [1, 2], acoples: 1 },
  {
    id: "159",
    substation: "159 -  Nogués",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "160", substation: "160 - Rodríguez", sections: [], acoples: 0 },
  { id: "161", substation: "161 - Sevel", sections: [], acoples: 0 },
  {
    id: "162",
    substation: "162 -  Tapiales",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "163", substation: "163 - La Reja", sections: [1, 2], acoples: 1 },
  {
    id: "164",
    substation: "164 - S. Justo",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "165", substation: "165 - San Miguel", sections: [1, 2], acoples: 1 },
  { id: "166", substation: "166 -  Hurlingham", sections: [1, 2], acoples: 1 },
  {
    id: "167",
    substation: "167 -  Ciudadela",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "168",
    substation: "168 -   G. Catán",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "169",
    substation: "169 - Malvinas",
    sections: [1, 2, 3, 4, 5, 6, 7],
    acoples: 4,
  },
  { id: "221", substation: "221 -  N. Puerto", sections: [], acoples: 0 },
  { id: "235", substation: "235 - Newbery", sections: [1, 2], acoples: 1 },
  { id: "237", substation: "237 -  Melo", sections: [1, 2, 3, 4], acoples: 2 },
  { id: "250", substation: "250 -   M. Benz", sections: [1, 2], acoples: 1 },
  { id: "251", substation: "251 - Del Viso", sections: [1, 2], acoples: 1 },
  {
    id: "252",
    substation: "252 - Tortuguitas",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "253", substation: "253 - El Cazador", sections: [1, 2], acoples: 1 },
  {
    id: "254",
    substation: "254 - J. C. Paz",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "255", substation: "255 -  Corralon", sections: [1, 2], acoples: 1 },
  {
    id: "256",
    substation: "256 - Catonas",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "257", substation: "257 -  Manzone", sections: [1, 2], acoples: 1 },
  {
    id: "258",
    substation: "258 -  P. del Rey",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  {
    id: "260",
    substation: "260 - Derqui",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "261", substation: "261 -  Pontevedra", sections: [1, 2], acoples: 1 },
  {
    id: "262",
    substation: "262 - Rotonda",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "264", substation: "264 -  Ituzaingó", sections: [1, 2], acoples: 1 },
  { id: "265", substation: "265 - Muñíz", sections: [1, 2], acoples: 1 },
  {
    id: "266",
    substation: "266 -  Suárez",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "268", substation: "268 -   Sta. Rosa", sections: [], acoples: 0 },
  { id: "269", substation: "269 - Las Heras", sections: [1, 2], acoples: 1 },
  { id: "272", substation: "272 - Altos", sections: [1, 2], acoples: 1 },
  { id: "351", substation: "351 - S. Fernando", sections: [1, 2], acoples: 1 },
  { id: "352", substation: "352 -  Tecnópolis", sections: [1, 2], acoples: 1 },
  {
    id: "353",
    substation: "353 - El Pino",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "357", substation: "357 -  Parque", sections: [1, 2], acoples: 1 },
  {
    id: "363",
    substation: "363 - M. Paz",
    sections: [1, 2, 3, 4],
    acoples: 2,
  },
  { id: "365", substation: "365 - Pantanosa", sections: [1, 2], acoples: 1 },
  { id: "366", substation: "366 - S. Alberto", sections: [1, 2], acoples: 1 },
  { id: "369", substation: "369 - Zappalorto", sections: [], acoples: 0 },
  {
    id: "CD0",
    substation: "CD004 - Escobar",
    sections: [1, 2, 3],
    acoples: 1,
  },
];

const equipments = ["Transformador", "Interruptor", "Acople", "Medición"];

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
    console.log(formValues);
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
        {element.substation}
      </option>
    );
  });

  const equipmentOptions =
    formValues.section &&
    equipments.map((element) => <option key={element}>{element}</option>);

  const sectionOptions =
    formValues.substation &&
    dataBase
      .find((element) => element.id === formValues.substation)
      .sections.map((element) => (
        <option key={element} value={element}>
          Sección {element}
        </option>
      ));

  return (
    <Form onSubmit={submitHandler}>
      <Group className="mb-3" controlId="formBasicEmail">
        <Inputs
          label="Substatión"
          name="substation"
          inputValueHandler={inputValueHandler}
          placeholder="Elige una subestación"
          dinamicOptions={substationOptions}
        />
      </Group>

      <Group className="mb-3" controlId="formBasicEmail">
        <Inputs
          label="Sección"
          name="section"
          inputValueHandler={inputValueHandler}
          placeholder="Elige una subestación"
          dinamicOptions={sectionOptions}
        />
      </Group>

      <Group className="mb-3" controlId="formBasicEmail">
        <Inputs
          label="Equipo"
          name="equipment"
          inputValueHandler={inputValueHandler}
          placeholder="Elige un equipo"
          dinamicOptions={equipmentOptions}
        />
      </Group>

      <Button
        type="submit"
        variant={isAnyInputNotSelected() ? "secondary" : "primary"}
        disabled={isAnyInputNotSelected()}
      >
        Descargar
      </Button>
    </Form>
  );
}

export default SubstationForm;
