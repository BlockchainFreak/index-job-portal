import { Lato, Roboto } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
export const lato = Lato({ subsets: ['latin'], weight: ['700'], variable: "--lato"})
export const roboto = Roboto({ subsets: ['latin'], weight: ['700'], variable: "--roboto"})

