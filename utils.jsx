import { ref, getDownloadURL } from "firebase/storage";
import { db } from "./src/FireStore/config";

export const getFileUrl = async (fileName) => {
  let downloadUrl = await getDownloadURL(ref(db, fileName));
  return downloadUrl;
};
