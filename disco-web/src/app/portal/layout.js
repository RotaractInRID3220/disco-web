

export const metadata = {
  title: "District Portal | Rotaract District 3220 | Sri Lanka & Maldives",
  description:
    "Access the official District Portal of Rotaract District 3220 for Sri Lanka and Maldives. Find admin documents, protocols, guidelines, contact directories, and the Brand Center for Rotaract clubs and members.",
  keywords: [
    "Rotaract District Portal",
    "Rotaract 3220",
    "Rotaract District 3220",
    "Sri Lanka",
    "Maldives",
    "Rotaract documents",
    "Rotaract protocols",
    "Rotaract guidelines",
    "Rotaract Brand Center",
    "Rotaract contact directory",
    "Rotaract admin resources",
    "Rotaract clubs",
    "Rotaract resources",
    "Rotaract branding",
    "Rotaract Sri Lanka",
    "Rotaract Maldives"
  ],
  authors: [{ name: "Rotaract District 3220", url: "https://rotaract3220.org" }],
  creator: "Rotaract District 3220",
  publisher: "Rotaract District 3220",
  openGraph: {
    title: "District Portal | Rotaract District 3220 | Sri Lanka & Maldives",
    description:
      "Official portal for Rotaract District 3220. Access admin documents, protocols, guidelines, contact directories, and branding resources for Sri Lanka and Maldives.",
    url: "https://rotaract3220.org/portal",
    siteName: "Rotaract District 3220",
    images: [
      {
        url: "/Webmeta.png",
        width: 1200,
        height: 630,
        alt: "Rotaract District 3220 Portal"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "District Portal | Rotaract District 3220 | Sri Lanka & Maldives",
    description:
      "Access the official portal for Rotaract District 3220. Find documents, protocols, guidelines, contact directories, and branding resources for Sri Lanka and Maldives.",
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