import Navbar from './components/Navbar'
import Projects from './assets/projects.json'
import Card from './components/Card'

export default function List({type}) {
    var ps = Projects.filter(project => project.type.includes(type)).sort((a, b) => {
        return new Date(a.create_at) - new Date(b.create_at)
    })

    // sort the projects by date (newest first)
    ps.sort((a, b) => { return new Date(b.create_at) - new Date(a.create_at) })

    // create a dictionary of the projects with the year as the key
    var dict = {}
    ps.forEach(p => {
        var year = new Date(p.create_at).getFullYear()
        if (dict[year] === undefined) { dict[year] = [] }
        dict[year].push(p)
    })

    return (
    <>
        <Navbar current={type}/>
        <div className="main list">
            <div className="timeline"></div>
            {
                Object.keys(dict).sort((a, b) => b - a).map(year => (
                    <div className="yearList" key={year}>
                        <div className="year">
                            <div className="dot"></div>
                            <div className="title">{year}</div>
                        </div>
                        <div className="projects">
                        {
                            dict[year].map(p => (
                                <Card key={p.id} project={p}/>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </div>
    </>
    )
}