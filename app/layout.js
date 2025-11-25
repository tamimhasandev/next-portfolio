import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "./components/common/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tamim Hasan — Next.js Developer & Web Analytics Specialist",
  description:
    "Tamim Hasan. a React/Next.js Developer and a Web Analytics Expert.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <SideBar />

          <div className="lg:ml-[280px] lg:p-12 bg-secondary text-white p-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
