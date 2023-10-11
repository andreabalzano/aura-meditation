import react from "react";
import { playStopbtn } from "../assets/styles/PlayStopbtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { click } from "./playSlice"


export default function PlayStopbtn() {
    const playStatus = useSelector((state) => state.play.isPlaying)
    const dispatch = useDispatch();

    return (
        <button
            className={playStopbtn}
            onClick={() => dispatch(click())}
        >{!playStatus && "PLAY"}
            {playStatus && "STOP"}
        </button>
    )
}