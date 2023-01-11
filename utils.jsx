import { ref, getDownloadURL } from "firebase/storage";
import { db } from "./src/FireStore/config";

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
