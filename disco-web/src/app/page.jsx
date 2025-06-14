import HomeFifth from "@/components/home/HomeFifth";
import HomeFourth from "@/components/home/HomeFourth";
import HomeSecond from "@/components/home/HomeSecond";
import HomeSixth from "@/components/home/HomeSixth";
import HomeThird from "@/components/home/HomeThird";
import Landing from "@/components/home/Landing";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="w-full ">
        <div className="lg:px-20 px-10">
          <Landing/>
          <section id="home-second">
            <HomeSecond/>
          </section>
          <HomeThird/>
          <HomeFourth/>
        </div>
        <HomeFifth/>
        <HomeSixth/>
      </div>
      <Footer/>
    </div>
  );
}
