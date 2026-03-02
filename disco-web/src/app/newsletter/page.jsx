import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/Navbar";
import NewsletterFirst from "./components/NewsletterFirst";

export default function Newsletter() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="w-full">
        <NewsletterFirst />
      </div>
      <Footer />
    </div>
  );
}
