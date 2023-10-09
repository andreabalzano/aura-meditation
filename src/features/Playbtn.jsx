import react from "react";
import { playbtn, stopIcon } from "../assets/styles/Playbtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { click } from "./playSlice"


export default function Playbtn(props) {
    const playStatus = useSelector((state) => state.play.isPlaying)
    const dispatch = useDispatch();

    return (
        <div className={playbtn} onClick={() => dispatch(click())}>
            {!playStatus && <img src="../src/assets/img/play.png" />}
            {playStatus && <img src="../src/assets/img/stop.png" className={stopIcon} />}
        </div>
    )
}