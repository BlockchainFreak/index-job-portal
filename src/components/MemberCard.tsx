import Image from 'next/image'

type ECCardProps = {
    name: string;
    position: string;
    batch: string;
    image?: string;
}

const CARD_SIZE = 300

const s = (num: number) => `${CARD_SIZE * num / 100}px`

export default function MemberCard({ name, position, batch, image }: ECCardProps) {

    return (
        <div className="p-4 w-64 flex flex-col gap-4 bg-zinc-900 hover:bg-zinc-950 hover:scale-105 transition ease-in-out rounded-2xl border border-green-700 border-solid">
            <div className="relative aspect-square border-2 border-green-500 border-solid">
                <Image
                    alt=""
                    src={image ? `https:${image}` : "/avatar.svg"}
                    fill={true}
                />
            </div>
            <div>
                <div className="text-center text-green-600 text-lg">{position}</div>
                <div className="text-center">{name}</div>
            </div>
        </div>
    )
}
