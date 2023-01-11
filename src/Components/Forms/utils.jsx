import { Form } from "react-bootstrap";
import { equipments } from "../../../data/constants";

export const getOptionsFromWatch = (
  watch,
  array,
  keyElement,
  fallback = equipments
) => {
  if (watch === undefined) {
    return [];
  }

  if (watch === null) {
    const mappedOptions = array.map((element) => {
      return { value: element.id, title: element.substation };
    });
    return mappedOptions;
  }

  if (watch !== null) {
    const mappedOptions = array.find((element) => element.id == watch);

    const mappedOptionsFromKey =
      mappedOptions?.[keyElement]?.map((element) => {
        return {
          value: element,
          title: `Secc. ${element}`,
        };
      }) || fallback;
    return mappedOptionsFromKey;
  }
};

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
