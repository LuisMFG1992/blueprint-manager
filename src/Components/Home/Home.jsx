import Container from "react-bootstrap/Container";
import Header from "../Header/Header";
import SubstationForm from "../Forms/SubstationForm";

const mobile = (
  <div className="maxWidthForMobile mh-50 bg-white roundedTwoRem p-0 shadow mx-4">
    <Header />
    <Container className="p-4">
      <SubstationForm className="bg-light" />
    </Container>
  </div>
);

function Home() {
  return <>{mobile}</>;
}

export default Home;
