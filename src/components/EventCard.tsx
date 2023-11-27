import { Document } from "@contentful/rich-text-types";
import { Badge, Button, Card, Group, Spoiler, Text, Title } from "@mantine/core"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { lato } from "@/utils/fonts";

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
            className="flex flex-col sm:flex-row gap-8 even:md:flex-row-reverse"
            // onClick={() => router.push(`/events/${slug}`)}
        >
            <div>
                <h2 className="text-4xl font-bold text-primary">{title}</h2>
                <p className={lato.className + " text-xl text-justify"}>{para}</p>
            </div>
            <div>
                <div className="relative w-80 sm:w-96 aspect-square">
                    <Image
                        alt=""
                        src={"https://" + coverURL}
                        fill={true}
                    />
                </div>
            </div>
        </div>
    )
}
