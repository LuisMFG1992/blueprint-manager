// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg_qzuEqZHqEIQ9_qTOxEId8Q0tS6dOH4",
  authDomain: "blueprint-maganer.firebaseapp.com",
  projectId: "blueprint-maganer",
  storageBucket: "blueprint-maganer.appspot.com",
  messagingSenderId: "1061357514820",
  appId: "1:1061357514820:web:617795a960db863d6d8c11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getStorage();

// export const uploadFiles = (file) => {
//   const storageRef = ref(storage, file.name);

//   // 'file' comes from the Blob or File API
//   uploadBytes(storageRef, file).then((snapshot) => {
//     console.log(snapshot);
//   });
// };
