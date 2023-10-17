import react from "react";
import AudioPlayer from "./AudioPlayer"
import { container } from "../assets/styles/SoundSelect.module.css"
import rainIcon from "../assets/img/rain.png"
import waveIcon from "../assets/img/wave.png"
import bellIcon from "../assets/img/bell.png"
import windIcon from "../assets/img/wind.png"


export default function SoundSelect() {
    return (
        <section>
            <p>You can choose a background track</p>
            <div className={container}>
                <AudioPlayer
                    image={rainIcon}
                    id="396506"
                />
                <AudioPlayer
                    image={waveIcon}
                    id="450755"
                />
                <AudioPlayer
                    image={bellIcon}
                    id="436935"
                />
                <AudioPlayer
                    image={windIcon}
                    id="376415"
                />
            </div>
        </section>
    )
}