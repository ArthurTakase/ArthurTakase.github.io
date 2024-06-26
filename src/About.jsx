import Navbar from './components/Navbar'
import './scss/about.scss'

export default function About() {
    const url = {
        "github": "https://github.com/ArthurTakase",
        "linkedin": "https://www.linkedin.com/in/arthur-decaen-a49335207/",
        "artstation": "https://takaaase.artstation.com/",
        "cv": "https://rxresu.me/decaen.pro/full"
    }

    return (
    <>
        <Navbar current="about"/>
        <div className="main">
            <div className="about">
                <p>Hi, I'm</p>
                <h1>ARTHUR DECAEN</h1>
                <p>
                    Studying for a Masters (Epitech MSC) after 3 years at Epitech.<br />
                    I code, I draw and in between, I watch Movies.
                </p>
                <div className='btn-zone'>
                    <a href={url["github"]} target="_blank"><i className="fa-brands fa-github about-icon"></i><p>Github</p></a>
                    <a href={url["linkedin"]} target="_blank"><i className="fa-brands fa-linkedin about-icon"></i><p>LinkedIn</p></a>
                    <a href={url["artstation"]} target="_blank"><i className="fa-brands fa-artstation about-icon"></i><p>ArtStation</p></a>
                    <a href={url["cv"]} target="_blank"><i className='bx bx-file about-icon'></i><p>CV</p></a>
                </div>
            </div>
        </div>
    </>
    )
}
