import '../styles/globals.css';
import { StoreProvider } from '../utills/Store';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
