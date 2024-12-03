import Header from "../../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { Nunito, Yeseva_One } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sans = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-montserrat",
});
const serif = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-platypi",
});

export const metadata = {
  title: "Victor Rossi - Desenvolvedor front-end",
  description:
    "Site pessoal do Victor Rossi, desenvolvedor front-end e designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className="theme-loading">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
                document.documentElement.classList.remove('theme-loading');
              })();
            `,
          }}
        />
      </head>
      <body className={`${serif.variable} ${sans.className}`}>
        <Header />
        {children}
        <Modal />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
