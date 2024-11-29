import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react"
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(

    <>
    <SessionProvider>
    <Navbar/>
    <Component {...pageProps} />;
    </SessionProvider>
    </>
  );
  
}
