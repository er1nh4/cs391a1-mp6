import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {GoogleOAuthProvider} from "@react-oauth/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CS391 MP-6 OAuth"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
        <title> CS391 MP-6 OAuth </title>
        <html lang="en">
            <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header/>
                {children}
            </body>
        </html>
    </GoogleOAuthProvider>
  );
}
