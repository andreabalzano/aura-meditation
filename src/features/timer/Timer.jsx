import { useEffect } from "react";
import { timer } from "../../assets/styles/Timer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decreaseSeconds, stopTimer, resetSeconds } from "./timerSlice"

export default function Timer() {
    const playStatus = useSelector((state) => state.changeTime.isPlaying)
    const userTime = useSelector((state) => state.changeTime.time)
    const minutes = useSelector((state) => state.changeTime.minutes)
    const seconds = useSelector((state) => state.changeTime.seconds)
    const dispatch = useDispatch()

    useEffect(() => {
        let intervalId
        if (playStatus) {
            intervalId = setInterval(() => dispatch(decreaseSeconds()), 1000)
        } else {
            dispatch(stopTimer())
        }
        return () => clearInterval(intervalId)
    }, [playStatus])

    useEffect(() => {
        if (seconds == -1) { dispatch(resetSeconds()) }
        if (seconds == 0 && minutes == 0) { dispatch(stopTimer()) }
        console.log('check')
    }, [seconds])

    return (
        <div className={timer}>
            {playStatus ? <p>
                {minutes} : {seconds < 10 ? "0" + seconds : seconds}
            </p> : <p>{userTime || "00"}:00</p>}
        </div>
    )
}