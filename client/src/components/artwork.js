import '../css/artwork.css'

export default function Artwork(props) {
    return (
        <div className="frame">
            <div className="artwork">
                {props.img}
            </div>
            <div className="nameplate">
                {props.name}
            </div>
        </div>
    )
}