import Container from "react-bootstrap/Container";
import SubstationForm from "../Forms/SubstationForm";
import Header from "../Header/Header";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../FireStore/config";

// const docRef = doc(db, "edenor", "blueprints");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }

const mobile = (
  <div className="maxWidthForMobile mh-50 bg-white roundedTwoRem p-0 shadow mx-4">
    <Header />
    <Container className="p-4">
      <SubstationForm className="bg-light" />
    </Container>
  </div>
);

const tableAndPc = "";

function Home() {
  return <>{mobile}</>;
}

export default Home;
