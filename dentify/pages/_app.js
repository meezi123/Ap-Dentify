<<<<<<< HEAD
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
=======
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
  
>>>>>>> 87cc7633beef45a1476c6d6d9f304d7b6f2c7792
}
