import Tabs from "@/components/Tabs"
import { IconHome, IconUsersGroup, IconCalendarEvent, IconBriefcase, IconSparkles, IconConfetti, IconUxCircle, IconFriends } from "@tabler/icons-react"
import Image from "next/image"

export default function Header() {

    return (
        <header className="w-full h-16 flex items-center pt-4 px-4 md:px-16">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#00ff0070]"
                src="/logo-white.svg"
                alt="Next.js Logo"
                width={80}
                height={40}
                priority
            />
            <div className="flex justify-end sm:justify-center flex-grow">
                <Tabs links={[
                    { label: "Home", link: "/", Icon: IconHome },
                    { label: "Jobs", link: "/jobs", Icon: IconBriefcase },
                    { label: "Events", link: "/events", Icon: IconCalendarEvent },
                    { label: "Our Partners", link: "/partners", Icon: IconFriends },
                    { label: "Our Team", link: "/members", Icon: IconUsersGroup },
                    // { label: "Takhleeq", link: "/baithaks", Icon: IconSparkles },
                    // { label: "LDF", link: "/ldf", Icon: IconConfetti },
                    // { label: "UX Pakistan", link: "/ux-pakistan", Icon: IconUxCircle },
                ]} />
            </div>
        </header>
    )
}