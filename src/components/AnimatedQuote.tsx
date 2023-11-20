import { useState, useEffect, use } from 'react'

type AnimatedQuoteProps = {
    text: string;
    delay: number;
}

// function BlinkingCursor() {
//     const [show, setShow] = useState(true)
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShow(p => !p)
//         }, 500)

//         return () => { clearTimeout(timer) }
//     }, [show])

//     return <span>{show ? "|" : " "}</span>
// }

export default function AnimatedQuote({ text, delay }: AnimatedQuoteProps) {

    const [typedText, setTypedText] = useState("")
    const [currIndex, setCurrIndex] = useState(0)

    useEffect(() => {

        let resetTimer: NodeJS.Timeout | null = null;

        const timer = setTimeout(() => {
            if (currIndex < text.length) {
                setTypedText((prevText) => prevText + text[currIndex]);
                setCurrIndex(p => p + 1);
            }
            else {
                resetTimer = setTimeout(() => {
                    setTypedText("")
                    setCurrIndex(0)
                }, 4000)
            }
        }, delay + Math.random() * 100)

        return () => {
            clearTimeout(timer)
            resetTimer && clearTimeout(resetTimer)
        }
    }, [currIndex, text, delay])


    return (
        <div style={{ minWidth: "320px", maxWidth: "320px" }} className="flex justify-start">
            <span className='text-4xl'>{typedText}</span>
            <span className="bg-slate-500" style={{ minWidth: 1, minHeight: 10, maxHeight: 10 }}/>
            {/* {<BlinkingCursor />} */}
        </div>
    )
}
