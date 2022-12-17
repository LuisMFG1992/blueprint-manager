import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { uploadFiles } from "../../FireStore/config";

const UploadFileForm = () => {
  const { Group } = Form;

  const [file, setFile] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    uploadFiles(file);
  };

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
