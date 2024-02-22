import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odair de Oliveira Brito - OOB",
  description: "Curriculo online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className="bg-dark text-white">
          <main className="container bg-dark text-white">
            <NavBar />
            {children}
          </main>
        </body>
    </html>
  );
}
