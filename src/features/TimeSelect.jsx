import React from "react";
import { coontainer, selected } from "../assets/styles/TimeSelect.module.css"
import { useDispatch, useSelector } from "react-redux";
import { timeChanged } from "./timerSlice"

export default function Playbtn() {
    const dispatch = useDispatch()
    const timer = useSelector((state) => state.changeTime.time.payload)

    return (
        <section>
            <p>Choose meditation time to start</p>
            <div className={coontainer}>
                <button
                    className={timer == 5 ? selected : null}
                    onClick={() => dispatch(timeChanged(5))}
                >5 min</button>
                <button
                    className={timer == 10 ? selected : null}
                    onClick={() => dispatch(timeChanged(10))}
                >10 min</button>
                <button
                    className={timer == 15 ? selected : null}
                    onClick={() => dispatch(timeChanged(15))}
                >15 min</button>
            </div>
        </section>
    )
}