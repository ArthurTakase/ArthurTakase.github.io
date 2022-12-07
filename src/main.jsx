import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

import './scss/style.scss'

import List from './List.jsx'
import About from './About.jsx'
import Herojs from './HeroJs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <Routes>
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/game' element={<List type="game" />} />
            <Route path='/pro' element={<List type="pro" />} />
            <Route path='/perso' element={<List type="perso" />} />
            <Route path='/herojs' element={<Herojs />} />
        </Routes>
    </HashRouter>
)
