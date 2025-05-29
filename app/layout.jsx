import "./globals.css";
import { Berkshire_Swash, Roboto } from "next/font/google";

import { CartProvider } from "./components/Cart/CartContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Client 1",
  description: "Client 1 here is my data",
  icons: {
    icon: "/image.ico",
  },
};
const berkshire = Berkshire_Swash({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-berkshire",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  italic: ["0", "1"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${berkshire.variable}`}>
        <CartProvider>
          {/* <Header /> */}
          <Toaster />
          {children}
          {/* <Footer /> */}
        </CartProvider>
      </body>
    </html>
  );
}
