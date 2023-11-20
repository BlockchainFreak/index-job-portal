import { useRouter, usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useWindowSize } from "@/hooks/useWindowSize"
import { MantineTheme, Burger, Menu } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';

interface Link {
    label: string
    link: string
    Icon: any
}

interface TabProps {
    links: Link[]
    // theme: MantineTheme
}

export default function Header({ links }: TabProps) {

    const path = usePathname()
    const { push } = useRouter()
    const [activeNav, setActiveNav] = useState({ offsetLeft: 0, width: 0 })
    const [menuOpen, setMenuOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const { width, height } = useWindowSize()

    const isMobile = width < 600

    const isMenuOpen = isMobile && menuOpen

    useEffect(() => {
        const navs = Array.from(ref.current?.childNodes ?? []).map((n: any) => ({
            offsetLeft: n.offsetLeft,
            width: n.offsetWidth
        }))

        const idx = links.findIndex(({ link }) => {
            return link === "/" ? path === "/" : path.startsWith(link)
        })
        const activeNav = navs[Math.max(idx, 0)]
        setActiveNav(activeNav)
    }, [ref.current, path, isMobile])

    console.log(activeNav)

    // if (isMobile) {
    //     <nav>

    //     </nav>
    // }

    return (
        <>
            <nav className="gap-4 items-center relative hidden sm:flex" ref={ref}>
                {links.map(({ label, link, Icon }) => (
                    <div key={link} className="flex items-center text-white hover:bg-emerald-500 rounded-md px-2 py-1 cursor-pointer" onClick={() => push(link)}>
                        <Icon size={20} />
                        {!isMobile && <span className="ml-2 font-mono">{label}</span>}
                    </div>
                ))}
                <span className="-z-10 h-full rounded-md bottom-0 absolute bg-emerald-600 transition-all duration-300 ease-in-out delay-0" style={{ left: activeNav.offsetLeft, minWidth: activeNav.width }} />
            </nav>
            <nav className="sm:hidden flex justify-end border">
                <Menu opened={isMenuOpen} onChange={setMenuOpen} width={width}>
                    <Menu.Target>
                        <Burger opened={isMenuOpen} />
                    </Menu.Target>
                    <Menu.Dropdown>
                        {
                            links.map(({ label, link, Icon }) => (
                                <Menu.Item key={link} onClick={() => push(link)} icon={<Icon/>}>
                                    {label}
                                </Menu.Item>
                            ))
                        }
                    </Menu.Dropdown>
                </Menu>
            </nav>
        </>
    )
}
