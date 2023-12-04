import "../styles.css";
import { Poppins } from "next/font/google";
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "200"
});

export default function App({ Component, pageProps }) {
  const [version, setVersion] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/cobmin/maize/releases')
      .then(res => res.json())
      .then(releases => {
        if (releases.length > 0) {
          // Assuming the first release is the latest one
          setVersion(releases[0].tag_name);
        }
      })
      .catch(console.error);
  }, []);
  return (

    <main className={`${poppins.variable}`}>
      <Banner />
      <Component {...pageProps} />
    </main>
  );
}
