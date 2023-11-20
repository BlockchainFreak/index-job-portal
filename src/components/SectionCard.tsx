import Image from "next/image";
import { Lato } from "next/font/google"

const lato = Lato({
    weight: ["700"],
    subsets: ["latin"]
})

type SectionCardProps = {
    title: string;
    description: string;
    image?: string;
}

export default function SectionCard({ title, description, image }: SectionCardProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 relative w-96 h-64">
            <Image
                alt=""
                src={image ?? ""}
                fill={true}
                className="rounded-2xl"
            />
        </div>
        <div className={"col-span-1" + lato.className}>
            <div className="text-3xl text-emerald-500 font-bold">{title}</div>
            <div className="text-xl text-justify font-semibold">
                {
                    description.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
