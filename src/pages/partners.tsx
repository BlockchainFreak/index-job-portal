import Image from "next/image"

export default function PartnersPage() {

    const partners = Array(5).fill("/hero.png") as string[]

    return (
        <div className="p-8 sm:w-3/4 w-5/6 bg-opacity-40 rounded-2xl my-32 mx-auto bg-secondary">
            <div className="text-5xl text-center font-bold">Our Partners</div>
            <div className="grid gap-y-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {partners.map((partner, i) => (
                        <div key={i} className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center grow">
                            <div className="grid place-item-center my-12">
                                <div className="relative aspect-square w-64">
                                    <Image fill={true} src={partner} alt="partner" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
