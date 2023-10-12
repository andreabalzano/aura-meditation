import React from "react";
import { coontainer } from "../assets/styles/TimeSelect.module.css"
import { useDispatch, useSelector } from "react-redux";
import { timeChanged } from "./timerSlice"

export default function Playbtn() {
    const dispatch = useDispatch()
    const timer = useSelector((state) => state.changeTime.time.payload)

    return (
        <div className={coontainer}>
            <button
                onClick={() => dispatch(timeChanged(5))}
            >5 min</button>
            <button
                onClick={() => dispatch(timeChanged(10))}
            >10 min</button>
            <button
                onClick={() => dispatch(timeChanged(15))}
            >15 min</button>
        </div>
    )
}