import "../styles/globals.css";
import "../styles/navbar.css";
import {useEffect, useState} from "react";
// import useAudio from "../hooks/useAudio";

function MyApp({ Component, pageProps }) {
  // useAudio("/music.mp3");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Record the start time of loading with maximum precision
      const loadingStartTime = performance.now();
      console.log(`Loading started at: ${loadingStartTime}`);

      const loader = document.getElementById('globalLoader');
      if (loader) {
        // Record the end time of loading with maximum precision
        const loadingEndTime = performance.now();
        console.log(`Loading ended at: ${loadingEndTime}`);
        loader.remove();
      }
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
