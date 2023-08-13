import Image from 'next/image'

type ECCardProps = {
    name: string;
    position: string;
    batch: string;
    image?: string;
}

const CARD_SIZE = 300

const s = (num: number) => `${CARD_SIZE * num / 100}px`

export default function ECCard({ name, position, batch, image }: ECCardProps) {

    return (
        <div className="relative" style={{ width: CARD_SIZE, height: CARD_SIZE }}>
            <Image className='absolute' src="/ec-card.svg" alt={name} width={CARD_SIZE} height={CARD_SIZE} />
            <section className='absolute w-full flex flex-col justify-center text-black' style={{ bottom: s(6) }}>
                <span className="text-center text-green-600 text-lg">{position}</span>
                <span className="text-center">{name}</span>
            </section>
            <section className='absolute rotate-90' style={{ top: s(34), right: s(-30), minWidth: s(70) }}>
                <div className='flex gap-4'>
                    <span className='text-lg text-black'>Executive Council</span>
                    <span className='text-lg text-green-600'>{batch}</span>
                </div>
            </section>
            <section className='absolute bg-white' style={{ minWidth: s(44), minHeight: s(44), left: s(28), top: s(21.5) }}>
                <Image
                    alt=""
                    src={image || "/avatar.svg"}
                    fill={true}
                />
            </section>
        </div>
    )
}
