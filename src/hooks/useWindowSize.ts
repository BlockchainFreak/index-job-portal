import { useEffect, useState } from "react";
import { useWindowEvent } from "@mantine/hooks"

export function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, [])

    useWindowEvent('resize', (event) => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    });

    return windowSize;
}