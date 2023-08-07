import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider, type MantineThemeOverride } from '@mantine/core'
import Header from "@/components/Header"
import Image from 'next/image'

const customTheme: MantineThemeOverride = {
  colorScheme: "dark",
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MantineProvider theme={customTheme} withGlobalStyles withNormalizeCSS>
        <Header />
        <Component {...pageProps} />
      </MantineProvider>
    </div>
  )
}
