import Navbar from "../components/Navbar";
import { ContextProvider } from "../context/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </ContextProvider>
  );
}

export default MyApp;
