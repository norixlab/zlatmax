import { Montserrat } from "next/font/google";
import Header from "./components/Header";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "ZLATMAX",
  description: "Златоустовские ножи",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} bg-[#FEFEFE] font-medium`}>
        <Providers>
          <div className="flex flex-col justify-between h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          pauseOnFocusLoss={false}
          theme="light"
        />
      </body>
    </html>
  );
}
