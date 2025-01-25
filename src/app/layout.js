import { Inter, LoveLight } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata = {
  title: "Happy Birthday Tri",
  description: "Web App to Congratulate Your Dearest Person Birthday",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased scroll-behavior="smooth"`}
      >
        {children}
        <Toaster />
      </body>
    </html >
  );
}
