import { useEffect, useState } from "react"

export default function Timer({questionNum , setStop}) {

    const [timer , setTimer] = useState(30);

    useEffect(() => {
        if (timer === 0) {
            setStop(true);
        }
        const interval = setInterval(() => {
            setTimer(preValue => preValue - 1);
        }, 1000)
        return () => clearInterval(interval);
    },[setStop , timer])

    useEffect(() => {
        setTimer(30)
    } , [questionNum])
    return timer;
}
