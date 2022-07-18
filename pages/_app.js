import '../styles/globals.css'
import {ArticlesContextProvider} from '../context/context';

function MyApp({ Component, pageProps }) {
  return (
    <ArticlesContextProvider>
      <Component {...pageProps} />
    </ArticlesContextProvider>
  );
}

export default MyApp
