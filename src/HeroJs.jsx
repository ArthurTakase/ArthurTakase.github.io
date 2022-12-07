import Navbar from './components/Navbar'
import './scss/herojs.scss'

export default function Herojs() {
    return (
    <>
        <Navbar current="herojs"/>
        <div className="main">
            <img className="back" src="../assets/heroInterface.png" alt=""/>
            <div className='content herojs'>
                <img src="../assets/doki.png" alt=""/>
                <div className="infos">
                    <h1>Herojs</h1>
                    <p>Hero.js is an Open Source project of Visual Novel game engine. The goal of this project is to allow you to create Visual Novels (from a simple Doki Doki to a RPG with fighting system), without coding. So what are you waiting for to start creating your stories?</p>
                    <a href="https://arthurtakase.github.io/Heros.js" target={"_blank"}>Go to Website</a>
                </div>
            </div>
        </div>
    </>
    )
}