import Header from "../components/Header";
import Footer from "../components/Footer";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['300', '400', '700'] });

export const metadata = {
  title: "Victor Rossi - Desenvolvedor front-end",
  description: "Site pessoal do Victor Rossi, desenvolvedor front-end e designer.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="pt">
        <body className={`${montserrat.className}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
  );
}