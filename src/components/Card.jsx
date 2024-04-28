import '../scss/card.scss'

export default function Card({ project }) {
    function getPicture(url) {
        if (url.startsWith("http")) { return url }
        return `../assets/${url}`
    }

    return (
        <article className="card" tabIndex={0}>
            <img className="card-img" src={getPicture(project.img)} />
            <div className="card-infos">
                <p className="card-header">{project.title}</p>
                <p className="card-desc">{project.description}</p>
            </div>
            <div className="card-tag">
                {project.tech.map(tech => { return <a key={tech.name + project.title} title={tech.name}><i className={tech.logo}></i>{ tech.logo ? "" : <small>{tech.name}</small> }</a> })}
            </div>
            <div className="card-link">
                {project.link.map(link => { return <a key={link.url} href={link.url} target="_blank"><i className={link.logo}></i></a> })}
            </div>
        </article>
    )
}