import '../scss/navbar.scss'
import { Navlink, NavlinkPicture } from './Navlink'
import bigProject from '../assets/bigProjects.json'

export default function Navbar({current}) {
    return (
        <nav>
            <NavlinkPicture current={current} to="about" img='../assets/icon.jpeg' />
            <Navlink current={current} to="pro" icon="bx-buildings" />
            <Navlink current={current} to="perso" icon="bx-user" />
            <Navlink current={current} to="game" icon="bx-joystick-alt" />

            {
                bigProject.map(project => (
                    <NavlinkPicture
                        key={project.current}
                        current={current}
                        to={project.current}
                        img={project.navbar_img}
                    />
                ))
            }
        </nav>
    )
}