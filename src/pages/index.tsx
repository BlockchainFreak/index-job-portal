import Image from "next/image"
// import { SwatchCard } from "@/components"
import Typewriter from 'typewriter-effect';
import { Roboto } from "next/font/google"
import SectionCard from "@/components/SectionCard";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['500', '700'],
  variable: "--roboto"
})

const sections = [
  {
    title: "Our Mission",
    description: "To teach, encourage and celebrate design innovation, design thinking and user based problem solving by hosting tutrials, workshops , seminars and networking opportunities. To connect designers at LUMS and around the country to brew culture of sharing design knowledge",
    image: "/mission.jpg",
    index: 1
  },
  {
    title: "Our Vision",
    description: "INDEX aims to become the primary outlet to students both undergraduate and graduate at LUMS and the entirety of Pakistan who wish to refine and showcase their skills of implementing design choices and providing design solutions to real world problems.",
    image: "/vision.jpg",
    index: 2
  },
  {
    title: "Core Values",
    description: "- Quality\n- Change\n- Team Work\n-	Diversity\n- Integrity\n- Innovation",
    image: "/values.jpg",
    index: 3
  }
]


export default function Home() {

  const focus = ["Game Design",
    "Animation",
    "Graphic Design",
    "UI/UX",
  ]

  return (
    <div className="container flex flex-col gap-12 px-4 md:px-32 my-8">
      <div className="flex justify-center">
        <div className="relative w-[90vw] h-[45vw] md:w-[60vw] md:h-[30vw]">
          <Image
            alt="hero index"
            src="/hero.png"
            fill={true}
          />
        </div>
      </div>
      <div className="flex gap-2 justify-center text-3xl font-impact">
        INDEX is all about
        <span className="text-teal-500">
          <Typewriter
            options={{
              strings: ['Innovation', 'Technology', 'Design', 'Creativity'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <div className="flex flex-col justify-center bg-black p-6 rounded-md bg-opacity-20">
        <h2 className="text-3xl text-teal-600 text-center">Who We Are</h2>
        <p className="text-justify font-bold text-2xl font-roboto">
          INDEX: The Design and Innovation Society at LUMS is here to pave the way for savoir-faire user experience through design and innovation. The agenda is to make the community more prone to thinking from a design perspective and helping them realise the proper approach to good design.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="text-xl md:text-2xl lg:text-4xl">
          <span className=" text-center">{`"EVERYTHING IS `}</span>
          <span className=" text-teal-700">DESIGNED</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-xl md:text-2xl lg:text-4xl">
          <span className="">BUT NOT EVERYTHING IS</span>
          <span className=" text-teal-700"> DESIGNED </span>
          <span className="">{`WELL"`}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 radiator-box">
        {focus.map((focusItem, i) => (
          <div key={i} className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center">
            <div className="grid place-item-center radiator">
              <Image
                alt={`Image ${i}`}
                src={`/Group-${i + 1}.svg`}
                height={220}
                width={220}
              />
            </div>
            <p className="text-lg text-teal-600 text-center">{focusItem}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8">
        {
          sections.map((section, i) => (
            <SectionCard key={i} {...section} />
            ))
          }
      </div>
    </div>
  )
}

