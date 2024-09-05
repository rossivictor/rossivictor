import Header from "../components/Header";
import Footer from "../components/Footer";
import { Nunito, Yeseva_One } from "next/font/google";
import "./globals.css";

const sans = Nunito({ subsets: ["latin"], weight: ['300', '400', '700'], variable: '--font-montserrat' });
const serif = Yeseva_One({ subsets: ["latin"], weight: ['400'], variable: '--font-platypi' });

export const metadata = {
  title: "Victor Rossi - Desenvolvedor front-end",
  description: "Site pessoal do Victor Rossi, desenvolvedor front-end e designer.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="pt">
        <body className={`${serif.variable} ${sans.className}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
  );
}