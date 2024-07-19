"use client";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="h-screen flex py-2 sm:py-20 justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary">
          Hello, I&apos;m <span className="text-indigo-500">Alexandre</span>
          <br />
          <span className="text-2xl text-primary-foreground">
            I&apos;m a student in{" "}
            <span className="text-indigo-500">Data & IA Enginnering</span>
          </span>
        </h1>
        <p className="text-primary-foreground mx-auto text-lg mt-4">
          Ambitious Data Engineering student leveraging 3 years of robust
          software development experience to tackle complex data challenges.
        </p>
        <p className="text-primary-foreground mx-auto text-lg mt-4">
          Bridging the gap between traditional programming and cutting-edge data
          technologies, I bring a unique blend of coding proficiency and
          emerging data expertise. Eager to apply my strong foundation in
          software engineering principles to design scalable data pipelines,
          optimize data storage solutions, and extract actionable insights from
          diverse datasets. Committed to continuous learning and adapting to the
          ever-evolving landscape of big data and analytics.
        </p>
        <Button className="mt-6" variant="outline">
          Download CV
        </Button>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="bg-primary relative overflow-hidden h-screen">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="relative z-20">
        <Navbar />
        <div className="max-w-6xl mx-auto">
          <Hero />
        </div>
      </div>
    </main>
  );
}
