import '../scss/card.scss'
import Modal from './Modal'
import { useState } from 'react'

export default function Card({ project }) {
    const [open, setOpen] = useState(false)

    const getPicture = (url) => {
        if (url.startsWith("http")) { return url }
        return `../assets/${url}`
    }

    const handleClick = () => {
        console.log('click')
        setOpen(true)
    }

    return (
        <>
        <Modal project={project} open={open} setOpen={setOpen} />
        <article className="card" tabIndex={0} onClick={() => handleClick()}>
            <img className="card-img" src={getPicture(project.img)} />
            <p className="card-title">{project.title}</p>
            <div className="card-infos">
                <p className="card-header">{project.title}</p>
                <p className="card-desc">{project.description}</p>
            </div>
        </article>
        </>
    )
}