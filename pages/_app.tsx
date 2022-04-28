import { AppProps } from "next/app";
import "../styles/globals.css";
import { store } from "../store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import SideBar from "../components/home/SideBar";

const App = ({
  Component,
  pageProps: { session, ...otherProps },
}: AppProps) => {
  const router = useRouter();

  return (
    <Provider store={store}>
        <Layout anotherComponent={router.pathname === "/" && <SideBar />}>
          <Component {...otherProps} />
        </Layout>
    </Provider>
  );
};

export default App;
