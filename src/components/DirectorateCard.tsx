import { Text } from '@mantine/core';
import Image from 'next/image'

type DirectorateCardProps = {
    name: string;
    image?: string;
    position: string;
    batch: string;
}

const CARD_SIZE = 250

const s = (num: number) => `${CARD_SIZE * num / 100}px`

export default function DirectorateCard({ name, image, position, batch }: DirectorateCardProps) {
    return (
        <div className="relative flex flex-col justify-center" style={{ width: CARD_SIZE, height: CARD_SIZE }}>
            <Image className='absolute z-10' src="/member-card.svg" alt={name} width={CARD_SIZE} height={CARD_SIZE} />
            <section className='absolute z-20 place-self-center text-sm' style={{ width: s(80), top: s(15) }}>
                <div className='text-green-400 font-bold text-center'>{position}</div>
                <div className='text-white font-bold text-center'>{batch}</div>
            </section>
            <section className='absolute z-20 place-self-center' style={{ width: s(70), bottom: s(12) }}>
                <div className='text-white font-bold text-center'>{name}</div>
            </section>
            <section className="absolute bg-black" style={{ top: s(30), left: s(27), width: s(46), height: s(46) }}>
                <Image
                    alt=""
                    src={image || "/avatar.svg"}
                    fill={true}
                />
            </section>
        </div>
    )
}
