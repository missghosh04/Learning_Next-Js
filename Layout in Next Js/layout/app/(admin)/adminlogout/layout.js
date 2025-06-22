import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin-Instagram",
  description: "Admin: A simple Instagram clone built with Next.js",
};

export default function AdminLogoutLayout({ children }) {
  return (
   <><div>
    <span>Logout Navbar.....</span>
    {children}
    </div></>
  );
}
