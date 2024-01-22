import Image from "next/image";
import Hero from "./components/main/Hero";
import Products from "./components/main/Product";
import Nav from "./components/main/Nav";

export default function Home() {
  return (
    <main className="h-full w-full margin-top-[400px]">
      <div className="flex flex-col h-[850px] gap-20 ">
        <Nav />
        <Hero />
        {/* <div className='z-10'><Products /></div> */}
      </div>
    </main>
  );
}
