

export const metadata = {
  title: "Contact Us | Rotaract District 3220 | Sri Lanka & Maldives",
  description:
    "Get in touch with Rotaract District 3220, the official Rotaract organization for Sri Lanka and Maldives. Contact us for inquiries, collaborations, membership, and more. Connect with our district team and Rotaract clubs across Sri Lanka and Maldives.",
  keywords: [
    "Contact Rotaract",
    "Rotaract District 3220",
    "Rotaract Sri Lanka",
    "Rotaract Maldives",
    "Rotaract contact",
    "Rotaract clubs",
    "Rotaract 3220",
    "youth leadership",
    "community service",
    "Rotaract team",
    "Rotaract inquiry",
    "Rotaract membership",
    "Rotaract collaboration"
  ],
  authors: [{ name: "Rotaract District 3220", url: "https://rotaract3220.org" }],
  creator: "Rotaract District 3220",
  publisher: "Rotaract District 3220",
  openGraph: {
    title: "Contact Us | Rotaract District 3220 | Sri Lanka & Maldives",
    description:
      "Contact Rotaract District 3220 for inquiries, partnerships, and membership opportunities in Sri Lanka and Maldives. Connect with our district team and clubs.",
    url: "https://rotaract3220.org/contact",
    siteName: "Rotaract District 3220",
    images: [
      {
        url: "/Webmeta.png",
        width: 1200,
        height: 630,
        alt: "Contact Rotaract District 3220"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Rotaract District 3220 | Sri Lanka & Maldives",
    description:
      "Reach out to Rotaract District 3220 for all your inquiries and collaborations in Sri Lanka and Maldives.",
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
