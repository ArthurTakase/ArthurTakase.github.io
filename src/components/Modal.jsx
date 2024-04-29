import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import '../scss/modal.scss';

export default function Modal({ project, open, setOpen })
{
    const formatDate = (date) => {
        // YYYY/MM/DD -> DD/MM/YYYY
        const [year, month, day] = date.split('/')
        return `${month}/${year}`
    }

    const getPicture = (url) => {
        if (url.startsWith("http")) { return url }
        return `../assets/${url}`
    }

    return (
        <Rodal visible={open} onClose={() => { setOpen(false) }} closeOnEsc className="modal" animation="zoom">
            <div className="modalContent">
                <img className="modalHeaderPicture" src={getPicture(project.img)} />
                <div className='modalInfos'>
                    <div className="modalTitle">{project.title}</div>
                    <div className="moadlTag">
                        {project.tech.map(tech => { return <a key={tech.name + project.title} title={tech.name}><i className={tech.logo}></i>{ tech.logo ? "" : <small>{tech.name}</small> }</a> })}
                    </div>
                </div>
                <div className="modalSubInfos">
                    <span>Created at: {formatDate(project.create_at)}</span>
                    {
                        project.employers
                        ? <span>Employer: {project.employers}</span>
                        : <></>
                    }
                    {
                        project.visibility
                        ? <span>Visibility: {project.visibility}</span>
                        : <></>
                    }
                    {
                        project.gamejam
                        ? <span>Game Jam: {project.gamejam}</span>
                        : <></>
                    }
                </div>
                <div className="modalDescription">
                    {project.description}
                </div>
                <div className="modalLink">
                    {project.link.map(link => { return (
                        <a key={link.url} href={link.url} target="_blank">
                            <i className='bx bx-link' ></i>
                            <span>{link.name}</span>
                        </a>
                    ) })}
                </div>
                {!project.comments || project.comments?.length == 0
                    ? <></>
                    : <div className='modalComments'>
                        {project.comments.map(comment => { return (
                            <article key={comment.title + comment.content}>
                                <h1>{comment.title}</h1>
                                <h2>{comment.content}</h2>
                            </article>
                        ) })}
                    </div>
                }
                {!project.gallery || project.gallery?.length == 0
                    ? <></>
                    : <div className='modalGallery'>
                        {project.gallery.map(picture => { return (
                            <img key={picture} src={getPicture(picture)} />
                        ) })}
                    </div>
                }
            </div>
        </Rodal>
    )
}