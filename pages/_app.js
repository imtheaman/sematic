import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks";
import { auth } from "../firebase";
import Login from "./login";

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  if (!user) <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
