import react from "react";
import { timer } from "../assets/styles/Timer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { click } from "./playSlice"


export default function Timer() {
    return (
        <div className={timer} onClick={() => dispatch(click())}>
            <p>00:00</p>
        </div>
    )
}