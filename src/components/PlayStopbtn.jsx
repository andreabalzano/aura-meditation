import react from "react";
import { playStopbtn, disabled } from "../assets/styles/PlayStopbtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { startTimer } from "../features/timer/timerSlice"


export default function PlayStopbtn() {
    const playStatus = useSelector((state) => state.changeTime.isPlaying)
    const userTime = useSelector((state) => state.changeTime.time)
    const dispatch = useDispatch();

    return (
        <button
            className={userTime > 0 ? playStopbtn : disabled}
            onClick={() => dispatch(startTimer())}
        >
            {!playStatus && "PLAY"}
            {playStatus && "STOP"}
        </button>
    )
}