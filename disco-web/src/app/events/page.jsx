
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/Navbar";
import Event from "./components/Event";

export default function About() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="w-full lg:mt-[8%] mt-[25%] lg:px-20 px-4 mb-20">
        <Event/>
      </div>
      <Footer/>
    </div>
  );
}


{/* <Countdown targetDateTime="2025-07-01T12:00:00"/> */}