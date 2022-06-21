import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import myStore from "../store";
import { globalStyles } from "../styles/stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={myStore}>
      <Component {...pageProps} />
      {globalStyles()}
    </Provider>
  );
}

export default MyApp;
