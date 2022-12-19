import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import SubstationForm from "../Forms/SubstationForm";
import Header from "../Header/Header";

const mobile = (
  <div className="maxWidthForMobile mh-50 bg-white roundedTwoRem p-0 shadow mx-4">
    <Header />
    <Container className="p-4">
      <SubstationForm />
    </Container>
  </div>
);

const tableAndPc = "";

function Home() {
  return <>{mobile}</>;
}

export default Home;
