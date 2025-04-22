import "../globals.css";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Toaster position="bottom-center" />
      <Header />
      {children}
      <Footer />
    </>
  );
}
