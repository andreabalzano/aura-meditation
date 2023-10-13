import react from "react";
import { playStopbtn, disabled } from "../assets/styles/PlayStopbtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { click } from "./playSlice"


export default function PlayStopbtn() {
    const playStatus = useSelector((state) => state.play.isPlaying)
    const userTime = useSelector((state) => state.changeTime.time.payload)
    const dispatch = useDispatch();

    return (
        <button
            className={userTime > 0 ? playStopbtn : disabled}
            onClick={() => dispatch(click())}
        >
            {!playStatus && "PLAY"}
            {playStatus && "STOP"}
        </button>
    )
}