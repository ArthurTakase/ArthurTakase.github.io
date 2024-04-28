import '../scss/shape.scss'

export default function Shape({ shapeClass, colorClass, positionClass }) {
    return (
        <div className={`shape ${shapeClass} ${colorClass} ${positionClass}`}></div>
    )
}