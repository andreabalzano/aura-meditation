import react from "react";
import { btnContainer, playbtn, stopIcon, NoPlayAnimation, playAnimation } from "../assets/styles/Playbtn.module.css";



export default function Playbtn(props) {

    return (
        <div className={playbtn} onClick={props.clickHandle}>
            {!props.status && <img src="../src/assets/img/play.png" />}
            {props.status && <img src="../src/assets/img/stop.png" className={stopIcon} />}
        </div>
    )
}