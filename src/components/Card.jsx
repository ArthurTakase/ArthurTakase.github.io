import '../scss/card.scss'

export default function Card({ project }) {
    function getPicture(url) {
        if (url.startsWith("http")) { return url }
        return `../assets/${url}`
    }

    function changeBackground(url) {
        if (!url) {
            document.getElementsByClassName("main")[0].style.background = "rgb(0, 0, 0)"
            return;
        }
        document.getElementsByClassName("main")[0].style.background = "rgba(0, 0, 0, 0.5)"
        document.body.style.background = "url(" + url + ")"
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundAttachment = "fixed"
    }

    return (
        <article className="card" tabIndex={0}
            onMouseEnter={() => changeBackground(project.gif ? getPicture(project.gif) : getPicture(project.img))}
            onFocus={() => changeBackground(project.gif ? getPicture(project.gif) : getPicture(project.img))}
            onMouseLeave={() => document.getElementsByClassName("main")[0].style.background = "rgb(0, 0, 0)"}>
            <img className="card-img" src={getPicture(project.img)} />
            <div className="card-infos">
                <p className="card-header">{project.title}</p>
                <p className="card-desc">{project.description}</p>
            </div>
            <div className="card-tag">
                {project.tech.map(tech => { return <a key={tech.name + project.title} title={tech.name}><i className={tech.logo}></i></a> })}
            </div>
            <div className="card-link">
                {project.link.map(link => { return <a key={link.url} href={link.url} target="_blank"><i className={link.logo}></i></a> })}
            </div>
        </article>
    )
}