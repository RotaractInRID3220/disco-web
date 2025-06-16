
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import AboutFirst from "./components/AboutFirst";
import AboutSecond from "./components/AboutSecond";
import AboutThird from "./components/AboutThird";

export default function About() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="w-full ">
        <AboutFirst/>
        <AboutSecond/>
        <AboutThird/>
      </div>
      <Footer/>
    </div>
  );
}
