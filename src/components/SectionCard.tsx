import Image from "next/image";

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
        <div className="col-span-1">
            <div className="text-3xl text-primary font-bold">{title}</div>
            <div className="text-xl text-justify">
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
