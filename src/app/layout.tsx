import type { Metadata } from "next";
import "./globals.css";
import { titleFont } from "./config/fonts";
import { TopMenu,FooterGlobalApp } from "./components";


export const metadata: Metadata = {
  title: "Jesus | Portfolio",
  description: "Bienvenido a mi portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {

  return (
    <html lang="en">
      <body className={`${titleFont.className} dark:bg-gray-950 overflow-x-hidden`}>
        <div className="w-full bg-slate-100 m-0 md:m-auto md:w-[1200px]  dark:bg-gray-800  ">
          
          <TopMenu/>
        {children}
          <FooterGlobalApp />
           
        </div>
      </body>
    </html>
  );
}
