
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/Navbar";
import PortalFirst from "./components/PortalFirst";


export default function About() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="w-full ">
        <PortalFirst/>
      </div>
      <Footer/>
    </div>
  );
}
