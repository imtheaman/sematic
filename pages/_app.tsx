import { AppProps } from "next/app";
import "../styles/globals.css";
import { store } from "../store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import SideBar from "../components/home/SideBar";
import { SessionProvider } from "next-auth/react";

const App = ({
  Component,
  pageProps: { session, ...otherProps },
}: AppProps) => {
  const router = useRouter();

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout anotherComponent={router.pathname === "/" && <SideBar />}>
          <Component {...otherProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  );
};

export default App;
