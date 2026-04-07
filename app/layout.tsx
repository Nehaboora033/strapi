import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import { footerDataGet, navigationDataGet } from "./utils/api/apiList";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Strapi",
  description: "website with frontend and backend",
  icons: {
    icon: "/images/svg/logo.svg",
  }

};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // header
  const navData = await navigationDataGet()

  if (!navData?.data) return null

  const navDetail = navData.data
  // console.log(navDetail, "navDetail in layout");

  // footer
  const footerData = await footerDataGet()

  if (!footerData?.data) return null

  const footerDetail = footerData.data.footer


  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header navDetail={navDetail} />
        <div className="pt-[91px]">{children}</div>
        <Footer footerDetail={footerDetail} />
        <ToastContainer />
      </body>
    </html>
  );
}