import { useRef, useEffect } from "react";
import { btn, selected, disabled, btnDisabled } from "../assets/styles/SoundSelect.module.css"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchSound, updateUrl } from "../features/sounds/soundSlice"

export default function AudioPlayer(props) {
    const soundId = useSelector((state) => state.changeSound.id)
    const audioUrl = useSelector((state) => state.changeSound.url)
    const timerPlaying = useSelector((state) => state.changeTime.isPlaying)
    const dispatch = useDispatch()
    const audioRef = useRef(null);

    useEffect(() => {
        if (soundId != 0) {
            axios
                .get(`https://freesound.org/apiv2/sounds/${soundId}/?format=json&token=6S8obs1h5zSc83hHqdfna9Uf2kH21vu5YkzSNcOk`)
                .then((resp) => {
                    console.log(resp.data)
                    dispatch(updateUrl(resp.data.previews["preview-hq-mp3"]))
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [soundId])

    useEffect(() => {
        if (audioUrl != "") {
            audioRef.current.play()
            setTimeout(() => { audioRef.current.pause() }, 3000)
        }
    }, [audioUrl])

    useEffect(() => {
        audioRef.current.loop = true
        timerPlaying ? audioRef.current.play() : audioRef.current.pause()
    }, [timerPlaying])

    if (timerPlaying) {
        return (
            <li className={soundId == props.id ? selected : disabled}>
                <img
                    className={btnDisabled}
                    src={props.image}
                />
                <audio
                    ref={audioRef}
                    src={audioUrl}
                />
            </li>
        )
    } else {
        return (
            <li className={soundId == props.id ? selected : undefined}>
                <img
                    className={btn}
                    src={props.image}
                    onClick={() => dispatch(fetchSound(props.id))}
                />
                <audio
                    ref={audioRef}
                    src={audioUrl}
                />
            </li>
        )
    }
}