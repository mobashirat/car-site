import { initializeApp } from "firebase/app";
import FirebaseConfig from "./Firebase.config";

const initAuthentication = () => {
    initializeApp(FirebaseConfig);
}
export default initAuthentication;