import "../styles.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "200"
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
