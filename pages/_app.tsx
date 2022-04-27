import { AppProps } from "next/app";
import "../styles/globals.css";
import { store } from "../store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import SideBar from "../components/home/SideBar";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <Provider store={store}>
      <Layout anotherComponent={router.pathname === "/" && <SideBar />}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
