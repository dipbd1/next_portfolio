import "../styles/globals.css";
import "../styles/navbar.css";
import useAudio from "../hooks/useAudio";

function MyApp({ Component, pageProps }) {
  // useAudio("/music.mp3");

  return <Component {...pageProps} />;
}

export default MyApp;
