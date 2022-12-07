import Navbar from './components/Navbar'
import Projects from './assets/projects.json'
import Card from './components/Card'

export default function List({type}) {
    var ps = Projects.filter(project => project.type.includes(type))

    return (
    <>
        <Navbar current={type}/>
        <div className="main">
            <div className='content cardList'>
                {ps.map(p => (<Card key={p.title} project={p}/> ))}
            </div>
        </div>
    </>
    )
}