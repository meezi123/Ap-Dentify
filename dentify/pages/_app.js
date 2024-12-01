import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "../context/UserContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <UserProvider>
          <Navbar />
          <Component {...pageProps} />
        </UserProvider>
      </SessionProvider>
    </>
  );
}
