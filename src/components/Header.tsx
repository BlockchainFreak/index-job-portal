import Tabs from "@/components/Tabs"
import { IconHome, IconUsersGroup, IconCalendarEvent, IconBriefcase } from "@tabler/icons-react"

export default function Header() {

    return (
        <header className="w-full h-16  flex items-center justify-center px-4">
            <Tabs links={[
                { label: "Home", link: "/", Icon: IconHome },
                { label: "Jobs", link: "/jobs", Icon: IconBriefcase },
                { label: "Events", link: "/events", Icon: IconCalendarEvent },
            ]}/>
        </header>
    )
}