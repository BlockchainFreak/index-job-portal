import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider, type MantineThemeOverride } from '@mantine/core'
import Header from "@/components/Header"
import Image from 'next/image'
import { IconBrandInstagram, IconBrandFacebookFilled, IconBrandLinkedin } from '@tabler/icons-react'
import { Lato, Roboto } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: "--lato" })
const roboto = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: "--roboto" })

const customTheme: MantineThemeOverride = {
  colorScheme: "dark",
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lato.className}>
      <MantineProvider theme={customTheme} withGlobalStyles withNormalizeCSS>
        <Header />
        <div className="fixed w-screen h-screen inset-0 bg-black opacity-10 -z-50">
          {/* <Image
            className="relative"
            src="/background.png"
            alt='background'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          /> */}
        </div>
        <div className="absolute w-full h-full overflow-y-auto">
          <main>
            <Component {...pageProps} />
          </main>
          <footer className="bg-secondary bg-opacity-20 w-screen h-96 p-6 flex flex-col justify-center gap-8">
            <div className='flex justify-center'>
              <Image
                src="/logo-white.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <div className="text-4xl font-semibold flex justify-center">
              Innovate. Design. Experience
            </div>
            <div className="flex justify-center">
              <div className="flex gap-4">
                <div className="aspect-square rounded-lg bg-opacity-80"><IconBrandInstagram /></div>
                <div className="aspect-square rounded-lg bg-opacity-80"><IconBrandFacebookFilled /></div>
                <div className="aspect-square rounded-lg bg-opacity-80"><IconBrandLinkedin /></div>
              </div>
            </div>
            <hr className="border border-white border-solid px-8 w-5/6" />
            <div>Copyright INDEX IT 2024</div>
          </footer>
        </div>
      </MantineProvider>
    </div>
  )
}
