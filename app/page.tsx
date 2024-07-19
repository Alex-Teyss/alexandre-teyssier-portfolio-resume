"use client";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { Boxes } from "@/components/ui/background-boxes";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";

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
        <Button
          className="mt-6 bg-indigo-500 border-indigo-500 text-primary-foreground hover:text-primary-foreground hover:bg-indigo-800 hover:border-indigo-800 font-bold"
          variant="outline"
        >
          Download CV
        </Button>
      </div>
    </section>
  );
};

const Projects = () => {
  const dummyContent = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse
            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat
            incididunt incididunt enim magna id est qui sunt fugiat. Laboris do
            duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non
            reprehenderit dolore nisi velit exercitation Lorem qui do enim
            culpa. Aliqua eiusmod in occaecat reprehenderit laborum nostrud
            fugiat voluptate do Lorem culpa officia sint labore. Tempor
            consectetur excepteur ut fugiat veniam commodo et labore dolore
            commodo pariatur.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia
            qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla
            nostrud. Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
        </>
      ),
      badge: "React",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt
            exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
            consectetur sint qui qui do do qui do. Labore laborum culpa magna
            reprehenderit ea velit id esse adipisicing deserunt amet dolore.
            Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
            aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
            veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
            reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
            cillum ut mollit.
          </p>
        </>
      ),
      badge: "Changelog",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt
            exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
            consectetur sint qui qui do do qui do. Labore laborum culpa magna
            reprehenderit ea velit id esse adipisicing deserunt amet dolore.
            Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
            aliquip duis veniam sunt.
          </p>
        </>
      ),
      badge: "Launch Week",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-indigo-500 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={"text-xl mb-4 text-primary-foreground"}>
              {item.title}
            </p>

            <div className="text-lg text-primary-foreground prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="relative z-20">
        <Navbar />
        <div className="max-w-6xl mx-auto">
          <Hero />
          <Projects />
        </div>
      </div>
    </main>
  );
}
