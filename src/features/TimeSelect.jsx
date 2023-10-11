import React from "react";
import { coontainer } from "../assets/styles/TimeSelect.module.css"

export default function Playbtn() {
    return (
        <div className={coontainer}>
            <button>5 min</button>
            <button>15 min</button>
            <button>30 min</button>
        </div>
    )
}