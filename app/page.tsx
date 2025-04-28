import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero/>
      <About/>
    </div>
  );
}
