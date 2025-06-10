import HomeFourth from "@/components/home/HomeFourth";
import HomeSecond from "@/components/home/HomeSecond";
import HomeThird from "@/components/home/HomeThird";
import Landing from "@/components/home/Landing";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-20">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="w-full ">
        <Landing/>
        <HomeSecond/>
        <HomeThird/>
        <HomeFourth/>
      </div>
    </div>
  );
}
