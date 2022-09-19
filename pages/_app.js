import { UserContextProvider } from "../context";
import "../styles/globals.css";
import "../styles/style.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </UserContextProvider>
  );
}

export default MyApp;
