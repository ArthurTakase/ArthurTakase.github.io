import Navbar from './Navbar'
import '../scss/project.scss'

export default function Project({
    project : {
        current,
        title,
        desc,
        img_src,
        img_class,
        link,
        macaron
    }
}) {
    return (
    <>
        <Navbar current={current}/>
        <div className="main">
            <div className='content project'>
                <img src={img_src} alt="" className={img_class}/>
                <div className="infos">
                    { macaron ? <div className="macaron">{macaron}</div> : <></> }
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <a href={link} target={"_blank"}><i className='bx bx-play'></i></a>
                </div>
            </div>
        </div>
    </>
    )
}