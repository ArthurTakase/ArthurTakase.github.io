import '../scss/navbar.scss'
import { Navlink, NavlinkPicture } from './Navlink'

export default function Navbar({current}) {
    return (
        <nav>
            <NavlinkPicture current={current} to="about" img='../assets/icon.jpeg' />
            <Navlink current={current} to="pro" icon="bx-buildings" />
            <Navlink current={current} to="perso" icon="bx-user" />
            <Navlink current={current} to="game" icon="bx-joystick-alt" />
            <NavlinkPicture current={current} to="herojs" img='../assets/herojs.png' />
        </nav>
    )
}