import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface EventCardProps {
    title: string;
    time: string;
    description: Document;
    coverURL: string;
    slug: string;
}

export default function EventCard({ title, time, description, coverURL, slug }: EventCardProps) {

    const para = (description.content[0].content[0] as any).value

    const router = useRouter();

    return (
        <div
            className="flex flex-col xl:flex-row gap-8 even:xl:flex-row-reverse"
            // onClick={() => router.push(`/events/${slug}`)}
        >
            <div>
                <h2 className="text-4xl font-bold text-primary">{title}</h2>
                <p className={"text-xl text-justify"}>{para}</p>
            </div>
            <div>
                <div className="relative w-full sm:w-96 aspect-square">
                    <Image
                        alt=""
                        src={"https:" + coverURL}
                        fill={true}
                    />
                </div>
            </div>
        </div>
    )
}
