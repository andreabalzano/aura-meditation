import React from "react";
import { coontainer, selected, timeBtn, disabled } from "../assets/styles/TimeSelect.module.css"
import { useDispatch, useSelector } from "react-redux";
import { timeChanged } from "../features/timer/timerSlice"

export default function Playbtn() {
    const dispatch = useDispatch()
    const playStatus = useSelector((state) => state.changeTime.isPlaying)
    const timer = useSelector((state) => state.changeTime.time)

    if (playStatus) {
        return (
            <section>
                <p>Choose meditation time to start</p>
                <div className={coontainer}>
                    <button
                        className={disabled}
                    >5 min</button>
                    <button
                        className={disabled}
                    >10 min</button>
                    <button
                        className={disabled}
                    >15 min</button>
                    <button
                        className={disabled}
                    >20 min</button>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                <p>Choose meditation time to start</p>
                <div className={coontainer}>
                    <button
                        className={timer == 5 ? selected : timeBtn}
                        onClick={() => dispatch(timeChanged(5))}
                    >5 min</button>
                    <button
                        className={timer == 10 ? selected : timeBtn}
                        onClick={() => dispatch(timeChanged(10))}
                    >10 min</button>
                    <button
                        className={timer == 15 ? selected : timeBtn}
                        onClick={() => dispatch(timeChanged(15))}
                    >15 min</button>
                    <button
                        className={timer == 20 ? selected : timeBtn}
                        onClick={() => dispatch(timeChanged(20))}
                    >20 min</button>
                </div>
            </section>
        )
    }
}