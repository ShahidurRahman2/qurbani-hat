import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"

    >
      <body >
        <ToastContainer />

        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
