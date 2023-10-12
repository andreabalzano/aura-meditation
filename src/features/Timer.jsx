import react from "react";
import { timer } from "../assets/styles/Timer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { click } from "./playSlice"

export default function Timer() {
    const userTime = useSelector((state) => state.changeTime.time.payload)

    return (
        <div className={timer} onClick={() => dispatch(click())}>
            <p>{userTime || "00"}:00</p>
        </div>
    )
}