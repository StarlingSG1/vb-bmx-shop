import { UserContextProvider } from "../context";
import "../styles/globals.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
