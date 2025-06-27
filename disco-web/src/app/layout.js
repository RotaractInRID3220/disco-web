import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/smoothScroll";
import { Analytics } from "@vercel/analytics/next"
import ChatBot from "@/components/ui/ChatBot";
import BotButton from "@/components/ui/BotButton";


const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400", // Add this line

});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Add this line
});

export const metadata = {
  title: "Rotaract District 3220 | Official Website for Sri Lanka & Maldives",
  description:
    "Welcome to the official website of Rotaract District 3220, representing Rotaract clubs across Sri Lanka and Maldives. Discover leadership opportunities, community service projects, events, and the latest updates from Rotaract 3220. Join the movement empowering youth to create positive change.",
  keywords: [
    "Rotaract",
    "Rotaract 3220",
    "Rotaract District 3220",
    "Sri Lanka",
    "Maldives",
    "Rotaract Sri Lanka",
    "Rotaract Maldives",
    "youth leadership",
    "community service",
    "volunteering",
    "Rotaract clubs",
    "Rotaract events",
    "Rotaract projects",
    "Rotaract news",
    "RID 3220",
    "Rotaract International",
    "youth empowerment",
    "social impact",
    "leadership development"
  ],
  authors: [{ name: "Rotaract District 3220", url: "https://rotaract3220.org" }],
  creator: "Rotaract District 3220",
  publisher: "Rotaract District 3220",
  openGraph: {
    title: "Rotaract District 3220 | Official Website for Sri Lanka & Maldives",
    description:
      "Explore Rotaract District 3220 – the official hub for Rotaract clubs in Sri Lanka and Maldives. Find events, projects, and opportunities to connect and serve.",
    url: "https://rotaract3220.org",
    siteName: "Rotaract District 3220",
    images: [
      {
        url: "/Webmeta.png",
        width: 1200,
        height: 630,
        alt: "Rotaract District 3220 Official Website"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotaract District 3220 | Official Website for Sri Lanka & Maldives",
    description:
      "Discover Rotaract District 3220, the official platform for Rotaract clubs in Sri Lanka and Maldives. Stay updated with news, events, and opportunities.",
    images: ["/Webmeta.png"]
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${poppins.variable} antialiased`}
      >
        <Analytics />
        <SmoothScrollProvider>
        {/* <div>
          <BotButton/>
        </div>
        <div className="z-60 fixed right-0 top-0">
          <ChatBot/>
        </div> */}
        {children}

        </SmoothScrollProvider>
      </body>
    </html>
  );
}