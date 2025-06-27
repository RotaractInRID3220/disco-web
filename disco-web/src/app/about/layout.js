

export const metadata = {
  title: "About Us | Rotaract District 3220 | Sri Lanka & Maldives",
  description:
    "Learn about Rotaract District 3220, the official Rotaract organization for Sri Lanka and Maldives. Discover our mission, vision, leadership, and the impact we create through youth empowerment, community service, and leadership development.",
  keywords: [
    "About Rotaract",
    "Rotaract District 3220",
    "Rotaract Sri Lanka",
    "Rotaract Maldives",
    "youth leadership",
    "community service",
    "Rotaract clubs",
    "Rotaract 3220",
    "leadership development",
    "social impact",
    "Rotaract team",
    "Rotaract mission",
    "Rotaract vision",
    "Rotaract history",
    "Rotaract District Council"
  ],
  authors: [{ name: "Rotaract District 3220", url: "https://rotaract3220.org" }],
  creator: "Rotaract District 3220",
  publisher: "Rotaract District 3220",
  openGraph: {
    title: "About Us | Rotaract District 3220 | Sri Lanka & Maldives",
    description:
      "Discover the story, mission, and leadership of Rotaract District 3220, serving Sri Lanka and Maldives. Meet our team and learn how we empower youth for positive change.",
    url: "https://rotaract3220.org/about",
    siteName: "Rotaract District 3220",
    images: [
      {
        url: "/Webmeta.png",
        width: 1200,
        height: 630,
        alt: "About Rotaract District 3220"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Rotaract District 3220 | Sri Lanka & Maldives",
    description:
      "Learn about Rotaract District 3220, our mission, vision, and leadership team serving Sri Lanka and Maldives.",
    images: ["/Webmeta.png"]
  }
};



export default function aboutLayout({ children }) {
  return (
        <div>
        {children}
      </div>
  );
}