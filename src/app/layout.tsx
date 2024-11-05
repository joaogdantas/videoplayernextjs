import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import HomeContextProvider from "./context/HomeContext";

const poppins = Poppins(
  {
    weight: ["100", "200", "500", "700", "800", "900"],
    subsets: ["latin"],
    variable: '--font-poppins'
  });

export const metadata: Metadata = {
  title: "Video Player - João Gabriel - Multimídia",
  description: "Video player criado para a disciplina de multimidia pelo aluno João Gabriel Dantas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HomeContextProvider>
      <body className={poppins.variable}>{children}</body>
      </HomeContextProvider>
    </html>
  );
}
