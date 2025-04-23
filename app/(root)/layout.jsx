import "../globals.css";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Toaster
        position="top-left"
        toastOptions={{
          style: {
            fontFamily: "Roboto,sans-serif",
            fontSize: "13px",
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
          },
        }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}
