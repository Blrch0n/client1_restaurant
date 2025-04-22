import { Toaster } from "react-hot-toast";
import { CartProvider } from "../components/Cart/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <Toaster position="bottom-center" />
      <Header />
      {children}
      <Footer />
    </CartProvider>
  );
}
