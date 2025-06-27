export const metadata = {
  title: "Events | Rotaract District 3220 | Sri Lanka & Maldives",
  description:
    "Explore upcoming Rotaract events in District 3220, Sri Lanka and Maldives. Stay updated with the latest projects, conferences, and activities organized by Rotaract clubs across the district. Join us to connect, serve, and lead positive change.",
  keywords: [
    "Rotaract events",
    "Rotaract District 3220",
    "Rotaract Sri Lanka",
    "Rotaract Maldives",
    "Rotaract 3220",
    "upcoming events",
    "Rotaract projects",
    "Rotaract conferences",
    "Rotaract activities",
    "youth leadership",
    "community service",
    "Rotaract clubs",
    "social impact",
    "volunteering",
    "Rotaract calendar"
  ],
  authors: [{ name: "Rotaract District 3220", url: "https://rotaract3220.org" }],
  creator: "Rotaract District 3220",
  publisher: "Rotaract District 3220",
  openGraph: {
    title: "Events | Rotaract District 3220 | Sri Lanka & Maldives",
    description:
      "Discover and participate in upcoming Rotaract events in District 3220. Find details on projects, conferences, and club activities in Sri Lanka and Maldives.",
    url: "https://rotaract3220.org/events",
    siteName: "Rotaract District 3220",
    images: [
      {
        url: "/Webmeta.png",
        width: 1200,
        height: 630,
        alt: "Rotaract District 3220 Events"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | Rotaract District 3220 | Sri Lanka & Maldives",
    description:
      "Stay updated with the latest Rotaract events, projects, and activities in District 3220, Sri Lanka and Maldives.",
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