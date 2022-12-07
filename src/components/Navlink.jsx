import { Link } from "react-router-dom"
import '../scss/navbar.scss'

export function Navlink({current, to, icon}) {
    return (
        <Link to={`/${to}`} title={to} className={`navLink ${current == to ? "active" : ""}`}>
            <i className={`bx ${icon} navIcon`} ></i>
        </Link>
    )
}

export function NavlinkPicture({current, to, img}) {
    return (
        <Link to={`/${to}`} title={to} className={`navLink ${current == to ? "active" : ""}`}>
            <img src={img} className="navIcon pp" />
        </Link>
    )
}