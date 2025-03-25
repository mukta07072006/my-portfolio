import { Inter, Bebas_Neue } from "@next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${bebas.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
