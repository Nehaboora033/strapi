import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import { navigationDataGet } from "./utils/api/apiList";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Strapi",
  description: "website with frontend and backend",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navData = await navigationDataGet()

  if (!navData?.data) return null

  const navDetail = navData.data
  // console.log(navDetail, "navDetail in layout");

  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header navDetail={navDetail} />
        <div className="mt-[80px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}