// import React from "react";
// import { Form } from "react-bootstrap";

// const InputSelect = ({
//   label,
//   name,
//   inputValueHandler = () => {},
//   placeholder,
//   dinamicOptions,
// }) => {
//   const { Label, Select } = Form;

//   return (
//     <>
//       <Label>{label} </Label>
//       <Select name={name} onChange={inputValueHandler} required={true}>
//         <option value={""}>{placeholder}</option>
//         {dinamicOptions}
//       </Select>
//     </>
//   );
// };

// export default InputSelect;

import React from "react";
import { Form } from "react-bootstrap";
import { dataBase, substationOptions } from "../../../utils";

const InputSelect = ({
  register,
  label,
  name,
  placeholder,
  dinamicOptions,
  conditional,
}) => {
  const { Label, Select } = Form;

  if (typeof dinamicOptions == "string") {
    const selectedSubstation = dataBase.find(
      (element) => element.id == dinamicOptions
    );

    dinamicOptions = selectedSubstation.sections.map((element) => {
      return (
        <option key={element} value={element}>
          Sec. {element}
        </option>
      );
    });
  }

  return (
    <>
      <Label>{label} </Label>
      <Select {...register(name)} required={true}>
        <option value={""}>{placeholder}</option>
        {dinamicOptions}
      </Select>
    </>
  );
};

export default InputSelect;
