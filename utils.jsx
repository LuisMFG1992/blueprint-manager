import { ref, getDownloadURL } from "firebase/storage";
import { db } from "./src/FireStore/config";
import { Form } from "react-bootstrap";
import { dataBase, equipments } from "./inputsSchema";

export const downLoadFirebaseStorage = (fileName) => {
  getDownloadURL(ref(db, fileName))
    .then((url) => {
      console.log(url);
      return url;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const substationOptions = dataBase.map((element) => {
  return (
    <option key={element.id} value={element.id}>
      {element.id} - {element.substation}
    </option>
  );
});

export const equipmentsOptions = equipments.map((element) => {
  return (
    <option key={element.value} value={element.value}>
      {element.name}
    </option>
  );
});

export const inputCreator = ({
  register,
  label,
  name,
  isRequired,
  placeholder,
  options = [],
}) => {
  /* 
  options = [ 
    { 
      value: string,
      title: string
    },
    ...
  ] 
  */

  const { Label, Select } = Form;

  return (
    <div key={name}>
      <Label>{label}</Label>
      <Select {...register(name)} required={isRequired}>
        <option value={""}>{placeholder}</option>
        {options.map((element) => {
          return (
            <option key={element.value} value={element.value}>
              {element.title}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

export const getOptions = (watch) => {
  if (watch === undefined) {
    return [];
  }

  if (watch === null) {
    const substationsOptions = dataBase.map((element) => {
      return { value: element.id, title: element.substation };
    });
    return substationsOptions;
  }

  if (watch !== null) {
    const selectedSubstation = dataBase.find((element) => element.id == watch);

    const sectionOptions =
      selectedSubstation?.sections?.map((element) => {
        return {
          value: element,
          title: `Secc. ${element}`,
        };
      }) || equipments;
    return sectionOptions;
  }
};

export const HELPER = {
  substation: "substation",
  section: "section",
  equipment: "equipment",
};
