import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { uploadFiles } from "../../FireStore/config";

const UploadFileForm = () => {
  const { Group } = Form;

  const [formValues, setFormValues] = useState({
    substation: "",
    section: "",
    equipment: "",
  });

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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log(file);
  };

  const [file, setFile] = useState(null);

  return (
    <Form onSubmit={submitHandler}>
      <Group className="mb-3" controlId="formBasicEmail">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </Group>

      <Button type="submit" variant="primary">
        Descargar
      </Button>
    </Form>
  );
};

export default UploadFileForm;
