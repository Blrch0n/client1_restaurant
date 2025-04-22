import { CartProvider } from "../components/Cart/CartContext";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainSection from "../components/MainSection";

export default function Home() {
  return (
    <CartProvider>
      <Toaster position="bottom-center" />
      <Header />
      <MainSection />
      <Footer />
    </CartProvider>
  );
}
